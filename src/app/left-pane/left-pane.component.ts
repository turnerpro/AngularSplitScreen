import { Component, OnInit } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser/src/security/dom_sanitization_service';
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-left-pane',
  templateUrl: './left-pane.component.html',
  styleUrls: ['./left-pane.component.css']
})

export class LeftPaneComponent implements OnInit {
  currentURL: SafeUrl;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
  }

  loadLeftURL(leftPaneURLValue) {
    console.log(leftPaneURLValue);
  }

  updateSrc(url) {
    this.currentURL = this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }
}
