import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-chat-bot',
  template: '',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.scss']
})
export class ChatBotComponent implements OnInit {

  public accessToken = 'YOUR_ACCESS_TOKEN';
  public message: Subject<any> = new Subject();

  constructor() { }

  ngOnInit(): void {
  }

}
