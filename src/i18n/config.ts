import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import { store } from "../store"
import translation_en from "./en.json"
import translation_ja from "./ja.json"
const { MenuisOpenStore } = store

const resources = {
    ch: {
        translation: translation_en,
    },
    ja: {
        translation: translation_ja,
    },
}
i18n.use(initReactI18next).init({
    resources,
    lng: MenuisOpenStore.isLngChange,
    interpolation: {
        escapeValue: false,
    },
})

export default i18n
