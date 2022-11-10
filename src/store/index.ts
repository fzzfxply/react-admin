import { createContext } from "react"

import { CommendStore, MenuisOpenStore } from "./Menuisopen"

export const store = {
    MenuisOpenStore: new MenuisOpenStore(),
    CommendStore: new CommendStore(),
}
const StoreContext = createContext(store)

export default StoreContext
