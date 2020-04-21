import React, { Component } from 'react'
import './style.css'
import f from 'lodash/fp'
import { i18n } from '../../locale'

export default class PersonalData extends Component {
  render() {
    const { data } = this.props
    const list = f.flow(
      f.get( 'personalData' ),
      f.pick( [ 'name', 'phone', 'email', 'website', 'nationality', 'strengths' ] ),
      f.values
    )( data )

    return (
      <div className="PersonalData">
        <div className="PersonalData-Profile">
          <img src={ data.personalData.foto.url } alt="Profile Foto" />
        </div>
        <h2>{ i18n( 'personalData' ) }</h2>
        { f.map( entry => (
          <div className="PersonalData-Row" key={entry.title }>
            <div className="PersonalData-Title">{ entry.title }</div><div>{ entry.value }</div>
          </div>
        ), list ) }
      </div>
    )
  }
}