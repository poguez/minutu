import { Component, ViewChild  } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignaturePadModule } from 'angular2-signaturepad';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';



@Component({
  selector: 'page-drawing-pad',
  template: '<signature-pad [options]="signaturePadOptions" (onBeginEvent)="drawStart()" (onEndEvent)="drawComplete()"></signature-pad>'
})
export class DrawingPadPage {

  ionViewDidLoad() {
  }

  @ViewChild(SignaturePad) signaturePad: SignaturePad;

  public signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'minWidth': 5,
    'canvasWidth': 500,
    'canvasHeight': 300,
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
