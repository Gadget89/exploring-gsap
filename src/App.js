import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// App components
import Search from './Search';

// Temp holding following code for reference to build routes for projects
// <Switch>
//   <Route exact path="/" component={Home} />
//   <Route path="/about" render={ () => <About title='About' /> } />
//   <Route exact path="/teachers" component={Teachers} />
//   <Route path="/teachers/:topic/:name" component={Featured} />
//   <Route path="/courses" component={Courses} />
//   <Route component={NotFound} />
// </Switch>

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Search />


    </div>
  </BrowserRouter>
);

export default App;
