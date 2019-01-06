import CryptoJS from 'crypto-js'
import f from 'lodash/fp'

const sections = [
  { short: 'pd',  long: 'personalData', title: 'Persönliche Daten' },
  { short: 'sk',  long: 'skills', title: 'Skills' },
  { short: 'edu', long: 'education', title: 'Ausbildung' },
  { short: 'jb',  long: 'jobs', title: 'Jobs' },
  { short: 'pj',  long: 'projects', title: 'Projekte' },
  { short: 'ot',  long: 'other' }
]

const key = 'th1sIsTheKey' 

export const activeSections = f.filter( f.get( 'title' ), sections )

export const hashActive = ( active, dataUrl ) => f.flow(
  active => {
    const mappedActives = { }
    f.mapKeys( longKey => {
      const shortKey = f.find( { long: longKey }, sections ).short
      mappedActives[ shortKey ] = active[ longKey ]
    }, active )
    return mappedActives
  },
  active => JSON.stringify( { active: active, dataUrl: dataUrl } ),
  text => CryptoJS.AES.encrypt( text, key ),
  encrypted => encodeURIComponent( encrypted.toString( ) )
)( active )

export const dehashActive = f.flow( 
  encoded => decodeURIComponent( encoded ),
  active => CryptoJS.AES.decrypt( active, key ),
  decrypted => decrypted.toString( CryptoJS.enc.Utf8 ),
  text => JSON.parse( text ),
  config => {
    const mappedActives = { }
    f.mapKeys( shortKey => {
      const longKey = f.find( { short: shortKey }, sections ).long
      mappedActives[ longKey ] = config.active[ shortKey ]
    }, config.active )
    return { active: mappedActives, dataUrl: config.dataUrl }
  }
)

const extendImagePath = ( base, path, data ) => f.set( path, base + f.get( path, data ), data )

export const loadData = url => (
  fetch( url )
  .then( json => json.json( ) )
  .then( data => {
    const base = f.getOr( '', 'imageBasePath', data )
    return f.flow(
      data => extendImagePath( base, 'personalData.foto.url', data ),
      data => {
        if( data.projects ){
          data.projects.map( project => {
            project.images = f.map( image => base + image, project.images )
            return project
          } )
        }
        return data
      }
    )( data )
  } )
)