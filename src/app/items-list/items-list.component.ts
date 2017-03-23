import { Component,OnInit } from '@angular/core';
import { ItemsService } from './../services/items.service';

@Component({
    selector:'hr-items-list',
    template:`
    <div> Items list </div>
    `
})

export class ItemsListComponent implements OnInit {
    private items;

    constructor(private itemsService:ItemsService) {}

    ngOnInit(){
        this.itemsService.getItems()
            .subscribe(
                items=>this.items = items,
                error => console.error(error)
            );
    }
}