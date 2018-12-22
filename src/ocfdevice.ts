import { OcfClient } from "./client"
import { Client, Packet, Response } from "libcoap";
import { RemoteInfo } from "dgram";
import { Observable } from "rxjs";

export class OcfDevice {
    client : Client;

    constructor(remote: RemoteInfo){
        this.client = new Client(remote.address, remote.port);
    }

    descripton(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.client.get("/oic/res").then((response:Response) => {
                resolve(response.packet.getPayloadObject());
            }).catch(()=>{
                reject();
            });
        });
    }

}