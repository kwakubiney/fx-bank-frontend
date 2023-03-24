import { Time } from "@angular/common"

export interface Account{
    user_id:string
    name: string
    balance: number
    currency: string
    created_at: Time
    last_modified: Time
}