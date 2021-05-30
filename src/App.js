import './App.css';
import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import Home from './components/Home';
import About from './components/About';
import Adoptions from './components/Adopcion/Adoptions';
import CreatePet from './components/CreatePet';
import MostrarMascota from './components/MostrarMascota';
import Donaciones from './components/Donations/Donaciones';
import Albergues from './components/Albergues/Albergues';
import Albergue from './components/Albergues/Albergue';
import Perdidos from './components/Perdidos';
import FormularioAdopcion from './components/FormularioAdopcion';
import Page404 from './components/Page404';
import QA from './components/QA';
import Conctactus from './components/Contactus';
import MapGeocoding from './components/MapGeocoding';
import Login from './components/Login';
import Register from './components/Register';
import CreateAlbergue from './components/CreateAlbergue';
import NavBar from './components/NavBar';


// pages
import profile from './pages/profile/Index';
import Forget from './pages/forget';
import Dashboard from './pages/dashboard/Index';


import { CRMContext,CRMProvider } from './context/CRMContext';
import Restablecer from './components/Restablecer';

function App() {

    // utilizar context

    const [ auth, guardarAuth ] = useContext(CRMContext)
    
    return (
    <Router>
      <CRMProvider value={ [ auth, guardarAuth ] } >
        
        <NavBar/>

         
    
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/albergues" component={Albergues} />
                <Route exact path="/donaciones" component={Donaciones} />
                <Route exact path="/adoptar" component={Adoptions} />
                <Route exact path="/acerca" component={About} />
                <Route exact path="/perdidos" component={Perdidos} />
                <Route exact path="/qa" component={QA} />
                <Route exact path="/contactanos" component={Conctactus} />
                <Route exact path="/registrar" component={Register} />
                <Route exact path="/404" component={Page404} />

               
                <Route exact path="/ingresar" component={Login} />

                <Route exact path="/crear" component={CreatePet} />
                <Route exact path="/mascotas/:id"  component={MostrarMascota} /> 
                <Route exact path="/albergue/"  component={Albergue} /> 
                <Route exact path="/formulario" component={FormularioAdopcion} />
                <Route exact path="/map" component={MapGeocoding} />
                <Route exact path="/albergues/crear" component={CreateAlbergue} />
                <Route exact path="/profile/" component={profile} />
                <Route exact path="/forget/" component={Forget} />
                <Route exact path="/reestablecer/:id" component={Restablecer} />
                <Route exact path="/veterians" component={Dashboard} />

                <Route path="*">
                  <Page404 />
                </Route>
                          
               
            </Switch>
        </div>     
                </CRMProvider>
    </Router>
  
  );
}

export default App;
