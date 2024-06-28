// src/App.js
import React from 'react';
import { Container, CssBaseline } from '@mui/material';
import EpisodeForm from './components/EpisodeForm';

function App() {
  return (
    <Container>
      <CssBaseline />
      <EpisodeForm />
    </Container>
  );
}

export default App;
