import { Component, ViewChild  } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder} from '@angular/forms';


@Component({
  templateUrl: 'choose-course.html'
})

export class ChooseCourse {

  courseList: {id: number, name:string}[];
  topicList: Array<{id: number, name: string}>;
  minutu: {course: string, topic: string};

  logForm() {
    console.log()
  }

  ionViewDidLoad() {
    console.log('Hello DrawingPadPage Page');
  }

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder) {

    this.courseList = [
      {id: 1, name: "Crowdsourcing"},
      {id: 2, name: "Distributed Algorithms"},
      {id: 3, name: "Human Computer Interaction"},
      {id: 4, name: "Web Engineering"},
    ];
    this.topicList = [
      {id: 1, name: "Design"},
      {id: 2, name: "Gamification"},
      {id: 3, name: "Data Labeling"},
      {id: 4, name: "Human Machine Cooperation"},
    ];
    this.minutu = {
      course: '',
      topic: ''
    };
  }



  // selectedItem: any;
  // icons: string[];
  // items: Array<{title: string, note: string, icon: string}>;
  //
  // constructor(public navCtrl: NavController, public navParams: NavParams) {
  //   // If we navigated to this page, we will have an item available as a nav param
  //   this.selectedItem = navParams.get('item');
  //
  //   this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
  //   'american-football', 'boat', 'bluetooth', 'build'];
  //
  //   this.items = [];
  //   for(let i = 1; i < 11; i++) {
  //     this.items.push({
  //       title: 'Item ' + i,
  //       note: 'This is item #' + i,
  //       icon: this.icons[Math.floor(Math.random() * this.icons.length)]
  //     });
  //   }
  // }
  //
  // itemTapped(event, item) {
  //   this.navCtrl.push(ItemDetailsPage, {
  //     item: item
  //   });
  // }
}
