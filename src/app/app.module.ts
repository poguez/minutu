import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { WelcomePage } from '../pages/welcome-page/welcome-page';
import { Feedback } from '../pages/feedback/feedback';
import { ChooseCourse } from '../pages/choose-course/choose-course';
import { Slides } from '../pages/slides/slides';
import { DrawingPadPage } from '../pages/drawing-pad/drawing-pad';
import { SignaturePadModule } from 'angular2-signaturepad';
import { FeedbackReadyPage } from '../pages/feedback-ready/feedback-ready';
import { ReviewPage } from '../pages/review/review';



@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    ChooseCourse,
    Feedback,
    Slides,
    DrawingPadPage,
    FeedbackReadyPage,
    ReviewPage
  ],
  imports: [
    SignaturePadModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    ChooseCourse,
    Feedback,
    Slides,
    DrawingPadPage,
    FeedbackReadyPage,
    ReviewPage
  ],
  providers: []
})
export class AppModule {}
