import { Observable } from "rxjs";
import { transfer } from "../models/make.transfer";
import { Response } from "../models/response.model";

export interface TransferService{
    makeTransfer(transferRequest:transfer):Observable<Response<transfer>>
}