import { Component, HostListener, OnInit } from '@angular/core';
import { LanguageService } from '../services/language/language.service';
import { AppComponent } from '../app.component';
import { VisibilityOnScrollService } from '../services/visibility-on-scroll/visibility-on-scroll.service';

@Component({
    selector: 'app-about-me',
    standalone: true,
    imports: [AppComponent],
    templateUrl: './about-me.component.html',
    styleUrls: ['./about-me.component.scss', './about-me-mobile.component.scss']
})
export class AboutMeComponent implements OnInit {
    isVisible: boolean = false;

    constructor(public languageService: LanguageService, private visibilityOnScrollService: VisibilityOnScrollService) { }


    ngOnInit(): void {
        this.checkVisibility();
    }


    @HostListener('window:scroll', [])


    onWindowScroll() {
        this.checkVisibility();
    }


    checkVisibility() {
        setTimeout(() => {
            let elementId = 'about-me';
            this.visibilityOnScrollService.onWindowScroll(elementId);
            this.isVisible = this.visibilityOnScrollService.isElementVisible(elementId);
        }, 100);
    }
}