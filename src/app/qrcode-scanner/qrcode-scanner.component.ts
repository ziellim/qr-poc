import { Component, OnInit } from '@angular/core';
import BarcodeFormat from "@zxing/library/esm/core/BarcodeFormat";
import {Observable} from "rxjs";
import {any} from "codelyzer/util/function";

@Component({
  selector: 'app-qrcode-scanner',
  templateUrl: './qrcode-scanner.component.html',
  styleUrls: ['./qrcode-scanner.component.css']
})
export class QrcodeScannerComponent implements OnInit {

  scannerEnabled: boolean;
  user: string;

  constructor() {
    this.scannerEnabled = false;
    this.user = 'unknown';
  }

  ngOnInit() {
  }

  clickMe() {
    this.scannerEnabled = !this.scannerEnabled;
    console.log('clicked');
  }

  scanSuccessHandler(user) {
   this.scannerEnabled = false;
   this.user = user;
  }
}
