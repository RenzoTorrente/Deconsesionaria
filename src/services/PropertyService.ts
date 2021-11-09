import axiosIntance from '../utilities/axios';


export async function RemoveProperty(carid:string, propId:string):Promise<any>{
let resp = await axiosIntance.delete(`/cars/${carid}/property${propId}`);
return resp;
}
export async function UpdateProperty(carid:string, propId:string, data:string):Promise<any>{
let resp = await axiosIntance.put(`/cars/${carid}/property${propId}`, data);
return resp;

}

export async function GetAllsPropertys():Promise<any>{
let resp = await axiosIntance.get('/propertys');
return resp;
}

