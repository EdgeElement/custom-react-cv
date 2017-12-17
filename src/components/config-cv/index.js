import React, { Component } from 'react';
import './style.css';
import f from 'lodash/fp';
import CV from '../cv';
import Toolbar from '../toolbar';
import CryptoJS from 'crypto-js';

export default class ConfigCV extends Component {
  constructor( props ) {
    super( props );
    var active = { 
      pd: true,
      sk: true,
      edu: true,
      jb: true,
      pj: true
    };
    this.state = {
      active: active,
      hash: this.hashActive( active )
    }
  }

  onChangeActive = ( changeProp ) => {
    var changedActive = f.set( changeProp.value, changeProp.active, this.state.active );
    this.setState( { 
      active: changedActive,
      hash: this.hashActive( changedActive )
    } )
  }

  hashActive = ( active ) => encodeURIComponent( CryptoJS.AES.encrypt( JSON.stringify( active ), 'th1sIsTheyKey' ).toString( ) )

	render() {
		return (
			<div className="ConfigCV">
        <Toolbar onChange={ this.onChangeActive } hash={ this.state.hash }></Toolbar>
        <CV personalData={ this.state.active.pd }
            skills={ this.state.active.sk }
            education={ this.state.active.edu }
            jobs={ this.state.active.jb }
            projects={ this.state.active.pj }>
        </CV>
			</div>
		);
	}
}
