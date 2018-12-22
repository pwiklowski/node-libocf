import { OcfClient } from "./client";
import { OcfDevice } from "./ocfdevice";

console.log("Starting ocf client")

let client = new OcfClient();

client.search().subscribe((device: OcfDevice) => {
    device.descripton().then(desc=>{
        desc.forEach(dev => {
            console.log(dev.n, dev.di, dev.links.map(item => { return item.n}));

            dev.links.forEach(item => {
                console.log(item.href);
            });
        });
    });
});