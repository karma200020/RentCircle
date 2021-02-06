import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PostServiceService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private postService: PostServiceService,
  ) { }

  ngOnInit(): void {

  }


  postForm = this.fb.group({
    owner: [''],
    item : [''],
    description : [''],
    item_count : [''],
    category : [''],
    contact_number : [''],
    contact_email : [''],
    cost : [''],
    long : [''],
    lat : [''],
  })

  postAd(): void {

    if(this.postForm.valid){
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          console.log(position);
          this.postForm.value.lat = position.coords.latitude;
          this.postForm.value.long = position.coords.longitude;
          this.postForm.value.owner = localStorage.getItem('userpk');
          this.postService.postItem(this.postForm.value).subscribe(
            x => console.log(x)
          )
          console.log(this.postForm.value)
        });
      } else {
        alert('Geolocation is not supported by this browser.');
      }
      console.log(this.postForm.value);
    }


  }




}
