import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import{CrudService} from './../../shared/services/crud.service';


@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss'],
    animations: [routerTransition()]
})
export class GridComponent implements OnInit {
    fileToUpload: File = null;
    
    handleFileInput(files: FileList) {
        this.fileToUpload = files.item(0);
    }

    uploadFileToActivity() {
        this.fileUploadService.postFile(this.fileToUpload).subscribe(data => {
          // do something, if upload success
          }, error => {
            console.log(error);
          });
      }
    
    constructor(private fileUploadService:CrudService) {}

    ngOnInit() {}
}
