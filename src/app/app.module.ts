import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FileLibModule } from '../../projects/file-lib/src/lib/file-lib.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FileLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
