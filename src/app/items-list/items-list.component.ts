import { Component,OnInit } from '@angular/core';
import { ItemsService } from './../services/items.service';
import { Router } from '@angular/router';

@Component({
    selector:'hr-items-list',
    template:`
    <div> Items list </div>
    <ul>
        <li *ngFor="let item of items">
        <a [routerLink]="['/edit/',item.id]">{{ item.Name}}</a>
        </li>
    </ul>
    <button [routerLink]="['/add/']"> add item </button>

    `
})

export class ItemsListComponent implements OnInit {
    private items;

    constructor(private itemsService:ItemsService, private route:Router) {}

    ngOnInit(){
        this.itemsService.getItems()
            .subscribe(
                items=>this.items = items,
                error => console.error(error)
            );
    }
}