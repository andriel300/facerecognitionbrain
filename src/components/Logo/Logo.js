import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

function Logo() {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="parallax-effect Tilt br3 shadow-3"
        perspective={500}
        glareEnable
        glareMaxOpacity={0.15}
        scale={1.02}
        options={{ max: 55 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="inner-element pa3">
          <img
            style={{ paddingTop: '13px', paddingLeft: '7px' }}
            alt="logo"
            src={brain}
          />
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;
