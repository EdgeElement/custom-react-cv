import React, { Component } from 'react'
import './style.css'
import PersonalData from '../personal-data/personal-data-component'
import Education from '../education/education-component'
import Skills from '../skills/skills-component'
import Projects from '../projects/projects-component'
import Jobs from '../jobs/jobs-component'
import f from 'lodash/fp'
import { i18n } from '../../locale'

const components = {
  personalData: PersonalData,
  skills: Skills,
  education: Education,
  jobs: Jobs,
  projects: Projects
}

export default class CV extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      active: props.active
    }
  }

  updateSections( newProps ){
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

  renderComponent = ( activeKey, idx ) => {
    const { data } = this.props
    const Component = components[ activeKey ]
    return <Component data={ data } key={ idx } />
  }
  
	render() {
    const { active } = this.props
    const actives = [ ]
    f.mapKeys( activeKey => active[ activeKey ] && actives.push( activeKey ), active )
		return (
			<div className="CV">
				<h1>{ i18n( 'cv' )}</h1>
        <div className="CV-Sections">
          { actives.map( ( activeKey, idx ) => this.renderComponent( activeKey, idx ) ) }
        </div>
			</div>
		)
	}
}
