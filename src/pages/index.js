import React from "react"

import 'bootstrap/dist/css/bootstrap.min.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleDoubleDown} from '@fortawesome/free-solid-svg-icons'
import {Accordion, Card, Container, ListGroup} from 'react-bootstrap'
import "./global.css"
import Header from '../components/Header'

export default() => <div> 
  <Header/>
  <Container>
    <Accordion>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
            <h4>
              <span>
                <FontAwesomeIcon icon={faAngleDoubleDown} style={{ color: '#8835D6'}}/>
              </span>
              Why would you be a good fit for the Customer Success Engineer role?
            </h4>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <p>
              I thrive on problem solving and helping to resolve issues; I like to come up with solutions and help others to achieve them. I have over 10 years of experience in customer support for everything from health insurance to e-commerce, and customer facing roles in photography.
            </p>
              <p>I’ve always been computer savvy, and have been pushing my career in a more technology oriented direction. This position is a perfect combination for where I’m headed, and to put creativity and problem solving to use by supporting a product I can really get behind.

            </p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
            <h4>
              <span>
                <FontAwesomeIcon icon={faAngleDoubleDown} style={{ color: '#8835D6'}}/>
              </span>
              Why do you want to work here over somewhere else?
            </h4>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            I have been moving from a career in photography to web development over the past few years. Ideally I’d love to work for a company where I can continue to grow and learn, and support making that transition. Raisely aligns with the values I'm looking for in a company, and I think it would be a great fit.
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="2">
            <h4>
              <span>
                <FontAwesomeIcon icon={faAngleDoubleDown} style={{ color: '#8835D6'}}/>
              </span>
              Tell us out of this list two things you are excited about, two things you want to learn how to do and two you don't want to do.</h4>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
            <b>Two things I'm excited about:</b>
            <ListGroup>
            <ListGroup.Item>
              -Work with developers to debug and resolve a product issue
            </ListGroup.Item>
            <ListGroup.Item>
            -Change the fonts and background colour on someone's campaign
          </ListGroup.Item>
            </ListGroup>
            <b>Two things I want to learn:</b>
            <ListGroup>
              <ListGroup.Item>
                -Running a training session with a customer to set up their unique campaign
            </ListGroup.Item>
            <ListGroup.Item>
              -Create a video tutorial on how to set up a campaign element
            </ListGroup.Item>
            </ListGroup>
            <b>Two things I don't want to do:</b>
            <ListGroup>
              <ListGroup.Item>
                -Recruit a new team member
            </ListGroup.Item>
            <ListGroup.Item>
              -Coordinating regular blog posts for our blog from the team
            </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="3">
            <h4>
              <span>
                <FontAwesomeIcon icon={faAngleDoubleDown} style={{color: '#8835D6'}}/>
              </span>
              Tell us about a platform you believe has solved a complex problem really well, and why. Would you change anything in their approach?
            </h4>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="3">
          <Card.Body>
            <p>
            I’ve used a few different CRM platforms in the past in various customer support roles. The most recent I used was Zendesk to coordinate tickets for chat, email and phone calls. Overall,  it’s ability to combine important aspects together is well-done. I appreciated the ability to attach and combine tickets to each other for clarity, and link to tickets from outside applications.
          </p>
          <p> I wouldn’t change the approach, although I beeive some of the services could be improved. It’s ideal to have several services  that are being utilized offered under one umbrella; most platforms are headed in that direction. It is beneficial for businesses efficiency to be able to take care of several aspects of customer interaction at once.
          </p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>


    <iframe src='https://we-love-dogs.raisely.com/embed/' style={{
        width: '100%',
        height: '600px',
        border: '0'
      }}></iframe>
  </Container>
</div>
