import Home from './screens/Home';
import Userinput from './screens/Userinput';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
         <Route path='/' element={< Home />} /> 
         <Route path='/user' element={< Userinput />} /> 

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
