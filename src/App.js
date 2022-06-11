import './App.css';

import React from 'react'

import Test from './Components/Test'

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TestProvider from './Contexts/TestContext';

const App = () => {
  return (
    <Container className="p-3">
      <Tabs defaultActiveKey="home" id="menu-initial" className="mb-3">
        <Tab eventKey="home" title="Home">
          <TestProvider>
            <Test />
          </TestProvider>
        </Tab>
        <Tab eventKey="about" title="About">
          <p>Um semi-jovem careca tentando fazer site?</p>
        </Tab>
      </Tabs>
    </Container>
  )
}

export default App;
