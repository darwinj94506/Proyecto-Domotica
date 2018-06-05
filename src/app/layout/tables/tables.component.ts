import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import{CrudService} from './../../shared/services/crud.service';

declare var jQuery:any;
declare var $:any;
@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})

export class TablesComponent implements OnInit {
    private solicitud:any;
    espiner:boolean=true;
    
    solicitudes:any[];
    constructor(private _crudService:CrudService) {}
    ngOnInit() {
        this.getSolicitudes();
    }

    
    getSolicitudes(){
        this._crudService.getSolicitudesAceptadas().subscribe(
        response=>{
            console.log(response);
          if(!response){
            console.log('solicitudes');
          }else{
            this.solicitudes=response;
            this.espiner=false;
            console.log(this.solicitudes);
          }
        },
        error=>{
          console.log(<any>error);
        }
      );
    }

    verModal(){
        $('#exampleModal').on('show.bs.modal', function (event) {
            var button = $(event.relatedTarget) // Button that triggered the modal
            var recipient = button.data('whatever') // Extract info from data-* attributes
            // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
            // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
            var modal = $(this)
            modal.find('.modal-title').text('New message to ' + recipient)
            modal.find('.modal-body input').val(recipient)
          })
    }
}
