import axiosIntance from '../utilities/axios';


export async function GetCarById(id:any):Promise<any>{
let resp = await axiosIntance.get(`/cars/${id}`);
return resp.data;
}

export async function AddCar(car:string){
let resp = await axiosIntance.post(`/cars`, {name:car});
return resp.data;

}
export async function GetAllCars():Promise<any>{
    let resp = await axiosIntance.get(`/cars`);
    return resp.data;
 }
 
 export async function UpdateCar(id:string, name:string){
 let resp = await axiosIntance.put(`cars/${id}`, name);
  return resp.data;
 }

 
 export async function RemoveCarById(id:string){
    let resp = await axiosIntance.delete(`/cars/${id}`);
    return resp;
}
