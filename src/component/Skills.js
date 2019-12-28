import React from "react";

const Skills = () => {
  return (
    <div id="main-section">
      <h1 style={{ margin: "30px" }}>Skills</h1>
      <h2> Things I Use And Love</h2>
      {/* <p>food</p> */}
      <div className="content">
        <p>
          HTML5, CSS, Sass, Semantic UI React, Materialize, Bootstrap,
          Photoshop, Illustrator
        </p>
        <div className="w3-border">
          <div
            className="w3-grey"
            style={{
              width: "95%",
              height: "8px",
              boxShadow: "0 0 10px #00000"
            }}
          ></div>
        </div>
        <p>&nbsp;</p>
        <p>
          JavaScript, React, React Native, Npm, Yarn, Python, Python Flask,
          Python Django
        </p>
        <div className="w3-border">
          <div
            className="w3-grey"
            style={{ width: "95%", height: "8px" }}
          ></div>
        </div>
        <p>&nbsp;</p>
        <p>
          Pivotal Tracker, Git, GitHub, DevTools, Testing, Circle CI, Travis, OS
          X, Terminal, Heroku, Postman
        </p>
        <div className="w3-border">
          <div
            className="w3-grey"
            style={{ width: "90%", height: "8px" }}
          ></div>
        </div>
        <p>&nbsp;</p>
        <p>
          By working using progressive enhancement, your website is delivered
          with a responsive layout that can best make use of the space available
          on the smallest to largest devices. Cross browser compatibility is
          ensured by using feature detection so older browsers still in use
          today provide a solid experience, whilst modern browsers can go the
          next step and enhance a user’s time spent on your site.
        </p>
        <p>
          In my experience as a freelancer and working for agencies / companies
          like Andela Uganda Limited, I have also obtained an eye for detail and
          appreciation for design, knowledge of integrating with and developing
          server-side, as well as knowing how to efficiently project manage and
          work with clients and colleagues successfully.
        </p>

        {/* <p>
          I believe it is important to understand both design and development to
          achieve a successful user-facing product. I can assist with producing
          clean and functional design where required.
        </p> */}
      </div>
    </div>
  );
};
export default Skills;
