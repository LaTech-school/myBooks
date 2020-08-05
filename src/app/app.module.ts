import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module'; // Import du fichier de routage
import { AppComponent } from './app.component';
import { AdsComponent } from './components/ads/ads.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AComponent } from './pages/a/a.component';
import { BComponent } from './pages/b/b.component';
import { CComponent } from './pages/c/c.component';

@NgModule({
  declarations: [
    AppComponent,
    AdsComponent,
    SidebarComponent,
    AComponent,
    BComponent,
    CComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // import de la classe de routage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
