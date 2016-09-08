import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {MdToolbarModule} from '@angular2-material/toolbar';
import {MdButtonModule} from '@angular2-material/button';
import {MdSlideToggleModule} from '@angular2-material/slide-toggle';
// import { MaterialModule } from '@angular2-material/all'; // TODO capire come usarlo

import {AppComponent} from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        MdToolbarModule,
        MdButtonModule,
        MdSlideToggleModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}