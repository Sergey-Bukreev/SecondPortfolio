import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./layot/header/Header";
import {Maine} from "./layot/section/maine/Maine";
import {TechStack} from "./layot/section/techStack/TechStack";
import {AboutMe} from "./layot/section/aboutme/AboutMe";
import {Projects} from "./layot/section/projects/Projects";
import {Contacts} from "./layot/section/contacts/Contacts";
import {Footer} from "./layot/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Maine />
        <AboutMe />
      <TechStack />
        <Projects />
        <Contacts />
        <Footer />

    </div>
  );
}

export default App;
