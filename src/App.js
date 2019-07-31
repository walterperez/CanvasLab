import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from './components/NavBar';
import Home from './routes/Home';
import Lines from './routes/Lines';
import Rectangles from './routes/Rectangles';
import Circles from './routes/Circles';
import Paths from './routes/Paths';
import ShapeColision from './routes/ShapeColision';

const AppContainer = styled.div``;

class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/lines" exact component={Lines} />
          <Route path="/rectangles" exact component={Rectangles} />
          <Route path="/circles" exact component={Circles} />
          <Route path="/paths" exact component={Paths} />
          <Route path="/shapecolision" exact component={ShapeColision} />
        </Switch>
      </AppContainer>
    );
  }
}

export default App;
