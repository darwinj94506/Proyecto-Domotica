
import{Injectable} from '@angular/core';
import { WebsocketService } from './websocket.service';
import{Observable} from 'rxjs/Observable';
import * as Rx from 'rxjs/Rx';
import { Subject } from 'rxjs/Rx';

@Injectable()
export class dispositivo{


  messages: Subject<any>;
  constructor(private wsService:WebsocketService){ 
      this.messages=<Subject<any>>wsService
      .connect()
      .map((response:any):any=>{
          return response;
      })
  }

  sendMsg(msg)
  {
      this.messages.next(msg);
  }
}

