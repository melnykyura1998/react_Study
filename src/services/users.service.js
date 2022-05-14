import {AxiosService} from "./axios.service";
import {urls} from "../constants/constants";

export const usersService= {
    getAl:()=>AxiosService(urls.users)
}