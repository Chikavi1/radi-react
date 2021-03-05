import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Adoptions from './components/Adoptions';
import CreatePet from './components/CreatePet';
import MostrarMascota from './components/MostrarMascota';
import Donaciones from './components/Donations/Donaciones';
import Albergues from './components/Albergues';
import Albergue from './components/Albergue';

function App() {

    
    const [Navbar,setNavbar] = useState(false);
    return (
    <Router>
     
        <header  className="header my-6 ">
            <div className="container z-50 px-2 sm:px-8 lg:px-10 xl:px-10 mx-auto">
                    <div className="header-wrapper flex items-center justify-between">

                        <div className="header-logo">
                            <h1 className="font-semibold lg:ml-12 text-black leading-relaxed text-lg">
                              <Link className="sm:pl-4 ml-4" to="/">Radi</Link>
                            </h1>
                        </div>

                        <div className="toggle md:hidden">
                            <button onClick={ ()=>{setNavbar(!Navbar) } } >
                                <svg
                                    className="h-6 w-6 fill-current text-black"
                                    fill="none" strokeLinecap="round"
                                    strokeLinejoin="round" strokeWidth="2"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>

                        <div className="navbar hidden md:block ">
                            <ul className="flex space-x-8 text-sm font-semibold">
                                <li> <Link to="/donaciones">Donaciones</Link></li>
                                <li><Link to="/albergues">Albergues</Link></li>
                                <li> <Link to="/patrocinadores">Patrocinadores</Link> </li>
                                <li>
                                  <Link to="/adoptar" className="cta bg-purple-500 hover:bg-purple-600 px-5 py-3 rounded text-white font-normal">Adopta</Link></li>
                            </ul>
                        </div>

                        
                    </div>
            </div>
            
        </header>

        {Navbar}

        
        
        { Navbar && (
            <ul class="z-10 md:hidden  bg-white w-full h-full absolute flex flex-col p-3 border-t md:flex-row md:items-center md:mx-0 md:ml-auto md:mt-0 md:pt-0 md:border-0">
                <li>
                    <Link  class="block px-4 py-2 ml-6 md:p-2 lg:px-4" to="/donaciones" onClick={ ()=>{setNavbar(!Navbar) } }>Donaciones</Link>
                </li>

                <li>
                    <Link  class="block px-4 py-2 ml-6 md:p-2 lg:px-4" to="/albergues" onClick={ ()=>{setNavbar(!Navbar) } }>Albergues</Link>
                </li>

                <li>
                    <Link  class="block px-4 py-2 ml-6 md:p-2 lg:px-4" to="/patrocinadores" onClick={ ()=>{setNavbar(!Navbar) } }>Patrocinadores</Link>
                </li>
                
                <li>
                    <Link  class="block px-4 py-2 ml-6 md:p-2 lg:px-4" to="/adoptar" onClick={ ()=>{setNavbar(!Navbar) } }>adoptar</Link>
                </li>
            </ul>
        )  }
    
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/crear" component={CreatePet} />
                <Route exact path="/albergues" component={Albergues} />
                <Route exact path="/donaciones" component={Donaciones} />
                <Route exact path="/acerca" component={About} />
                <Route exact path="/adoptar" component={Adoptions} />
                <Route exact path="/mascotas/:id"  component={MostrarMascota} /> 
                <Route exact path="/albergue/"  component={Albergue} /> 

            </Switch>
        </div>     
    </Router>
  
  );
}

export default App;
