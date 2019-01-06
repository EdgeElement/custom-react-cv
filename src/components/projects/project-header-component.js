import React, { Component } from 'react';
import './project-header.css';
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

  getCompany = ( ) => (
    <a href={ `#${ this.props.cId }` } title="zur Jobbeschreibung" className="ProjectHeader-CompanyLink" onClick={ this.trackCompany }>
      <span className="ProjectHeader-CompanyTag">@{ this.props.company }
      </span>
      <div className="ProjectHeader-Link">
        <Ico icon="arrow-up" className="ProjectHeader-IconUp"/>
      </div>
    </a>
  )

  getLink = ( ) => this.props.web && (
    <a href={ this.props.web.link } target='_blank' title={ this.props.web.title } onClick={ this.trackExtLink } className="ProjectHeader-Link">
      <Ico icon="external-link" className="ProjectHeader-IconLink"/>
    </a>
  )

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