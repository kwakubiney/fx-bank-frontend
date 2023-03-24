import { Provider } from "@angular/core"
import { Observable } from "rxjs"
import { providers } from "../models/provider"
import { Response } from "../models/response.model"

export interface ProviderService{
    getProviders(account: providers): Observable<Response<providers[]>>
}