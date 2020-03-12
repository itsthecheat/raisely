import React from 'react'

import styles from './Header.module.css'
import {Col, Row, Container} from 'react-bootstrap'
import 'typeface-montserrat'

export default () => (
<Container className= {styles.header} fluid={true}>
  <Row className={styles.center}>
    <Col >

  <h1>Leslie Behum // Customer Success Engineer</h1>
  <h5><a href="maito:llaurenb@gmail.com">llaurenb@gmail.com</a> | <a href="http://www.github.com/itsthecheat">http://www.github.com/itsthecheat</a></h5>

    </Col>
  </Row>
</Container>
)
