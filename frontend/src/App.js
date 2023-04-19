import React, { createContext } from 'react';
import { Routes, Route  } from 'react-router-dom';
import Home from './components/Home';
import Sign from './components/Sign_';
import Publication from './components/Publication';
import AuthContext, { useSession } from './hooks/useSession'

function App() {
  let { loggedUser, setLoggedUser } = useSession();

  return (
    <AuthContext.Provider value={{loggedUser, setLoggedUser}}>
      <Routes>
        <Route exact path="/" element={loggedUser ? <Home /> : <Sign />} />
        <Route exact path="/signin" element={loggedUser ? <Home /> : <Sign />} />
        <Route exact path="/publication" element={loggedUser ? <Publication /> : <Sign />} />
        <Route path="*" element={loggedUser ? <Home /> : <Sign />} />
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;