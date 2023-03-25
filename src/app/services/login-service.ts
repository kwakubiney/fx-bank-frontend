import { Observable } from "rxjs";
import { loginResp } from "../models/login.model";
import { Response } from "../models/response.model";
import { signUpRequest } from "../models/signup.model";


export interface login{
    login(req:signUpRequest):Observable<Response<loginResp>>
}