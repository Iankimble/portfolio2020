import React from "react"

import { CardGroup, Card, Button } from "react-bootstrap"
import testamentImg from "./images/portfolio/testament_login_screencap.png"
import greenprintImg from "./images/portfolio/greenprint_screencap.png"
import fstbrkImg from "./images/portfolio/fstbrk_screencap.png"
import reactWeather from "./images/portfolio/react-u-weather_screencap.png"
import vice from "./images/portfolio/21vice_screencap.png"
import nbaStat from "./images/portfolio/nbastats_screencap.png"
// import myDay from "./images/portfolio"

const projectCards = () => (
  <div>
    <div>
      <CardGroup>
        <Card>
          <Card.Img
            variant="top"
            src={testamentImg}
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "50%",
            }}
          />
          <Card.Body>
            <Card.Title>Testament</Card.Title>
            <Card.Text style={{ padding: "10px" }}>
              MERN Stack digital prayer journal and daily devotional
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button size="sm" style={{ width: "120px", margin: "10px" }}>
              Github
            </Button>
            <Button size="sm" style={{ width: "120px", margin: "10px" }}>
              Application
            </Button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src={greenprintImg}
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "50%",
            }}
          />
          <Card.Body>
            <Card.Title>GreenPrint</Card.Title>
            <Card.Text style={{ padding: "10px" }}>
              MERN Stack budetting calculator and Financial literacy resource
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button size="sm" style={{ width: "120px", margin: "10px" }}>
              Github
            </Button>
            <Button size="sm" style={{ width: "120px", margin: "10px" }}>
              Application
            </Button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src={fstbrkImg}
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "50%",
            }}
          />
          <Card.Body>
            <Card.Title>My Day</Card.Title>
            <Card.Text style={{ padding: "10px" }}>
              MERN stack weekly planner
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button size="sm" style={{ width: "120px", margin: "10px" }}>
              Github
            </Button>
            <Button size="sm" style={{ width: "120px", margin: "10px" }}>
              Application
            </Button>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
    <div>
      <CardGroup>
        <Card>
          <Card.Img
            variant="top"
            src={fstbrkImg}
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "50%",
            }}
          />
          <Card.Body>
            <Card.Title>Fst Brk</Card.Title>
            <Card.Text style={{ padding: "10px" }}>
              Turnbase rock-paper-scissor themed basketball game created with
              html, css, and javaScript
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button size="sm" style={{ width: "120px", margin: "10px" }}>
              Github
            </Button>
            <Button size="sm" style={{ width: "120px", margin: "10px" }}>
              Application
            </Button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src={reactWeather}
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "50%",
            }}
          />
          <Card.Body>
            <Card.Title>React-U-Weather</Card.Title>
            <Card.Text style={{ padding: "10px" }}>
              React front end application using the open weather api and giphy
              api to convey the "feel" of the weather
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button size="sm" style={{ width: "120px", margin: "10px" }}>
              Github
            </Button>
            <Button size="sm" style={{ width: "120px", margin: "10px" }}>
              Application
            </Button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src={vice}
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "50%",
            }}
          />
          <Card.Body>
            <Card.Title>21 Vice</Card.Title>
            <Card.Text style={{ padding: "10px" }}>
              MERN stack multiplayer 80s themed black jack
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button size="sm" style={{ width: "120px", margin: "10px" }}>
              Github
            </Button>
            <Button size="sm" style={{ width: "120px", margin: "10px" }}>
              Application
            </Button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src={nbaStat}
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "50%",
            }}
          />
          <Card.Body>
            <Card.Title>NBA Stats</Card.Title>
            <Card.Text style={{ padding: "10px" }}>
              front end react application that used the ball dont lie api and
              open web api to rtrieve NBA player stats and images
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button size="sm" style={{ width: "120px", margin: "10px" }}>
              Github
            </Button>
            <Button size="sm" style={{ width: "120px", margin: "10px" }}>
              Application
            </Button>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  </div>
)

export default projectCards
