import React, { Component } from 'react';
import './style.css';
import data from '../../data.js';
import f from 'lodash/fp';
import { format } from 'date-fns';

export default class Education extends Component {
  componentDidMount() {
    this.setState( { list: f.flow(
      f.get( 'education' ),
      f.sortBy( 'from' ),
      f.reverse
    )( data ) } );
  }
  
	render() {
		return ( 
      <div className="Education">
        <h2>Ausbildung</h2>
        { f.map( ( entry ) => 
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
      , f.get( 'list', this.state ) ) }
      </div>
    );
  }
};