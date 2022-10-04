import { Injectable } from '@nestjs/common';
import initial  from './data';

@Injectable()
export class NotesService {

    notes = initial

    getNotes() {
        return this.notes;
    }

    getStats() { 
        const notesMap = new Set(this.notes.map((i: any) => i.category));
        let summaryData: any = [];
        notesMap.forEach((i) => {
          let activeCount = 0;
          let archivedCount = 0;
          this.notes.map(
            (item: any) =>
              item.category === i
                ? item.status === 'active'
                  ? activeCount++
                  : archivedCount++
                : null,
            0,
          );
          summaryData.push({
            category: i,
            active: activeCount,
            archived: archivedCount,
          });
        });

        return summaryData;
    }
    
    createNote(note) { 
        this.notes = [...this.notes, { ...note}]
    }

    updateNote({ note, params }) { 
        
      
        this.notes = this.notes.map(i => { 
            if (i.id == params.id) { 
                
                return {...note}
            }
            return i;
        })
    }
   
    deleteNote(id) { 
        console.log("delete")
        this.notes = this.notes.filter(i => i.id != id)
    }

}
