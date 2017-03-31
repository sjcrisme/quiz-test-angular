import { Component,OnInit } from '@angular/core';
import { ItemsService } from './../services/items.service';
import { Router } from '@angular/router';

@Component({
    selector:'hr-items-list',
    template:`
    <div> Items list </div>
    <table class="table">
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>SequenceNumber</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    <tr *ngFor="let item of items">
        <td>{{item.id}}</td>
        <td><a [routerLink]="['/edit/',item.id]">{{ item.Name}}</a></td>
        <td>{{item.SequenceNumber}}</td>
        <td>{{item.Price}}</td>
        <td>
            <a [routerLink]="['/edit/',item.id]" class="glyphicon glyphicon-pencil"></a>  
            <span (click)="deleteItem(item.id)" class="glyphicon glyphicon-remove"></span>
        </td>
    </tr>
    </tbody>
    <tfoot>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td>{{total}}</td>
      <td></td>
    </tr>
  </tfoot>
    </table>
    <button [routerLink]="['/add/']"> add item </button>

    `
})

export class ItemsListComponent implements OnInit {
    private items;
    total:number = 0;

    constructor(private itemsService:ItemsService, private route:Router) {}

    ngOnInit(){
        this.getItems();
    }

    getItems(){
        var total = this.total;
        this.itemsService.getItems()
            .subscribe(
                items=>{
                 this.items = items;
                 items.map(function(item) {
                    total += parseInt(item.Price);
                 });
                 this.total = total;
                },
                error => console.error(error)
            );
    }
    
    deleteItem(id){
        this.itemsService.deleteItem(id).subscribe(
            res=>this.getItems(),
            error => console.error("Error: ",error)
        )
    }
}