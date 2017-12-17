import React, { Component } from 'react';
import './style.css';
import Ico from '../ico';
import ReactGA from 'react-ga';

export default class ProjectHeader extends Component {
  trackCompany = ( ) => {
    ReactGA.event( {
      'category': 'Projekte',
      'action': 'klickt Jobbeschreibung',
      'label': this.props.company
    } );
  }

  trackExtLink = ( ) => {
    ReactGA.event( {
      'category': 'Projekte',
      'action': 'Company Link',
      'label': this.props.web.title
    } );
  }

  getCompany = ( ) => {
    return <a href={ `#${ this.props.cId }` } title="zur Jobbeschreibung" className="ProjectHeader-CompanyLink" onClick={ this.trackCompany }>
        <span className="ProjectHeader-CompanyTag">@{ this.props.company }
        </span>
        <span className="ProjectHeader-IconUp">
          <Ico icon="arrow-up"></Ico>
        </span>
      </a>
  }

  getLink = ( ) => {
    if ( this.props.web ) {
      return <a href={ this.props.web.link } target='_blank' title={ this.props.web.title } className="ProjectHeader-IconLink" onClick={ this.trackExtLink }>
      <Ico icon="external-link"></Ico>
      </a>
    }
  }

	render() {
  	return ( 
      <div className="ProjectHeader-CompanyTitle">
        <h3 className="ProjectHeader-CompanyName">{ this.props.title }</h3>
        { this.getLink( ) }
        { this.getCompany( ) }
      </div>
    );
  }
};