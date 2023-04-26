import React, { createContext } from 'react';
import { Routes, Route  } from 'react-router-dom';
import Home from './components/Home';
import Sign from './components/Sign_';
import Publication from './components/Publication';
import Validation from './components/Validation';
import PageArticle from './components/Validation/PageArticle';
import Team from './components/Team';
import AuthContext, { useSession } from './hooks/useSession'


function App() {
  let { loggedUser, setLoggedUser } = useSession();

  return (
    <AuthContext.Provider value={{loggedUser, setLoggedUser}}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signin" element={loggedUser ? <Home /> : <Sign />} />
        <Route exact path="/publication" element={<Publication />} />
        <Route path="*" element={loggedUser ? <Home /> : <Sign />} />
        <Route path="validation" element={<Validation />} />
        <Route path="validation/pageArticle" element={<PageArticle />} />
        <Route path="team" element={<Team />} />
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;