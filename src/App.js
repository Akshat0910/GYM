import './App.css';
import Box from '@mui/material/Box';
import { Route,Routes } from 'react-router-dom';


import ExerciseDetail from './ExerciseDetail';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';


function App() {
  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
 
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
    </Routes>
    <Footer />

    

    </Box>
   
  );
}

export default App;
