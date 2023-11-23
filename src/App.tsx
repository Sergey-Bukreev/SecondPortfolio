import React from 'react';

import './App.css';
import {Header} from "./layot/header/Header";
import {Maine} from "./layot/section/maine/Maine";
import {TechStack} from "./layot/section/techStack/TechStack";
import {AboutMe} from "./layot/section/aboutme/AboutMe";
import {Projects} from "./layot/section/projects/Projects";
import {Contacts} from "./layot/section/contacts/Contacts";
import {Footer} from "./layot/footer/Footer";
import {Education} from "./layot/section/education/Education";
import {Particle} from "./components/Particle/Particle";

function App() {
  return (
    <div className="App">
        <Particle />

        <Header />
        <Maine />
        <AboutMe />
        <Education />
        <TechStack />
        <Projects />
        <Contacts />
        <Footer />

    </div>
  );
}

export default App;
