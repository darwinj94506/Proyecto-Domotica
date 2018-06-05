import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import{CrudService} from './../../../shared/services/crud.service';
import{CategoriaModel} from './../../../shared/models/categoria.model';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-categoria',
  templateUrl: './add-categoria.component.html',
  styleUrls: ['./add-categoria.component.scss']
})
export class AddCategoriaComponent implements OnInit {
      //Url al que se accede para previsualizar la imagen
  private idCategoria;
  public action:string;
  public  categoria:CategoriaModel;

  espiner:Boolean=false;
  cargando:boolean=false;


  categoriaForm: FormGroup;
  
  constructor(private _router:ActivatedRoute,public router: Router,
       private _crud:CrudService,private fb: FormBuilder) {
     this.createForm(); 
     this.action= this._router.snapshot.paramMap.get('action');
     if(this.action=='Detalle' || this.action=='Editar'){
       this.cargando=true;
        this.idCategoria= this._router.snapshot.paramMap.get('id');
     }else{
      this.categoria=new CategoriaModel('','',true,undefined);  
     }
     console.log("idd",this.idCategoria);
  }
  createForm() {
    this.categoriaForm = this.fb.group({
      nombre: '',
      descripcion: '',
      estado: true,
      documentos: this.fb.array([])
    });
  }


  ngOnInit() {
    if(this.action!='Nueva'){
      this.getCategoria();      
    }
  }
  editarCategoria(){
    this.espiner=true;
    this._crud.editarCategoria(this.categoria,this.idCategoria,null)
                                          .subscribe(()=>{
                                            this.espiner=false;
                                            this.router.navigate(['/forms']);    

                                          })
  }

  eliminarNoticia(i){
    console.log(i);
    this.categoria.documentos.splice(i,1);
    console.log(this.categoria);
    this.espiner=true;
    this._crud.editarCategoria(this.categoria,this.idCategoria,null)
                .subscribe(()=>this.espiner=false);
    
  }

    subirNoticia(){
      let cat:any=this.idCategoria;
      this.espiner=true;
      this._crud.subirPdf(this.filesToUpload).then((n:any)=>{
        console.log(n);
      console.log("ggg",n.result.files.archivo[0].name,this.idCategoria);
      let ob:any={};
      ob.ruta='/comprobantes/categorias/download/'+n.result.files.archivo[0].name;
      ob.nombre=n.result.files.archivo[0].originalFilename;
        this._crud.editarCategoria(this.categoria,this.idCategoria,ob)
                .subscribe(()=>this.espiner=false);
      });
    }

   

  //
  public filesToUpload;
  SubirFileNoticia(FileInput:any) {
    this.filesToUpload=<Array<File>>FileInput.target.files;    
}

  getCategoria(){
    this._crud.getCategoria(this.idCategoria)
                                            .subscribe(categoria=>
                                                                {
                                                                  if(categoria){
                                                                    this.categoria=categoria;
                                                                    console.log(this.categoria);
                                                                    this.cargando=false;
                                                                  }
                                                      });
  
  }

    guardarCategoria(){
      console.log(this.categoria);
      this.espiner=true;
      this._crud.addCategoria(this.categoria)
                                          .subscribe(()=>
                                            {
                                              this.router.navigate(['/forms']);    
                                              this.espiner=false;
                                            });
    }

}
