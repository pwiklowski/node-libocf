import { Client, Packet, Response } from "libcoap";
import { OcfDevice } from "./ocfdevice";
import { Observable, Subscription, Observer } from 'rxjs';

export class OcfClient {

    constructor() {
        
    }

    search() : Observable<OcfDevice>{
        let client = new Client("224.0.1.187", 5683);
        return new Observable(observer=>{
            client.observe().subscribe((response:Response)=>{
                let device = new OcfDevice(response.remote);
                observer.next(device);
            });
        });
    }
}