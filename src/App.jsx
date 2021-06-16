import './App.css';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import ToDo from './ToDo';

function App() {
  return (
    <div className="App">
      <Typography variant="h2" component="h1" gutterBottom>
        What needs to do?
      </Typography>
      <ToDo />
    </div>
  );
}

export default App;
