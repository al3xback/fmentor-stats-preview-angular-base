import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './main/card/card.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		MainComponent,
		FooterComponent,
  CardComponent
	],
	imports: [BrowserModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
