import React,{Fragment} from 'react';
import './App.css';
import Navbar from './features/nav/NavBar/Navbar';
import { Container } from 'semantic-ui-react';
import Eventsdashboard from './features/events/EventsDashboard/Eventsdashboard';
import { Route } from 'react-router';
import HomePage from './features/home/HomePage';
import EventDetailPage from './features/events/EventDetailed/EventDetailPage';
import PeopleDashboard from './features/user/PeopleDashboard/PeopleDashboard';
import SettingsDashboard from './features/user/Settings/SettingsDashboard';
import UserDetailedPage from './features/user/UserDetailed/UserDetailed';
import EventForm from './features/events/EventForm/EventForm';
import TestComponent from './features/testArea/TestComponent';

function App() {
  return (
    <Fragment>
       <Route exact path="/" component={HomePage}></Route>
       <Route exact path="/(.+)" render={()=>(
         <Fragment>
         <Navbar />
           <Container className="main">
             <Route exact path="/events" component={Eventsdashboard}></Route>
             <Route exact path="/events/:id" component={EventDetailPage}></Route>
             <Route exact path="/people" component={PeopleDashboard}></Route>
             <Route exact path="/profile/:id" component={UserDetailedPage}></Route>
             <Route path="/settings" component={SettingsDashboard}></Route>
             <Route exact path="/createEvent" component={EventForm}></Route>
             <Route exact path="/test" component={TestComponent}></Route>
           </Container>
       </Fragment>
       )}/>
    </Fragment>
    
  );
}

export default App;
