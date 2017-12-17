import React, { Component } from 'react';
import './style.css';
import CV from '../cv';
import CryptoJS from 'crypto-js';

export default class CustomCV extends Component {
  constructor( props ) {
    super( props );
    
    var decrypted = JSON.parse( 
      CryptoJS.AES.decrypt( decodeURIComponent( this.props.match.params.config ), 'th1sIsTheyKey' ).toString( CryptoJS.enc.Utf8 ) );
    this.state = {
      active: { 
        personalData: decrypted.pd,
        skills: decrypted.sk,
        education: decrypted.edu,
        jobs: decrypted.jb,
        projects: decrypted.pj
      }
    }
  }

	render() {
		return (
			<div className="CustomCV">
        <CV personalData={ this.state.active.personalData }
            skills={ this.state.active.skills }
            education={ this.state.active.education }
            jobs={ this.state.active.jobs }
            projects={ this.state.active.projects }>
        </CV>
			</div>
		);
	}
}
