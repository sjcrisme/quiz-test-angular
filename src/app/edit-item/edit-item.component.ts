import { ItemsService } from './../services/items.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'hr-edit-item',
  template: `
    <p>
      edit-item !
    </p>
  `,
  styles: []
})
export class EditItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
