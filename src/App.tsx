import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./layot/header/Header";
import {Maine} from "./layot/section/maine/Maine";
import {TechStack} from "./layot/section/techStack/TechStack";
import {AboutMe} from "./layot/section/aboutme/AboutMe";

function App() {
  return (
    <div className="App">
      <Header />
      <Maine />
        <AboutMe />
      <TechStack />

    </div>
  );
}

export default App;
