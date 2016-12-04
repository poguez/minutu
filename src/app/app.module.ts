import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { WelcomePage } from '../pages/welcome-page/welcome-page';
import { Feedback } from '../pages/feedback/feedback';
import { ChooseCourse } from '../pages/choose-course/choose-course';
import { Slides } from '../pages/slides/slides';


@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    ChooseCourse,
    Feedback,
    Slides
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    ChooseCourse,
    Feedback,
    Slides
  ],
  providers: []
})
export class AppModule {}
