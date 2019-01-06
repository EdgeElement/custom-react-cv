import React, { Component } from 'react'
import './style.css'

import Ico from '../ico'
// import f from 'lodash/fp';

export default class Home extends Component {
  constructor( props ) {
    super( props );
    this.state = { encodedUrl: '' }
  }

	render() {
		return (
			<div className="Home">
				<h1>Custom CV Engine</h1>
        <p>by</p>
				<h3>Markus Glatz</h3>
        <br/>
        <br/>
        <p className="Home-Note">Sollten Sie diese Seite sehen haben Sie keinen angepassten Link (<b>/custom/...</b>) erhalten.</p>
        {/* <p>Erstellen sie ihren individuellen CV unter <Link to='/config'>/config</Link></p> */}
        <br/>
        <br/>
        <p className="Home-Source">
          <span>
            Den Source Code finden sie auf <a href="https://github.com/4Pixel" target="_blank" rel="noopener noreferrer">github.com/4Pixel.<br/>
            <Ico icon="github"/>
            </a>
          </span>
        </p>
			</div>
		);
	}
}
