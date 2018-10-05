import React, { Component } from 'react'
import guitarOne from '../../../audio/1-guitar.mp3'

class DayOne extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: ""
    };
    this.keyPressed = this.keyPressed.bind(this)
    this.play = this.play.bind(this)
    this.guitarOne = new Audio(guitarOne)
    // https://www.w3schools.com/tags/ref_av_dom.asp
  }
  play(key) {
    if (key = 65) {
      this.guitarOne.play()
    }
  }
  keyPressed(e) {
    const key = e.keyCode
    switch (key) {
      case 65:
        this.play(65)
        break;
      default:
        break;
    }

  }
  componentWillMount() {
    document.addEventListener('keydown', this.keyPressed, true);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyPressed, true);
  }

  render() {
    return (
      <section className="day">
        <h2>Day #1</h2>
    
        <div className="keys">
          <div data-key="65" className="key">
            <kbd>A</kbd>
            <span className="sound">Guitar 1</span>
          </div>
        </div>

        <audio data-key="65" src="" />
        <audio data-key="83" src="" />
        <audio data-key="68" src="" />
        <audio data-key="70" src="" />
        <audio data-key="71" src="" />
        <audio data-key="72" src="" />
        <audio data-key="74" src="" />
        <audio data-key="75" src="" />
        <audio data-key="76" src="" />
      </section>
    );
  }
}
export default DayOne;
