import React, { Component } from 'react'
import './style.css'
import PersonalData from '../personal-data'
import Education from '../education'
import Skills from '../skills'
import Projects from '../projects'
import Jobs from '../jobs'
import f from 'lodash/fp'

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
    return <Component data={ data[ activeKey ] } key={ idx } />
  }
  
	render() {
    const { active } = this.props
    const actives = [ ]
    f.mapKeys( activeKey => active[ activeKey ] && actives.push( activeKey ), active )
		return (
			<div className="CV">
				<h1>Lebenslauf</h1>
        <div className="CV-Sections">
          { actives.map( ( activeKey, idx ) => this.renderComponent( activeKey, idx ) ) }
        </div>
			</div>
		)
	}
}
