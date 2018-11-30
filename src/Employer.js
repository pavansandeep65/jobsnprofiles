import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Button} from 'react-bootstrap';
class Employer extends React.Component{
 
  render(){
    return(
      // <div>
      //   Hello Employer
      // </div>
      <div>
      <Grid>
        <Jumbotron>
          <h2> welcome to jobsnprofiles </h2>
        </Jumbotron>
        <Link to ="/Employer">
          <Button bsStyle="primary"> Employer </Button>
        </Link>
      </Grid>
      </div>
    )
  }
}

 export default Employer