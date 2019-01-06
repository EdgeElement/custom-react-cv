import React, { Component } from 'react';
import './style.css';
// import f from 'lodash/fp';

export default class Home extends Component {
  constructor( props ) {
    super( props );
    this.state = { encodedUrl: '' }
  }

	render() {
		return (
			<div className="Home">
				<h1>Custom Lebenslauf Engine</h1>
        <p>von</p>
				<h3>Markus Glatz</h3>
        <br/>
        <br/>
        <p className="Home-Note">Sollten Sie diese Seite sehen haben Sie keinen angepassten Link (<b>/custom/...</b>) erhalten.</p>
        <p className="Home-Note">Kontaktieren Sie mich Bitte um weitere Informationen zu erhalten</p>
        <p>{ this.state.email }</p>
        <br/>
        <br/>
        <p className="Home-Source">
          <span>
            Der hierfür entwickelte Projektcode zur Darstellung eines individuell anpassbaren CVs, wird in kürze auf Github verfügbar sein.
          </span>
        </p>
			</div>
		);
	}
}
