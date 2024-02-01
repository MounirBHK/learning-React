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


import { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import Navbar from './pages/Navbar';
import ShowHiddenText from './pages/show-text/ShowHiddenText';
import CatFatGen from './pages/cat-fact/CatFactGen'
import PredictAge from './pages/predict-age/PredictAge'
import ExcuseGenerator from './pages/excuse-gen/ExcuseGenerator';
import TodoList from './pages/to-do-list/TodoList';
import Counter from './pages/counter-with-hook/Counter';

export const AppContext = createContext()

function App() {
  const [username, setUsername] = useState('Mounir')
  const client = new QueryClient()
  // si in veux eviter le rafrechissement en passant d'aun oglet a un autre dans le navigateur
  // const client = new QueryClient({defaultOptions: {
  //   queries: {
  //     refetchOnWindowFocus:false
  //   }
  // }})

  return (
    <div className='App'>
      <AppContext.Provider value={{ username, setUsername }}>
        <QueryClientProvider client={client}>
          <Router>
            <Navbar />
            <Routes>
              {/* <Route path='/' element={<Home username={username} />} /> */}
              <Route path='/' element={<Home />} />
              {/* <Route path='/profile' element={<Profile username={username} setUsername={setUsername} />} /> */}
              <Route path='/profile' element={<Profile />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/show-text' element={<ShowHiddenText />} />

              <Route path='/cat-fact' element={<CatFatGen />} />
              <Route path='/predict-age' element={<PredictAge />} />
              <Route path='/todo-list' element={<TodoList />} />
              <Route path='/excuse-gen' element={<ExcuseGenerator />} />
              <Route path='/counter' element={<Counter />} />

              <Route path='*' element={<ErrorPage />} />
            </Routes>
          </Router>
        </QueryClientProvider>
      </AppContext.Provider>
    </div>
  );
}

export default App;