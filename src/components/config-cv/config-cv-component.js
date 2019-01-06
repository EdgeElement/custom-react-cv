import React, { Component } from 'react'
import './style.css'
import f from 'lodash/fp'
import CV from '../cv/cv-component'
import Toolbar from '../toolbar/toolbar-component'
import { hashActive, loadData } from '../shared/util'

const active = { 
  personalData: true,
  skills: true,
  education: true,
  jobs: true,
  projects: true
}

const dataUrl = 'https://raw.githubusercontent.com/4Pixel/custom-react-cv/master/sample/data.json'

export default class ConfigCV extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      dataUrl: dataUrl,
      active: active,
      hash: hashActive( active, dataUrl ),
      data: null
    }
  }

  componentDidMount( ){
    this.loadData( )
  }

  onChangeActive = changeProp => {
    const changedActive = f.set( changeProp.value, !changeProp.active, this.state.active )
    this.setState( { 
      active: changedActive,
      hash: hashActive( changedActive, this.state.dataUrl )
    } )
  }

  onDataUrlChange = dataUrl => {
    this.setState( { 
      dataUrl: dataUrl,
      hash: hashActive( this.state.active, dataUrl )
    }, this.loadData( ) )
  }

  loadData = ( ) => {
    loadData( this.state.dataUrl )
    .then( data => this.setState( { data: data } ) )
    .catch( ( ) => ( { data: null } ) )
  }

	render() {
    const { data, active } = this.state
    return (
			<div className="ConfigCV">
        <Toolbar hash={ this.state.hash }
                 dataUrl={ this.state.dataUrl }
                 onChangeActive={ this.onChangeActive } 
                 onDataUrlChange={ this.onDataUrlChange }/>
        { data && <CV data={ data } active={ active }/> }
			</div>
		);
	}
}
