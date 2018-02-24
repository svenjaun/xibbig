import React from 'react';

import gibbixAlpha from './img/gibbix_alpha.png';

class MovingGibbix extends React.Component {
  performGibbixMove() {
    if (!this.gibbix) {
      console.log('No GibbiX found.');
      return;
    }

    const getRandom = max => {
      return Math.floor(Math.random() * max) - max / 2;
    };

    this.leftSpeed = this.leftSpeed + getRandom(50);
    this.topSpeed = this.topSpeed + getRandom(50);

    this.gibbix.style.top = this.gibbix.offsetTop + getRandom(50) + 'px';
    this.gibbix.style.left = this.gibbix.offsetLeft + getRandom(50) + 'px';

    this.rotation = this.rotation + getRandom(50);
    this.width = this.width + getRandom(50);

    this.gibbix.style.transform = 'rotate(' + this.rotation + 'deg)';
    this.gibbix.style.width = this.width + 'px';
  }

  componentDidMount() {
    this.gibbix.style.top = Math.floor(window.innerHeight / 2) - 200 + 'px';
    this.gibbix.style.left = Math.floor(window.innerWidth / 2) - 300 + 'px';

    setInterval(this.performGibbixMove, 100);
  }

  constructor(props) {
    super(props);

    this.performGibbixMove = this.performGibbixMove.bind(this);

    this.leftSpeed = 0;
    this.topSpeed = 0;
    this.rotation = 0;
    this.width = 600;
  }

  render() {
    return (
      <img
        src={gibbixAlpha}
        style={{
          position: 'absolute',
          transition: 'all 0.1s'
        }}
        ref={gibbix => {
          console.log(gibbix);
          this.gibbix = gibbix;
        }}
        alt="GibbiX"
      />
    );
  }
}

export default MovingGibbix;
