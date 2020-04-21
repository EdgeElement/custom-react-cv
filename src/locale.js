const translations = {
  de: {
    personalData: 'Persönliche Daten'
  },
  en: {
    personalData: 'Profile'
  }
}

let language = 'en'

export const i18n = key => translations[ language ][ key ]
export const setLanguage = newLanguage => language = newLanguage
