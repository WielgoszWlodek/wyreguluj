import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Navbar from './Navbar/Navbar';
import Dodaj from './Dodaj/Dodaj';
import DodajLękliwy from './Dodaj/Dodajbodziec/DodajLękliwy';
import DodajRozgniewany from './Dodaj/DodajbodziecRozgniewany/DodajRozgniewany';
import DodajZniesmaczony from './Dodaj/DodajbodziecZniesmaczony/DodajZniesmaczony';
import DodajSzczęśliwy from './Dodaj/DodajbodziecSzczęśliwy/DodajSzczęśliwy'
import DodajZaskoczony from './Dodaj/DodajbodziecZaskoczony/DodajZaskoczony';


import DodajSłaby from './Dodaj/DodajbodziecSłaby/DodajSłaby';
import DodajSmutny from './Dodaj/DodajbodziecSmutny/DodajSmutny';

import LękliwyNotatki from './pages/uczucia/lękliwy/lękliwyBodziec/LękliwyNotatki';
import DodajLękliwybodziec from './Dodaj/Dodajbodziec/DodajLękliwybodziec';
import DodajLękliwyNotatki from './Dodaj/Dodajbodziec/DodajLękliwyNotatki';
import DodajSłabyNotatki from './Dodaj/DodajbodziecSłaby/DodajSłabyNotatki';
import DodajRozgniewanyNotatki from './Dodaj/DodajbodziecRozgniewany/DodajRozgniewanyNotatki';
import DodajSzczęśliwyNotatki from './Dodaj/DodajbodziecSzczęśliwy/DodajSzczęśliwyNotatki';
import DodajSzczęśliwyStan from './Dodaj/DodajbodziecSzczęśliwy/DodajSzczęśliwyStan';
import DodajZaskoczonyStan from './Dodaj/DodajbodziecZaskoczony/DodajZaskoczonyStan';
import DodajZniesmaczonyStan from './Dodaj/DodajbodziecZniesmaczony/DodajZniesmaczonyStan';

import DodajLękliwyStan from './Dodaj/Dodajbodziec/DodajLękliwyStan';
import DodajSłabyStan from './Dodaj/DodajbodziecSłaby/DodajSłabyStan'
import DodajRozgniewanyStan from './Dodaj/DodajbodziecRozgniewany/DodajRozgniewanyStan';
import DodajSmutnyStan from './Dodaj/DodajbodziecSmutny/DodajSmutnyStan';
import DodajSmutnyNotatki from './Dodaj/DodajbodziecSmutny/DodajSmutnyNotatki';
import DodajZaskoczonyNotatki from './Dodaj/DodajbodziecZaskoczony/DodajZaskoczonyNotatki';
import DodajZniesmaczonyNotatki from './Dodaj/DodajbodziecZniesmaczony/DodajZniesmaczonyNotatki';

import Validacja from './Dodaj/Dodajbodziec/Dodajvalidacja';
import Error from './Error/Error';
import Wykres from './pages/Wykres/Wykres';
import Settings from './pages/settings/Settings';
import Home from './pages/home/Home';

import Decyzja from './pages/decyzja/Decyzja';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Write from "./pages/write/Write";
import { Context } from "./context/Context";

import { useContext } from "react";
import SinglePost from './components/singlePost/SinglePost';
import Pagination1 from './components/pagination/Pagination1';

import Chart2 from './components/chart/Chart2';
import Chart3 from './components/chart/Chart3';
import Homeclone from './pages/home/homeclone';
import Dodajvalidacja from './Dodaj/Dodajbodziec/Dodajvalidacja';

