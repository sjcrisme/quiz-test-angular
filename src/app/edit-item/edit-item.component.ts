import { ItemsService } from './../services/items.service';
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hr-edit-item',
  template: `
    <p>
      edit- "<span [innerHTML]="itemName"></span> "!
    </p>
    {{item|json}}
    <form novalidate (ngSubmit)="upodateItem()">
      <input name="Name" type="text" placeholder="Name" [(ngModel)]="itemName">
      <button>Submit</button>
    </form>
  `,
  styles: []
})
export class EditItemComponent implements OnInit {
  itemId;
  item;
  itemName;

  constructor(private itemsService:ItemsService, 
              private activatedRoute: ActivatedRoute, 
              private route: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (param)=>{ this.itemId = param['id'];
                 this.getItem();              
                },
      error =>console.log(error)
    )
  }
  //TODO: WHY not work with item.Name ?
  getItem(){
    this.itemsService.getItem(this.itemId).subscribe(
      //item =>item,
      (item) =>{ 
        this.item = item; 
        this.itemName = item.Name;
      },
      error => console.log(error)
    )
  }

  //TODO : WHY I can't get refreshed item object and I need to recreate it form vars of class!!!
  upodateItem() {
    this.itemsService.updateItem({"id":this.itemId,
                                  "Name":this.itemName,
                                  "SequenceNumber":this.item.SequenceNumber,
                                  "Price":this.item.Price
                                }).subscribe(
            res => this.route.navigate(['list']),
            error => console.error(error)
    )
  }
}
