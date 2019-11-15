import React from "react";
import Header from "./components/Header";
import CharacterListPage from "./components/CharacterListPage";
import {Route,Link} from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import CharacterPage from "./components/CharacterPage";
import stlyed from "styled-components";


export default function App() {
  return (
    <main>
      <Header />
      <NavBar>
      <Link to="/" className="links">Home</Link>
      <Link to="/list" className="links">Character List</Link>
      </NavBar>
      <Route  exact path="/" component={WelcomePage} />
      <Route  path="/list" component={CharacterListPage} />
      <Route  path="/char/:id" component={CharacterPage} />
    </main>
    
  );
}

const NavBar = stlyed.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding:1rem;
`;
