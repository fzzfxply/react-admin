import { createContext } from "react"

import { MenuisOpenStore } from "./Menuisopen"

export const store = {
    MenuisOpenStore: new MenuisOpenStore(),
}
const StoreContext = createContext(store)

export default StoreContext
