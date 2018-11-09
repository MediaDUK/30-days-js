import React, { Component } from "react";

class DayTwo extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: ""
    };
  }

  render() {
    return (
      <section className="day">
        <h2>Day #2</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim corrupti
          quos, cum alias nulla doloribus vitae aut tempore, nam labore repellat
          eaque hic natus totam quo, ad excepturi esse nobis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim corrupti
          quos, cum alias nulla doloribus vitae aut tempore, nam labore repellat
          eaque hic natus totam quo, ad excepturi esse nobis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim corrupti
          quos, cum alias nulla doloribus vitae aut tempore, nam labore repellat
          eaque hic natus totam quo, ad excepturi esse nobis.
        </p>
      </section>
    );
  }
}
export default DayTwo;
