import { Component, OnInit } from '@angular/core';
import { Subject, from, merge, Observable } from 'rxjs';
import { switchMap, map, windowCount, scan, take, tap } from 'rxjs/operators';

import { ChatModule, Message, User, Action, ExecuteActionEvent, SendMessageEvent } from '@progress/kendo-angular-conversational-ui';
import { ChatService } from './../../services/chat.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  providers: [ ChatService ],
})
export class HomepageComponent implements OnInit {

  openChat = false;



  public feed: Observable<Message[]>;

  public readonly user: User = {
    id: 1
  };

  public readonly bot: User = {
    id: 0
  };

  private local: Subject<Message> = new Subject<Message>();

  constructor(private svc: ChatService) {
    const hello: Message = {
      author: this.bot,
      suggestedActions: [{
        type: 'reply',
        value: 'Neat!'
      }, {
        type: 'reply',
        value: 'Thanks, but this is boring.'
      }],
      timestamp: new Date(),
      text: 'Hello, this is a demo bot. I don`t do much, but I can count symbols!'
    };

    // Merge local and remote messages into a single stream
    this.feed = merge(
      from([ hello ]),
      this.local,
      this.svc.responses.pipe(
        map((response): Message => ({
          author: this.bot,
          text: response
        })
      ))
    ).pipe(
      // ... and emit an array of all messages
      scan((acc: Message[], x: Message) => [...acc, x], [])
    );
  }

  public sendMessage(e: SendMessageEvent): void {
    this.local.next(e.message);

    this.local.next({
      author: this.bot,
      typing: true
    });

    this.svc.submit(e.message.text);
  }
  ngOnInit(): void {
  }

}
