import bipbip1 from "~/static/images/jpg/bipbip1.jpg";
import bipbip2 from "~/static/images/jpg/bipbip2.jpg";
import bipbip3 from "~/static/images/jpg/bipbip3.jpg";
import bipbip4 from "~/static/images/jpg/bipbip4.jpg";
import bipPlay from "~/static/videos/bipbipplay.mp4";
import sici1 from "~/static/images/jpg/sici1.jpg";
import sici2 from "~/static/images/jpg/sici2.jpg";
import sici3 from "~/static/images/jpg/sici3.jpg";
import sici4 from "~/static/images/jpg/sici4.jpg";
import siciPlay from "~/static/videos/siciplay.mp4";
import pokedex from "~/static/images/jpg/pokedex.jpg";
import ionic from "~/static/images/png/ionic-icon.png";
import vue from "~/static/images/png/vue-icon.png";
import firebase from "~/static/images/png/firebase-icon.png";
import tailwind from "~/static/images/png/tailwind-icon.png";
import supabase from "~/static/images/png/supabase-icon.png";
import css from "~/static/images/png/css-icon.png";
import html from "~/static/images/png/html-icon.png";
import react from "~/static/images/png/react-icon.png";
import js from "~/static/images/png/js-icon.png";
import ts from "~/static/images/png/ts-icon.png";

