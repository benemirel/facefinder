
import React from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/imagelinkform/ImageLinkForm';
import Rank from './components/rank/Rank';
import Particles from "react-tsparticles";

const particlesOptions={
  particles:{
    number: {
      value: 100,
      density:{
        enable:true,
        value_area: 800
      }
    }
  }
}
function App() {
  return (
    <div className="App">
    <Particles className='particles'
    params ={particlesOptions} />
    <Navigation />
    <Logo />
    <ImageLinkForm />
<Rank />
    {/*
    <FaceRecognition />*/}
    </div>
  );
}

export default App;
