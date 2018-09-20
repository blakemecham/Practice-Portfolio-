import React, { Component } from 'react';

export default class HomePage extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className='homewrapper'>
        <div className='homewrapperstop'>
          <h1>Blake Alan Mecham</h1>
        </div>
        <div className='homewrappersbottom'>
          <div>
            <img src='/assets/all_me_one.jpeg'/>
          </div>
          <div>
            <p>I have amazing people skills. Listening and communicating are two of my strongest attributes. People have always fascinated me and that is why I studied psychology and why I got into teaching. Knowing two languages has helped me better grasp an understanding of programming and how it works. With my strong communication skills and programming background I would be able to effectively run scrum meetings or manage a project.  
            </p>
          </div>
        </div>
      </div>
    );
  }
}