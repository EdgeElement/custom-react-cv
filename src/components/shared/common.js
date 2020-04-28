import f from 'lodash/fp'

export const sections = [
  { short: 'pd',  long: 'personalData', title: 'Persönliche Daten' },
  { short: 'sk',  long: 'skills', title: 'Skills' },
  { short: 'edu', long: 'education', title: 'Ausbildung' },
  { short: 'jb',  long: 'jobs', title: 'Jobs' },
  { short: 'pj',  long: 'projects', title: 'Projekte' },
  { short: 'ot',  long: 'other' }
]

export const activeSections = f.filter( f.get( 'title' ), sections )
