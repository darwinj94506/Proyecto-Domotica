export class Alarma {
    constructor(        
        public id?:string,
        public fecha?:string,
        public hora?:string,
        public tipo?:string,                      
        public sector?:string,
        public estado?:string,
        public usuarioId?:string                
    ){
        this.id=id;
        this.fecha=fecha;
        this.hora=hora;
        this.tipo=tipo;
        this.sector=sector;
        this.estado=estado;
        this.usuarioId=usuarioId;
    }      
}