const App = () => {
  const { user } = useContext(Context);
  console.log(user)
  return (
   <Router>  
   <Navbar />      
   <Switch>

  <Route exact path="/"> { user ? <Home /> : <Register />}</Route>
  
  <Route path="/clone">{ user ? <Homeclone /> : <Register />}</Route>
   <Route path="/dodaj/:id">{ user ? <Dodaj /> : <Register />}</Route>
   <Route path="/dodajLękliwy/:id">{ user ? <DodajLękliwy /> : <Register />}</Route>
   <Route path="/dodajSłaby/:id">{ user ? <DodajSłaby /> : <Register />}</Route>
   <Route path="/dodajZaskoczony/:id">{ user ? <DodajZaskoczony /> : <Register />}</Route>
   <Route path="/dodajSmutny/:id">{ user ? <DodajSmutny /> : <Register />}</Route>
   <Route path="/dodajRozgniewany/:id">{ user ? <DodajRozgniewany /> : <Register />}</Route>
   <Route path="/dodajSzczęśliwy/:id">{ user ? <DodajSzczęśliwy /> : <Register />}</Route>
   <Route path="/dodajZniesmaczony/:id">{ user ? <DodajZniesmaczony /> : <Register />}</Route>
   <Route path="/dodajLękliwybodziec/:id">{ user ? <DodajLękliwybodziec /> : <Register />}</Route>
   <Route path="/DodajLękliwyNotatki/:id">{ user ? <DodajLękliwyNotatki /> : <Register />}</Route>
   <Route path="/DodajSłabyNotatki/:id">{ user ? <DodajSłabyNotatki /> : <Register />}</Route>
   <Route path="/DodajZniesmaczonyNotatki/:id">{ user ? <DodajZniesmaczonyNotatki /> : <Register />}</Route>
   <Route path="/DodajZaskoczonyNotatki/:id">{ user ? <DodajZaskoczonyNotatki /> : <Register />}</Route>
   <Route path="/DodajSzczęśliwyNotatki/:id">{ user ? <DodajSzczęśliwyNotatki /> : <Register />}</Route>
   <Route path="/DodajSmutnyNotatki/:id">{ user ? <DodajSmutnyNotatki /> : <Register />}</Route>
   <Route path="/DodajRozgniewanyNotatki/:id">{ user ? <DodajRozgniewanyNotatki /> : <Register />}</Route>
   <Route path="/DodajLękliwyStan/:id">{ user ? <DodajLękliwyStan /> : <Register />}</Route>
   <Route path="/DodajZniesmaczonyStan/:id">{ user ? <DodajZniesmaczonyStan /> : <Register />}</Route>
   <Route path="/DodajZaskoczonyStan/:id">{ user ? <DodajZaskoczonyStan /> : <Register />}</Route>
   <Route path="/DodajSłabyStan/:id">{ user ? <DodajSłabyStan /> : <Register />}</Route>
   <Route path="/DodajSzczęśliwyStan/:id">{ user ? <DodajSzczęśliwyStan /> : <Register />}</Route>
   <Route path="/DodajRozgniewanyStan/:id">{ user ? <DodajRozgniewanyStan /> : <Register />}</Route>
   <Route path="/DodajSmutnyStan/:id">{ user ? <DodajSmutnyStan /> : <Register />}</Route>
   <Route path="/wykres">{user ? <Wykres/> : <Register />}</Route>
   <Route path="/Dodajvalidacja">{user ? <Dodajvalidacja/> : <Register />}</Route>
   <Route path="/decyzja">{user ? <Decyzja /> : <Register />}</Route>
   <Route path="/register">{user ? <Register /> : <Register />}</Route>
   <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
   <Route path="/write">{user ? <Write /> : <Register />}</Route>
   <Route path="/login"><Login /></Route>
  <Chart2 />
  <Chart3 />
    <Route path="/post/:postId">{user ? <SinglePost /> : <Register />}</Route>
     <Route exact path="*">{user ? <Error />: ''}</Route>
 {/*

   
    <Route exact path="/" component={Home}/>
    <Route exact path="/dodaj/:id" component={Dodaj}/>
    <Route  exact path="/wykres"> {user ? <Wykres/> : <Register />} </Route>
    <Route  exact path="/decyzja" component={Decyzja} />
    <Route  exact path="/register" component={Register} />
    <Route  exact path="/login" component={Login} />
    <Route  exact path="/home" component={Home} />
  <Route  exact path="*" component={Error} />*/}
   
 
   </Switch>
   </Router>
  
   
  )
}

export default App