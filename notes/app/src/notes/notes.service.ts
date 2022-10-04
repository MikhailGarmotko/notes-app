import { Injectable } from '@nestjs/common';

@Injectable()
export class NotesService {
    getProducts() { 
        return [
            {id:1, name:"Jack"},
            {id:2, name:"Bob"}
        ]
    }
}
