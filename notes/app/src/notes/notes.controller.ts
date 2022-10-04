import { Controller, Get } from '@nestjs/common';
import { NotesService } from './notes.service';

interface Note {
  id: number;
  name: string;
  category: string;
  content: string;
  createdAt: string;
  dates: string;
  status: string;
}

@Controller('notes')
export class NotesController {
    constructor (private notesService:NotesService) {}

    @Get()
    getProducts() { 
        return this.notesService.getProducts();
    }
}
