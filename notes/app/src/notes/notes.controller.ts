import { Controller, Get, Param, Post, Body, Patch, Delete} from '@nestjs/common';
import { NotesService } from './notes.service';
import { Note } from './interfaces';


@Controller('notes')
export class NotesController {
  constructor(private notesService: NotesService) {}

  @Get()
  getNotes() {
    return this.notesService.getNotes();
  }

  @Get('stats')
  getStats() {
    return this.notesService.getStats();
  }

  @Get(':id')
  getNote(@Param() params) {
    return this.notesService.getNotes().filter((i) => i.id == params.id);
  }

  @Post()
  createNote(@Body() note: Note) {
    this.notesService.createNote(note);
  }

  @Patch(':id')
  updateNote(@Param() params, @Body() note: Note) {
    this.notesService.updateNote({ note, params });
  }

  @Delete(':id')
  deleteNote(@Param() params) {
    this.notesService.deleteNote(params.id);
  }
}
