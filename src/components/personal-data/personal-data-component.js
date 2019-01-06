import React, { Component } from 'react'
import './style.css'
import f from 'lodash/fp'

export default class PersonalData extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      list: f.flow(
        f.get( 'personalData' ),
        f.pick( [ 'name', 'phone', 'email', 'nationality', 'strengths' ] ),
        f.values
      )( props.data )
    }
  }

  render() {
    return (
      <div className="PersonalData">
        <div className="PersonalData-Profile">
          <img src={ this.props.data.personalData.foto.url } alt="Profile Foto" />
        </div>
        <h2>Persönliche Daten</h2>
        { f.flow(
            f.get( 'list' ),
            f.map( ( entry ) =>
            <div className="PersonalData-Row" key={entry.title }>
              <div className="PersonalData-Title">{ entry.title }</div><div>{ entry.value }</div>
            </div>
            )
          ) ( this.state ) }
      </div>
    )
  }
}