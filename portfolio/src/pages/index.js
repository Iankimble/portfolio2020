import React from "react"
// import { Link } from "gatsby"
import { Jumbotron, Container } from "react-bootstrap"

import Links from "../components/links"
import Projects from "../components/projectCards"
import Skills from "../components/skills"
import Contact from "../components/contactForm"

const IndexPage = () => (
  <div style={{}}>
    <Links />

    <Jumbotron fluid>
      <Container>
        <h1>"Some wise quote..."</h1>
      </Container>
    </Jumbotron>
    <br />
    <div
      style={{
        textAlign: "center",
        marginLeft: "45px",
        marginRight: "45px",
        marginTop: "10px",
      }}
    >
      <h2>
        <u>About</u>
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <br />
      <h2>
        <u>Portfolio</u>
      </h2>
      <Projects />
      <br />
      <h2>
        <u>Skills</u>
      </h2>
      <Skills />
      <br />
      <h2>
        <u>Contact</u>
      </h2>
      <Contact />
    </div>
  </div>
)

export default IndexPage
