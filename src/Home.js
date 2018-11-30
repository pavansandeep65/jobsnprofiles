import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Button, Row, Col, Image} from 'react-bootstrap';
class Home extends React.Component{
 
  render(){
    return (
      <div>
      <Grid>
        <Jumbotron>
          <h2> welcome to jobsnprofiles </h2>
        
        <Link to ="/Employer">
          <Button bsStyle="primary"> Employer </Button>
        </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-1.jpg" circle className="profile- pic" />
            <h3>Frank</h3>
            </Col>
        </Row>
      </Grid>
      </div>
    )
  }
}

export default Home 