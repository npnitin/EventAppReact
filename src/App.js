import React,{Fragment} from 'react';
import './App.css';
import Navbar from './features/nav/NavBar/Navbar';
import { Container } from 'semantic-ui-react';
import Eventsdashboard from './features/events/EventsDashboard/Eventsdashboard';

function App() {
  return (
    <Fragment>
      <Navbar />
        <Container className="main">
          <Eventsdashboard />
        </Container>
    </Fragment>
  );
}

export default App;
