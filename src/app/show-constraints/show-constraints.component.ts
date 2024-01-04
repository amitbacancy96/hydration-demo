import { Component, AfterViewInit, ElementRef, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-show-constraints',
  templateUrl: './show-constraints.component.html',
  styleUrls: ['./show-constraints.component.css'],
  // host: { ngSkipHydration: 'true' }
})
export class ShowConstraintsComponent implements OnInit, AfterViewInit {
  paragraphToLoad = 'This is a text which is binded thought <strong>Inner HTML</strong> attribute.'

  constructor(private el: ElementRef, @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object, private seoService: SeoService) {
    this.seoService.createCannonicalTag();
  }
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // console.log(window.location)
    }
    this.seoService.setDocumentTitle('Constraints Page');
    this.seoService.updateMetaTag({ name: "description", content: 'List of constraints in Angular 16 Hydration' });
    this.seoService.updateMetaTag({ property: 'og:title', content: 'fb-title for facebook crawling of hydration constraints.' });
  }

  ngAfterViewInit() {
    // const newdiv = this.renderer.createElement('div');
    // newdiv.innerText = 'This is a renderer generated div';
    // const existingDiv = document.getElementById('domManipulation');
    // this.renderer.appendChild(this.el.nativeElement, newdiv);

    // if (isPlatformBrowser(this.platformId)) {}

    // Direct DOM Manipulation
    const newDiv = this.document.createElement('div');
    newDiv.textContent = 'This is a new div element added using direct DOM manipulation.';
    this.el.nativeElement.appendChild(newDiv);
  }

  changeDOM() {
    const div = document.getElementById('domManipulation');
    const img = document.createElement('img');
    img.src = 'https://picsum.photos/200/300';
    img.alt = 'testImg';
    div?.appendChild(img);
  }

  openConfig() {
    const path = window.location.origin + '/common-config'
    const myWindow = window.open('/common-config', "", "width=500,height=400");
    console.log(myWindow);
  }

}
