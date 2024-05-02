import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Raba3 } from 'src/app/Models/raba3';
import { Raba3Service } from 'src/app/Services/raba3.service';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit{
  idJeux!: number

  raba3: Raba3 = new Raba3();
  constructor(private act:ActivatedRoute,private raba3Service:Raba3Service){ }
  public sessions: Array<Raba3> =[];
  ngOnInit(): void {
    this.idJeux = this.act.snapshot.params['idJeux']
    this.getListSessions(this.idJeux);
    
  }
  getListSessions(idJeux:number)
  {
   this.raba3Service.getListSessions(this.idJeux).subscribe(
     (d) => {
      d.forEach((type:Raba3) =>
       {
         console.log(type.idRaba3);
         console.log(type.description);
         console.log(type.nombrePlaces);
         console.log(type.dateDebut);
         console.log(type.dateFin);
        
         this.sessions = d ;
       })
     },
     (error) => 
       {
         console.error(error);
       }
     );
    }

    getNumberArray(count: number): number[] {
      return Array.from({ length: count }, (_, i) => i + 1);
    }


}




