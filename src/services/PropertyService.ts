import axiosIntance from '../utilities/axios';
import { formpropertyvalues } from '../utilities/types';


export async function RemoveProperty(carid:string, propId:string):Promise<any>{
let resp = await axiosIntance.delete(`properties/cars/${carid}/properties/${propId}`);
return resp;
}
export async function UpdateVehiclePropertyValue(carid:number, propid:number, value:number):Promise<any>{
let resp = await axiosIntance.put(`properties/car/${carid}/property/${propid}`, {score:value});
return resp;

}
export async function getVehicleProperties(categoryid:number, carid:number):Promise<any>{
let resp = await axiosIntance.get(`/properties/allforscore/${categoryid}/${carid}`,);
return resp.data;
}
export async function GetAllsProperties(vehicleid:number):Promise<any>{
let resp = await axiosIntance.get(`/properties/alloptions/${vehicleid}`);
return resp.data;
}
export async function CreateProperty(newproperty:formpropertyvalues):Promise<any>{
    let resp = await axiosIntance.post(`/properties/${newproperty.categoria}`, {name:newproperty.newprop});
    return resp.data;
    }

    export async function addVehicleProperty(carid:number, propertyid:number):Promise<any>{
        let resp = await axiosIntance.post(`/properties/car/${carid}/property/${propertyid}`);
        return resp.data;
        }  