import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ItemsService } from './../services/items.service';

@Component({
    selector:'hr-add-item',
    template:`
        <div> Add item</div>
        <form novalidate (ngSubmit)="createItem(form)" #form >
            <input name="Name" type="text" placeholder="name" ><br>
            <input name="Price" type="text" placeholder="price" ><br>
            <input name="SequenceNumber" type="text" placeholder="SequenceNumber" ><br>
            <button>Submit</button>  
         </form>
    `
})

export class AddItemComponent { 

    size:number;

    constructor(private itemsService: ItemsService, private route: Router){ }

    //TODO : this is ugly :(
    createItem(form){
        this.itemsService.getItems().subscribe(
                items=>{ this.size = items.length +1 ;

                         this.itemsService.createItem(
                                        {
                                            //"id": this.size,
                                            "sequenceNumber": form[2].value,
                                            "name": form[0].value,
                                            "price": form[1].value
                                        }).subscribe(
                                        res => this.route.navigate(['list']),
                                        error => console.error(error)
                                    );

                        },
                error => console.error(error)
            );

        
    }
}   
