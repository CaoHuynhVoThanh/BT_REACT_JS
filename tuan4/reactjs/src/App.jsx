import { useState, useEffect } from 'react'
import FetchApi from './components/FetchApi'
import FetchApiWithAsyncAwait from './components/FetchApiWithAsyncAwait'
import './App.css'

// Bai 1
function App() {
  return(
    <FetchApiWithAsyncAwait></FetchApiWithAsyncAwait>
  );
}

export default App
