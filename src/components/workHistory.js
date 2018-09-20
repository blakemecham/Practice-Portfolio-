import React, { Component } from 'react';

export default class WorkHistory extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className='workwrapper'>
        <div className='workwrappers'>
          <img src='/assets/nebo.png'/>
          <h1>Special Education Teacher</h1>
          <h2>Nebo School District</h2>
          <p>Managed classroom behavior and work habits of special education students. Ensured all students were on task and attentive. </p>
        </div>
        <div className='workwrappers'>
          <img src='/assets/byui.png'/>
          <h1>Custodian</h1>
          <h2>Brigham Young University Idah</h2>
          <p>Managed crew of four employees in cleaning and maintaining campus building and cleaning equipment. Assisted in hiring and training of employees. </p>
        </div>
      </div>
    );
  }
}