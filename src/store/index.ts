import { createContext } from "react"

import { CommendStore, MenuisOpenStore } from "./Menuisopen"
import { IdChargeBackSalesManagementStore } from "./test"

export const store = {
    MenuisOpenStore: new MenuisOpenStore(),
    CommendStore: new CommendStore(),
    IdChargeBackSalesManagementStore:new  IdChargeBackSalesManagementStore()
}
const StoreContext = createContext(store)

export default StoreContext
