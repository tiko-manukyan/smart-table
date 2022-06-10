import {Component, OnInit} from '@angular/core';
import {TableService} from '../../services/table.service';
import {LocalDataSource} from 'ng2-smart-table';

import {EditorComponent} from './editor/editor.component';
import {ColorPickerComponent} from './color-picker/color-picker.component';





@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  data =  [
    {
      title: 'title1',
      color: 'Color1',
      attachment: 'attachment1'
    },
    {
      title: 'title2',
      color: 'COLOr2',
      attachment: 'attachment2'
    }
  ];
  source = new LocalDataSource(this.data);


  settings = {
    actions: {
      add: true,
      edit: true,
      delete: true
    },
    add: {
      addButtonContent: 'Create',
      createButtonContent: 'Save',
      cancelButtonContent: 'Cancel',
    },
    edit: {
      editButtonContent: 'Edit',
    },
    delete: {
      deleteButtonContent: 'Delete',
    },
    columns: {
      title: {
        title: 'Title',
        type: 'custom',
        renderComponent: EditorComponent,
        onComponentInitFunction: (instance: any) => {
          // instance.save.subscribe();
        }
      },
      color: {
        title: 'Color',
          type: 'custom',
          renderComponent: ColorPickerComponent,
      },
      attachment: {
        title: 'Attachment',
      },
    },
  };





  constructor() {}

  ngOnInit(): void {}

}
