
import{Injectable} from '@angular/core';
import * as io from 'socket.io-client'
import{HttpModule,Http,Response,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import{Observable} from 'rxjs/Observable';
import * as Rx from 'rxjs/Rx';
import{GLOBAL} from './global';
import { ObserveOnOperator } from '../../../../node_modules/rxjs/operators/observeOn';

@Injectable()
export class WebsocketService{
  private socket;


  constructor(){ }

  connect():Rx.Subject<MessageEvent>
  {
      this.socket=io("http://localhost:3000");
      let observable=new Observable(observer=>{
        this.socket.on('message',(data)=>{
            console.log("Recibido mensaje socket...");
            observer.next(data)
        })
        return ()=>
        {
            this.socket.disconnect();
        }
      })

      let observer={
          next:(data:Object)=>{
              this.socket.emit('message',JSON.stringify(data));
          },
      }
      return Rx.Subject.create(observer,observable);
  }
}

