import './App.css';
import React from 'react';
import ToDo from './ToDo.js';
import Typography from '@material-ui/core/Typography';

function App() {
  return (
    <div className="App">
        <Typography variant="h2" component="h1" gutterBottom>What needs to do?</Typography>
        <ToDo />
    </div>
  );
}

export default App;
