import { Component, ViewChild  } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignaturePadModule } from 'angular2-signaturepad';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';



@Component({
  selector: 'page-drawing-pad',
  templateUrl: 'feedback.html'
})
export class Feedback {
  course = "Crowdsourcing";
  topic = "gamification";

  ionViewDidLoad() {
  }

  @ViewChild(SignaturePad) signaturePad: SignaturePad;

  public signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'minWidth': 183,
    'canvasWidth': 320,
    'penColor':  "rgba(255,165,0,0.65)"
  };

  constructor(public navCtrl: NavController) {
    // no-op
  }

  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 5); // set szimek/signature_pad options at runtime
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }

  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    console.log(this.signaturePad.toDataURL());
  }

  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }

}
