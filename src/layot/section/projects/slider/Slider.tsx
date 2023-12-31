
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {S} from "./Slider_Styles"
import {ProjectCard} from "../projectCard/ProjectCard";
import PhotoProject1 from "../../../../assets/images/PhotoProject1.webp"
import PhotoProject2 from "../../../../assets/images/PhotoProject2.webp"
import PhotoProject3 from "../../../../assets/images/PhotoProject3.webp"
import "./../../../../styles/Slider.css"
const projects = [
    {
        title: "Project  1",
        text: "This is sample project description 1. Random things are here in description. This is sample project lorem ipsum generator for dummy content.",
        src: PhotoProject1
    },
    {
        title: "Project Tile goes here 2",
        text: "This is sample project description 2. Random things are here in description. This is sample project lorem ipsum generator for dummy content.",
        src: PhotoProject2
    },
    {
        title: "Project Tile goes here 3",
        text: "This is sample project description 3. Random things are here in description. This is sample project lorem ipsum generator for dummy content.",
        src: PhotoProject3
    },
    {
        title: "Project Tile goes here 3",
        text: "This is sample project description 3. Random things are here in description. This is sample project lorem ipsum generator for dummy content.",
        src: PhotoProject3
    },
];

const items = [
    <S.Slide />

];

 export const Slider:React.FC = () => (

       <S.Slider>
           <AliceCarousel
               mouseTracking
               items={projects.map((project, index) => <ProjectCard {...project} />
               )}
           />
       </S.Slider>



);


