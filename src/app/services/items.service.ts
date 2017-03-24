import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const API_ENDPOINT = 'http://localhost:3000/items';

@Injectable()

export class ItemsService {
    constructor(private http:Http){ }

    getItems() {
        return this.http.get(API_ENDPOINT)
        .map( (res:Response) => res.json() );
    }

    getItem(id) {
        return this.http.get(`${API_ENDPOINT}/${id}`)
         .map((res: Response) => res.json());
    }

    updateItem(item){
        return this.http.put(`${API_ENDPOINT}/${item.id}`,item)
                        .map((res:Response)=>res.json());
    }
    // delItem(item){
    //     return this.http.delete(`${API_ENDPOINT}/${item.SequenceNumber}`)
    //                 .map((res:Response) => res.json() );
    // }
}