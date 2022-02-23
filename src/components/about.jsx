import React from "react";
import myImage from "../img/icons8-html-5-50.png";
import myImage1 from "../img/icons8-css3-50.png";
import reactimg from "../img/icons8-react-80.png";
import myImage2 from "../img/icons8-mongo-96.png";
import mypostman from "../img/icons8-postman-api-64.png";
import myImage3 from "../img/icons8-redux-50.png";
import myexpress from "../img/icons8-express-vpn-100.png";
import myImage4 from "../img/icons8-node-js-48.png";
import mynpm from "../img/icons8-npm-48.png";
import myImage5 from "../img/icons8-javascript-logo-50.png";
class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML5", porcentage: "80%", value: "80" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "75%", value: "75" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "90%",
          value: "90",
        },
        { id: "PHP_skill", content: "PHP", porcentage: "70%", value: "70" },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "80%",
          value: "80",
        },
        {
          id: "Python_skill",
          content: "Python",
          porcentage: "75%",
          value: "75",
        },
        {
          id: "VanillaJS_skill",
          content: "VanillaJS",
          porcentage: "85%",
          value: "85",
        },
        {
          id: "Wordpress_skill",
          content: "Wordpress",
          porcentage: "80%",
          value: "80",
        },
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            " Creative, hard-working and diligent Full-stack web developer with a keen interest in learning new tech stacks.Designing web pages and their functions always amused me, soon I realized I wanted to become a web developer 👩‍💻. This led me to choose full-stack web development and I joined Masai School.I am passionate about developing web pages and I'm interested in developing backend using Node.js.I am highly motivated😎 by the methods and thoughts of the HadZabe tribes.I also enjoy🤩 reading and writing codes. Seeking to enhance my knowledge and skills while taking up a challenging role in an organization.",
        },
        // {
        //   id: "second-p-about",
        //   content:
        //     "Lorem ipsum pariatur consectetur laboris occaecat nulla aliqua irure ad deserunt duis. Eiusmod nulla cupidatat labore sint sit aute dolore irure nostrud ut incididunt. Anim laborum reprehenderit labore magna ut dolore quis irure. Labore ea duis deserunt ullamco irure fugiat deserunt ut nisi ea minim proident. Nisi consectetur do non magna duis aliqua minim minim veniam. In occaecat minim qui consequat elit mollit consectetur non id tempor. Amet adipisicing occaecat tempor culpa quis est duis."
        // },
        // {
        //   id: "third-p-about",
        //   content:
        //     "Lorem ipsum pariatur consectetur laboris occaecat nulla aliqua irure ad deserunt duis. Eiusmod nulla cupidatat labore sint sit aute dolore irure nostrud ut incididunt. Anim laborum reprehenderit labore magna ut dolore quis irure. Labore ea duis deserunt ullamco irure fugiat deserunt ut nisi ea minim proident. Nisi consectetur do non magna duis aliqua minim minim veniam. In occaecat minim qui consequat elit mollit consectetur non id tempor. Amet adipisicing occaecat tempor culpa quis est duis."
        // }
      ],
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          {/* <div className="row"> */}
          <div className="col-sm-12">
            <div className="box-shadow-full">
              {/* <div className="row"> */}
              {/* <div className="col-md-6"> */}
              <div className="about-me pt-4 pt-md-0">
                <div className="title-box-2">
                  <h5 className="title-left">About Me</h5>
                </div>
                {this.state.about_me.map((content) => {
                  return (
                    <p className="lead" key={content.id}>
                      {content.content}
                    </p>
                  );
                })}
              </div>
              {/* </div> */}
              <div className="col-md-6">
                {/* <div className="row"> */}
                <div className="col-sm-6 col-md-5" style={{ margin: "0 auto" }}>
                  <div className="about-img" style={{ textAlign: "center" }}>
                    <img className="img-fluid rounded b-shadow-a" alt="" />
                  </div>
                </div>
              </div>
              <div className="skill-mf">
                <h1 className="title-s">Skill</h1>
                {/* {this.state.skills.map((skill) => {
                  return (
                    <React.Fragment key={skill.id}>
                      <span>{skill.content}</span>{" "}
                      <span className="pull-right">{skill.porcentage}</span>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: skill.porcentage }}
                          aria-valuenow={skill.value}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </React.Fragment>
                  );
                })} */}
                {/* </div> */}
                <div
                  className="row"
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <div
                    style={{
                      border: "none",
                      height: "110px",
                      width: "110px",
                      background: "#e9ecef",
                      borderRadius: "50%",
                      textAlign: "center",
                    }}
                  >
                    <img
                      style={{ height: "50px", marginTop: "15px" }}
                      src={myImage}
                    />
                    <p>HTML</p>
                  </div>
                  <div
                    style={{
                      border: "none",
                      height: "110px",
                      width: "110px",
                      background: "#e9ecef",
                      borderRadius: "50%",
                      textAlign: "center",
                    }}
                  >
                    {" "}
                    <img
                      style={{ height: "50px", marginTop: "15px" }}
                      src={myImage1}
                    />
                    <p>CSS</p>
                  </div>
                  <div
                    style={{
                      border: "none",
                      height: "110px",
                      width: "110px",
                      background: "#e9ecef",
                      borderRadius: "50%",
                      textAlign: "center",
                    }}
                  >
                    <img
                      style={{ height: "50px", marginTop: "15px" }}
                      src={myImage5}
                    />
                    <p>JavaScript</p>
                  </div>
                  <div
                    style={{
                      border: "none",
                      height: "110px",
                      width: "110px",
                      background: "#e9ecef",
                      borderRadius: "50%",
                      textAlign: "center",
                    }}
                  >
                    {" "}
                    <img
                      style={{ height: "50px", marginTop: "15px" }}
                      src={reactimg}
                      //src="https://img.icons8.com/ultraviolet/50/000000/react--v2.png"
                    />
                    <p>React js</p>
                  </div>
                  <div
                    style={{
                      border: "none",
                      height: "110px",
                      width: "110px",
                      background: "#e9ecef",
                      borderRadius: "50%",
                      textAlign: "center",
                    }}
                  >
                    {" "}
                    <img
                      style={{ height: "50px", marginTop: "15px" }}
                      src={myImage2}
                      // src= "https://img.icons8.com/color/48/000000/mongodb.png"
                    />
                    <p>MongoDB</p>
                  </div>
                  <div
                    style={{
                      border: "none",
                      height: "110px",
                      width: "110px",
                      background: "#e9ecef",
                      borderRadius: "50%",
                      textAlign: "center",
                    }}
                  >
                    <img
                      style={{ height: "50px", marginTop: "15px" }}
                      src={myImage3}
                    />
                    <p>Redux</p>
                  </div>
                  <div
                    style={{
                      border: "none",
                      height: "110px",
                      width: "110px",
                      background: "#e9ecef",
                      borderRadius: "50%",
                      textAlign: "center",
                    }}
                  >
                    {" "}
                    <img
                      style={{ height: "50px", marginTop: "15px" }}
                      src={myImage4}
                    />
                    <p>Node.js</p>
                  </div>

                  <div
                    style={{
                      border: "none",
                      height: "110px",
                      width: "110px",
                      background: "#e9ecef",
                      borderRadius: "50%",
                      textAlign: "center",
                    }}
                  >
                    {" "}
                    <img
                      style={{ height: "50px", marginTop: "15px" }}
                      src={myexpress}
                      //src="https://pngimage.net/wp-content/uploads/2018/05/express-js-png-5.png"
                    />
                    <p>Express</p>
                  </div>
                  <div
                    style={{
                      border: "none",
                      height: "110px",
                      width: "110px",
                      background: "#e9ecef",
                      borderRadius: "50%",
                      textAlign: "center",
                    }}
                  >
                    <img
                      style={{ height: "50px", marginTop: "15px" }}
                      src={mynpm}
                      // src="https://img.icons8.com/color/48/000000/npm.png"
                    />
                    <p>npm</p>
                  </div>
                </div>
              </div>

              {/* </div> */}
            </div>
          </div>
          {/* </div> */}
        </div>
      </section>
    );
  }
}

export default About;
