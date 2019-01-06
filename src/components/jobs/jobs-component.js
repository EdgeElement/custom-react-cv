import React, { Component } from 'react'
import './style.css'
import f from 'lodash/fp'
import { format } from 'date-fns'

export default class Jobs extends Component {
  constructor( props ) {
    super( props );
    this.state = { list: f.flow(
      f.get( 'data.jobs' ),
      f.sortBy( 'from' ),
      f.reverse
    )( props ) }
  }
  
	render() {
		return ( 
      <div className="Jobs">
        <h2>Beruflicher Werdegang</h2>
        { f.map( ( entry ) => 
        <div className="Jobs-Row" key={ entry.title + entry.to }>
          <div className="Jobs-Daterange">
            { format( new Date( entry.from ), 'YYYY/MM')  } - { entry.to ? format( new Date( entry.to ), 'YYYY/MM') : '' }
          </div>
          <div>
            <div id={ entry.cId } className="Jobs-Title">
              <h3>{ entry.title }</h3>
              <span className="Jobs-Company">@{ entry.company }</span>
            </div>
            { ( entry.description || [] ).map( ( paragraph, idx ) => 
              <p key={ idx } className="Jobs-Description">{ paragraph }</p>
            ) }
          </div>
        </div>
      ,  this.state.list ) }
      </div>
    );
  }
};