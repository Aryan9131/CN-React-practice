import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { HomePage } from "./components/HomePage.jsx";
import { MovieDetails } from "./components/MovieDetails.jsx";

function App() {
   return (
      <Router>
         <Routes>
            <Route path="/" element ={<HomePage/>} />
            <Route path="/movie-details/:id" element={<MovieDetails/>} />
         </Routes>
      </Router>
   );
}

export default App;
