import { Component, OnInit } from '@angular/core';
import{CrudService} from './../../../shared/services/crud.service';
import{ActivatedRoute} from '@angular/router';

import { Router } from '@angular/router';

@Component({
  selector: 'app-add-solicitud',
  templateUrl: './add-solicitud.component.html',
  styleUrls: ['./add-solicitud.component.scss']
})
export class AddSolicitudComponent implements OnInit {
  private idSolicitud;
  private solicitud:any;
  public action:string;
  public cargando=true;
  espiner:Boolean=false;


  constructor(private _router:ActivatedRoute, private _crud:CrudService, private router:Router) {
      this.idSolicitud= this._router.snapshot.paramMap.get('id');
     
   
   }

  ngOnInit() {
    this.getCategoria();
  }


  getCategoria(){
    this._crud.getSolicitud(this.idSolicitud)
                                            .subscribe(solicitud=>
                                                                {
                                                                  if(solicitud){
                                                                    this.cargando=false;
                                                                    this.solicitud=solicitud;
                                                                    console.log(this.solicitud);
                                                                  }
                                                      });
  
  }

  update(estado:string){
    this.espiner=true;
    this.solicitud.estado=estado;
    this._crud.updateSolicitud(this.solicitud).subscribe(solicitud=>{
                                                      if(solicitud){
                                                        this.solicitud=solicitud;
                                                        console.log(this.solicitud);
                                                        this.espiner=false;
                                                        this.router.navigate(['/tables']);    

                                                        // alert('actualizo.....');
                                                      }
                                            })
  }

}
