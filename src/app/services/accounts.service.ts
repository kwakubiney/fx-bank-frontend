import { Observable } from "rxjs";
import { Account } from "../models/account";
import { Response } from "../models/response.model";

export interface AccountService{
  createAccount(account: Account): Observable<Response<Account>>
  getAccountsForUserID(user_id:string): Observable<Response<Account[]>>
}