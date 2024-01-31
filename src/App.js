// import './App.css';
// import ExcuseGenerator from './excuse-gen/ExcuseGenerator';
// import PredictAge from './predict-age/PredictAge';
// import TodoList from './to-do-list/TodoList.1';
// import CatFactGen from './cat-fact/CatFactGen';

// function App() {
// return (
// <div className='App'>
// {/* <TodoList /> */}
// {/* <CatFactGen /> */}
// {/* <PredictAge /> */}
// {/* <ExcuseGenerator /> */}
// </div>
// );
// }

// export default App;


import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import Navbar from './pages/Navbar';
import { useState, createContext } from 'react';

export const AppContext = createContext()

function App() {
  const [username, setUsername] = useState('Mounir')

  return (
    <div className='App'>
      <AppContext.Provider value={{username, setUsername}}>
        <Router>
          <Navbar />
          <Routes>
            {/* <Route path='/' element={<Home username={username} />} /> */}
            <Route path='/' element={<Home />} />
            {/* <Route path='/profile' element={<Profile username={username} setUsername={setUsername} />} /> */}
            <Route path='/profile' element={<Profile />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;