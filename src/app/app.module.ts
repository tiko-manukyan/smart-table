import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { CKEditorModule} from '@ckeditor/ckeditor5-angular';
import {FormsModule} from '@angular/forms';
import {EditorComponent} from './components/table/editor/editor.component';
import { ColorPickerComponent } from './components/table/color-picker/color-picker.component';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    EditorComponent,
    ColorPickerComponent],
  imports: [
    BrowserModule,
    Ng2SmartTableModule,
    CKEditorModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
