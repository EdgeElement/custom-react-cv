import React, { Component } from 'react';
import './style.css';
import Ico from '../ico';
import f from 'lodash/fp';
import { Link } from 'react-router-dom';

export default class Toolbar extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      show: false,
      hash: this.props.hash,
      sections: [
        { title: 'Persönliche Daten', value: 'pd', active: true },
        { title: 'Skills', value: 'sk', active: true },
        { title: 'Ausbildung', value: 'edu', active: true },
        { title: 'Jobs', value: 'jb', active: true },
        { title: 'Projekte', value: 'pj', active: true }
      ]
    }
  }

  onChangeActive = ( section ) => {
    this.setState( { 
      sections: f.flow(
        f.get( 'sections' ),
        f.map( ( s ) => {
          if ( s.value === section.value ) {
            s.active = !section.active
          }
          return s;
        } )
      ) ( this.state )
    } );
    this.props.onChange( section );
  }

  componentWillReceiveProps( props ) {
    this.setState( { hash: props.hash } )
  }

  onMenuToggle = ( ) => {
    this.setState( { show: !this.state.show } );
  }

  renderMenu = ( ) => {
    return <div className="Toolbar-Menu">
      <div className="Toolbar-Menu-Container">
        <ul>
          { f.values( this.state.sections ).map( ( section ) => 
            <li key={ section.value } className="Toolbar-MenuEntry">
              <input className="Toolbar-Checkbox" type="checkbox" checked={ section.active } onChange={ ( ) => this.onChangeActive( section ) }/>
              <span onClick={ ( ) => this.onChangeActive( section ) }>{ section.title }</span>
            </li>
          ) }
          <li className="Toolbar-MenuEntry Toolbar-MenuEntryHash">
            <Link className="Toolbar-Hash" to={ "/custom/" + this.state.hash } target="_blank">
              Share Link anzeigen<Ico icon="external-link"></Ico>
            </Link>
            <textarea type="text" value={ window.location.host + '/custom/' + this.state.hash } readOnly/>
          </li>
        </ul>
      </div>
    </div>
  }

	render() {
		return (
      <div className="Toolbar">
        <div className="Toolbar-Bar">
          <div className="Toolbar-Icon" onClick={ this.onMenuToggle }>
            <Ico icon="navicon"/>
          </div>
        </div>
        { this.state.show ? this.renderMenu( ) : '' }
      </div>
		);
	}
}
