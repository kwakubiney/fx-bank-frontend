import { Observable } from "rxjs";
import { Response } from "../models/response.model";
import { signUpRequest } from "../models/signup.model";

export interface signUp{
    signUp(req:signUpRequest):Observable<Response<signUpRequest>>
}