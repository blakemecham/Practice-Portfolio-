import React, { Component } from 'react';

export default class Education extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className='educationwrapper'>
        <div className='educationwrappers'>
            <img src='/assets/bottega.png'/>
            <h1>Bottega</h1>
            <img src='/assets/icons.png'/>
            {/* <ul className='educationlist'>
                <i class="fab fa-python"></i>
                <li>Python</li>
                <i class="fab fa-html5"></i>
                <li>HTML</li>
                <i class="fab fa-css3"></i>
                <li>CSS</li>
                <i class="fab fa-js-square"></i>
                <li>JavaScript</li>
                <i class="fab fa-react"></i>
                <li>React/Redux</li>
                <i class="fas fa-database"></i>
                <li>Data Base</li>
            </ul> */}
        </div>
        <div className='educationwrappers'>
            <img src='/assets/byui.png'/>
            <h1>Brigham Young University Idaho</h1>
            <h2>Bachelor of Science in Psychology</h2>
            <p>Minor in Spanish</p>
        </div>
      </div>
    );
  }
}