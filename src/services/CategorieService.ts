import { AxiosResponse } from "axios";
import axiosIntance from '../utilities/axios';

export default async function GetCategories():Promise<any>{
let resp = await axiosIntance.get('/categories');
return resp.data;
}