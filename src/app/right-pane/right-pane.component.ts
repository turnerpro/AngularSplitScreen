import { Component, OnInit } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser/src/security/dom_sanitization_service';
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-right-pane',
  templateUrl: './right-pane.component.html',
  styleUrls: ['./right-pane.component.css']
})

export class RightPaneComponent implements OnInit {
  currentURL: SafeUrl;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.currentURL = this.sanitizer.bypassSecurityTrustResourceUrl('http://nhl.com')
  }

  loadLeftURL(leftPaneURLValue) {
    console.log(leftPaneURLValue);
  }

  updateSrc(url) {
    this.currentURL = this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }
}
