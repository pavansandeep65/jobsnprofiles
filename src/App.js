import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import CustomNavbar from './Customnavbar';
import Home from'./Home';
import Employer from './Employer';
import Jobseek from './Jobseek';
import Previousjob from './Previousjob';
import Upcoming from './Upcoming';


class App extends React.Component{
  render(){
    return(
      <Router> 
      <div> 
        <CustomNavbar/>             
        <hr />
        <Route exact path="/Home" component={Home}/>
        <Route  path="/Employer" component={Employer}/>
        <Route  path="/Jobseek" component={Jobseek}/>
      
        <Route  path="/Previousjob" component={Previousjob}/>
        <Route  path="/Upcoming" component={Upcoming}/>
        
      </div>
    </Router>

     );
  }
}

export default App;
 