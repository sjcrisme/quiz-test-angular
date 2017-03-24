import { Routes } from '@angular/router';

import { ItemsListComponent } from './items-list/items-list.component';
import { AddItemComponent } from './add-item/add-item.component';
import { DeleteItemComponent } from "app/delete-item/delete-item.component";
import { EditItemComponent } from './edit-item/edit-item.component';

export const ROUTES:Routes = [
    { path:'list', component:ItemsListComponent },
    { path:'add', component:AddItemComponent },
    { path:'edit/:id', component:EditItemComponent },
    { path:'delete/:pid', component:DeleteItemComponent },

    { path:'**', redirectTo:'list'}
];