import {AxiosService} from "./axios.service";
import {urls} from "../constants/constants";

export const postsService = {
    getByUserId:(id)=>AxiosService(`${urls.users}/${id}${urls.posts}`)
}