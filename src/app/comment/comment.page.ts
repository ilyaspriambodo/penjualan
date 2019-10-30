import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs';
import { NavController, NavParams } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-comment',
  templateUrl: 'comment.page.html',
  styleUrls: ['comment.page.scss']
})
export class CommentPage implements OnInit {
 
  commentsData: any;
 
  constructor(
    public apiService: ApiService
  ) {
    this.commentsData = [];
  }
 
  ngOnInit() {
    this.getAllComments();
  }
 
  getAllComments() {
    //Get saved list of students
    this.apiService.getList().subscribe(response => {
      console.log(response);
      this.commentsData = response;
    })
  }
 
  openDetails(item) {
    this.navCtrl.push('CommentbodyPage', {item: commentsData});
  }

  delete(item) {
    //Delete item in Student data
    this.apiService.deleteItem(item.id).subscribe(Response => {
      //Update list after delete is successful
      this.getAllComments();
    });
  }
 
}