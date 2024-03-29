import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar } from 'ionic-native';


import { WelcomePage } from '../pages/welcome-page/welcome-page';
import { ChooseCourse } from '../pages/choose-course/choose-course';
import { Feedback } from '../pages/feedback/feedback';
import { Slides } from '../pages/slides/slides';
import { DrawingPadPage } from '../pages/drawing-pad/drawing-pad';
import { FeedbackReadyPage } from '../pages/feedback-ready/feedback-ready';
import { ReviewPage } from '../pages/review/review';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = WelcomePage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Welcome', component: WelcomePage },
      { title: 'ChooseCourse', component: ChooseCourse },
      { title: 'Feedback', component: Feedback },
      { title: 'Slides', component: Slides },
      { title: 'FeedbackReady', component: FeedbackReadyPage },
      { title: 'ReviewPage', component: ReviewPage },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
