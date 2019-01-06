import React, { Component } from 'react';
import './style.css';
import f from 'lodash/fp';

export default class Skills extends Component {
  constructor( props ){
    super( props )
    this.state = {

    }
  }
  componentDidMount() {
    this.setState( { list: f.get( 'skills', this.props.data ) } );
  }

  render() {
    return (
      <div className="Skills">
        <h2>Skills</h2>
        { this.props.data.map( entry =>
            <div className="Skills-Row" key={ entry.type }>
              <div className="Skills-Type">{ entry.type }</div>
              <div>
                { entry.list.map( ( skillList, idx ) =>
                  <span key={ idx }>{ skillList }{ idx < entry.list.length - 1 ? ', ' : '' }</span>
                ) }
              </div>
            </div>
        ) }
      </div>
    );
  }
};