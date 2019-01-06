import React, { Component } from 'react'
import './style.css'
import f from 'lodash/fp'
import { format } from 'date-fns'

export default class Education extends Component {
  constructor( props ) {
    super( props )
    this.state = { list: f.flow(
      f.get( 'data.education' ),
      f.sortBy( 'from' ),
      f.reverse
    )( props ) }
  }
  
	render() {
		return ( 
      <div className="Education">
        <h2>Ausbildung</h2>
        { this.state.list.map( entry => (
          <div className="Education-Row" key={ entry.title }>
            <div className="Education-Daterange">
              { format( new Date( entry.from ), 'YYYY')  } - { entry.to ? format( new Date( entry.to ), 'YYYY') : '' }
            </div>
            <div>
              <p>{ entry.title }</p>
              { f.getOr( [], 'notes', entry ).map( ( note, idx ) => 
                <p className="Education-Note" key={ idx }>{ note }</p>
              ) }
            </div>
          </div>
        ) ) }
      </div>
    );
  }
};