export const mediaData = [
  {
    id: 1,
    name: 'Bipbip',
    icon: [
      {src: ionic, alt: 'Ionic'},
      {src: vue, alt: 'Vue'},
      {src: firebase, alt: 'Firebase'},
      {src: tailwind, alt: 'Tailwind'},
      {src: ts, alt: 'ts'}
    ],
    description: 'En este proyecto, trabajé con Ionic Framework por primera vez lo cual fue un reto, ' +
        'tambien me ayudó a fortalecer mi conocimiento en el uso del Composition API. ' +
        'Uno de los mayores retos fue aprender a utilizar Firebase para implementar funciones ' +
        'esenciales en la app, como la autenticación mediante número de celular y verificacion del numero. ' +
        'Aunque al principio fue complicado, profundicé en la documentación para cada situación específica y pude superar esos obstáculos. ' +
        'Además, utilicé TailwindCSS para el diseño y me enfrenté al reto de integrar la API del mapa, lo cual también implicó aprender nuevas ' +
        'funciones a través de la documentación. Este proyecto me permitió mejorar mi capacidad de aprendizaje y resolución ' +
        'de problemas en un entorno real.',
    images: [
      {src: bipbip1, alt: 'Bipbip 1'},
      {src: bipbip2, alt: 'Bipbip 2'},
      {src: bipbip3, alt: 'Bipbip 3'},
      {src: bipbip4, alt: 'Bipbip 4'}
    ],
    video: bipPlay,
    alt: 'Project 1'
  },
  {
    id: 2,
    name: 'Sici',
    icon: [
      {src: ionic, alt: 'Ionic'},
      {src: vue, alt: 'Vue'},
      {src: supabase, alt: 'supabase'},
      {src: tailwind, alt: 'Tailwind'},
      {src: ts, alt: 'ts'}
    ],
    description: 'En este proyecto, trabajé con Ionic Framework por primera vez lo cual fue un reto, ' +
        'tambien me ayudó a fortalecer mi conocimiento en el uso del Composition API. ' +
        'Uno de los mayores retos fue aprender a utilizar Firebase para implementar funciones ' +
        'esenciales en la app, como la autenticación mediante número de celular y verificacion del numero. ',
    images: [
      {src: sici1, alt: 'Sici 1'},
      {src: sici2, alt: 'Sici 2'},
      {src: sici3, alt: 'Sici 3'},
      {src: sici4, alt: 'Sici 4'}
    ],
    video: siciPlay,
    alt: 'Project 2'
  },
  {
    id: 3,
    name: 'Pokedex',
    icon: [
      {src: react, alt: 'react'},
      {src: css, alt: 'css'},
      {src: html, alt: 'html'},
      {src: js, alt: 'js'},
    ],
    description: 'En este proyecto, trabajé con Ionic Framework por primera vez lo cual fue un reto, ' +
        'tambien me ayudó a fortalecer mi conocimiento en el uso del Composition API. ' +
        'Uno de los mayores retos fue aprender a utilizar Firebase para implementar funciones ' +
        'esenciales en la app, como la autenticación mediante número de celular y verificacion del numero. ' +
        'Aunque al principio fue complicado, profundicé en la documentación para cada situación específica y pude superar esos obstáculos. ' +
        'Además, utilicé TailwindCSS para el diseño y me enfrenté al reto de integrar la API del mapa, lo cual también implicó aprender nuevas ' +
        'funciones a través de la documentación. Este proyecto me permitió mejorar mi capacidad de aprendizaje y resolución ' +
        'de problemas en un entorno real.',
    images: [
      {src: pokedex, alt: 'Pokedex'},
      {src: sici4, alt: 'Sici 4'},
      {src: sici4, alt: 'Sici 4'},
      {src: sici4, alt: 'Sici 4'}
    ],
    video: siciPlay,
    alt: 'Project 3'
  },
    {
      id: 4,
    name: 'Pokedex',
    icon: [
      {src: react, alt: 'react'},
      {src: css, alt: 'css'},
      {src: html, alt: 'html'},
      {src: js, alt: 'js'},
    ],
    description: 'En este proyecto, trabajé con Ionic Framework por primera vez lo cual fue un reto, ' +
        'tambien me ayudó a fortalecer mi conocimiento en el uso del Composition API. ' +
        'Uno de los mayores retos fue aprender a utilizar Firebase para implementar funciones ' +
        'esenciales en la app, como la autenticación mediante número de celular y verificacion del numero. ' +
        'Aunque al principio fue complicado, profundicé en la documentación para cada situación específica y pude superar esos obstáculos. ' +
        'Además, utilicé TailwindCSS para el diseño y me enfrenté al reto de integrar la API del mapa, lo cual también implicó aprender nuevas ' +
        'funciones a través de la documentación. Este proyecto me permitió mejorar mi capacidad de aprendizaje y resolución ' +
        'de problemas en un entorno real.',
    images: [
      {src: sici4, alt: 'Sici 4'},
      {src: pokedex, alt: 'Pokedex'},
      {src: sici4, alt: 'Sici 4'},
      {src: sici4, alt: 'Sici 4'}
    ],
    video: siciPlay,
    alt: 'Project 3'
  },
    {
      id: 5,
    name: 'Pokedex',
    icon: [
      {src: react, alt: 'react'},
      {src: css, alt: 'css'},
      {src: html, alt: 'html'},
      {src: js, alt: 'js'},
    ],
    description: 'En este proyecto, trabajé con Ionic Framework por primera vez lo cual fue un reto, ' +
        'tambien me ayudó a fortalecer mi conocimiento en el uso del Composition API. ' +
        'Uno de los mayores retos fue aprender a utilizar Firebase para implementar funciones ' +
        'esenciales en la app, como la autenticación mediante número de celular y verificacion del numero. ' +
        'Aunque al principio fue complicado, profundicé en la documentación para cada situación específica y pude superar esos obstáculos. ' +
        'Además, utilicé TailwindCSS para el diseño y me enfrenté al reto de integrar la API del mapa, lo cual también implicó aprender nuevas ' +
        'funciones a través de la documentación. Este proyecto me permitió mejorar mi capacidad de aprendizaje y resolución ' +
        'de problemas en un entorno real.',
    images: [
      {src: pokedex, alt: 'Pokedex'},
      {src: sici2, alt: 'Sici 4'},
      {src: sici4, alt: 'Sici 4'},
      {src: sici4, alt: 'Sici 4'}
    ],
    video: siciPlay,
    alt: 'Project 3'
  }
];