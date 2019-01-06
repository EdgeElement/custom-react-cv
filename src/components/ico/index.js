import React, { Component } from 'react';
import './style.css';

export default class Ico extends Component {
  render( ) {
  	return ( 
      <div className={ `Ico ${ this.props.className }` }>
        <img src={ `/icons/${ this.props.icon }.svg` } alt='' />
      </div>
    );
  }
};