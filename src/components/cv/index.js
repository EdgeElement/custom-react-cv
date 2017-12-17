import React, { Component } from 'react';
import './style.css';
import PersonalData from '../personal-data';
import Education from '../education';
import Skills from '../skills';
import Projects from '../projects';
import Jobs from '../jobs';

export default class CV extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      active: { 
        personalData: false,
        skills: false,
        education: false,
        jobs: false,
        projects: false
      }
    }
  }
  componentDidMount( ) {
    this.updateSections( this.props )
  }
  componentWillReceiveProps( newProps ) {
    this.updateSections( newProps )
  }
  updateSections( newProps ) {
    this.setState( {
      active: { 
        personalData: newProps.personalData,
        skills: newProps.skills,
        education: newProps.education,
        jobs: newProps.jobs,
        projects: newProps.projects
      } 
    } )
  }
	render() {
		return (
			<div className="CV">
				<h1>Lebenslauf</h1>
        <div className="CV-Sections">
          { this.state.active.personalData ? <PersonalData></PersonalData> : '' }
          { this.state.active.skills ? <Skills></Skills> : '' }
          { this.state.active.education ? <Education></Education> : '' }
          { this.state.active.jobs ? <Jobs></Jobs> : '' }
          { this.state.active.projects ? <Projects></Projects> : '' }
        </div>
			</div>
		);
	}
}
