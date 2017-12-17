import React, { Component } from 'react';
import './style.css';
import data from '../../data.js';
import f from 'lodash/fp';

export default class Skills extends Component {
  componentDidMount() {
    this.setState( { list: f.get( 'skills', data ) } );
  }

  render() {
    return (
      <div className="Skills">
        <h2>Skills</h2>
        { f.flow(
          f.get( 'list' ),
          f.map( ( entry ) =>
            <div className="Skills-Row" key={ entry.type }>
              <div className="Skills-Type">{ entry.type }</div>
              <div>
                { entry.list.map( ( skillList, idx ) =>
                  <span key={ idx }>{ skillList }{ idx < entry.list.length - 1 ? ', ' : '' }</span>
                ) }
              </div>
            </div>
          )
        )( this.state ) }
      </div>
    );
  }
};