import React, { Component } from "react";
import Key from "../Key/Key";
import guitarOne from "../../../audio/1-guitar.mp3";
import guitarTwo from "../../../audio/2-guitar.mp3";
import guitarThree from "../../../audio/3-guitar.mp3";
import guitarFour from "../../../audio/4-guitar.mp3";
import kick from "../../../audio/5-kick.mp3";
import clap from "../../../audio/6-clap.mp3";

class DayOne extends Component {
  constructor() {
    super();
    this.state = {
      title: "Day #1 Drum Machine",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt blanditiis doloremque quaerat"
    };
    this.keyPressed = this.keyPressed.bind(this);
    this.play = this.play.bind(this);
    this.guitarOne = new Audio(guitarOne);
    this.guitarTwo = new Audio(guitarTwo);
    this.guitarThree = new Audio(guitarThree);
    this.guitarFour = new Audio(guitarFour);
    this.kick = new Audio(kick);
    this.clap = new Audio(clap);
    // https://www.w3schools.com/tags/ref_av_dom.asp
  }

  componentWillMount() {
    document.addEventListener("keydown", this.keyPressed, true);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyPressed, true);
  }

  play(audioFile) {
    const audio = audioFile;
    audio.currentTime = 0;
    audio.play();
  }

  keyPressed(e) {
    const key = e.keyCode;
    // const keyCode = e.keyCode? e.keyCode:
    console.log(`keyPressed(${key})`);
    switch (key) {
      case 65:
        this.play(this.guitarOne);
        break;
      case 83:
        this.play(this.guitarTwo);
        break;
      case 68:
        this.play(this.guitarThree);
        break;
      case 70:
        this.play(this.guitarFour);
        break;
      case 71:
        this.play(this.kick);
        break;
      case 72:
        this.play(this.clap);
        break;
      default:
        break;
    }
  }

  render() {
    const { title, description } = this.state;
    return (
      <section className="day">
        <h2>{this.state.title}</h2>
        <p>{this.state.description}</p>
        <div className="keys">
          <Key keyCode={65} keyLetter="A" keyName="Guitar 1" />
          <Key keyCode={83} keyLetter="S" keyName="Guitar 2" />
          <Key keyCode={68} keyLetter="D" keyName="Guitar 3" />
          <Key keyCode={70} keyLetter="F" keyName="Guitar 4" />
          <Key keyCode={71} keyLetter="G" keyName="Kick" />
          <Key keyCode={72} keyLetter="H" keyName="Clap" />
        </div>
      </section>
    );
  }
}
export default DayOne;
