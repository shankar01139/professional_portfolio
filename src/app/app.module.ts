import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { MyWorkComponent } from './components/my-work/my-work.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { JourneyComponent } from './components/journey/journey.component';
import { PlaygroundComponent } from './components/playground/playground.component';
import { HighlightTextPipe } from './highlight-text.pipe';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectInfoComponent } from './components/project-info/project-info.component';
import { MainPortfolioLayoutComponent } from './components/main-portfolio-layout/main-portfolio-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    MyWorkComponent,
    TestimonialComponent,
    FooterComponent,
    AboutComponent,
    JourneyComponent,
    PlaygroundComponent,
    HighlightTextPipe,
    ContactSectionComponent,
    ProjectInfoComponent,
    MainPortfolioLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
