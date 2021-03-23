import {  Route, Router } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { Segment } from "semantic-ui-react";
import Dashboard from "./admin/Dashboard";
import Sidebar from "./admin/Sidebar";
import history from "./History";
import StartPage from "./StartPage";
import KorisniciUslugi from "./users/KorisniciUslugi";
import Klasifikacii from "./users/Klasifikacii";
import MesechaObrabotka from "./users/MesechaObrabotka";
import GodisnaObrabotka from "./users/GodisnaObrabotka";
import Registracija from "./users/Registracija";

function App() {
  return (
    <div className="App">
      <Segment>
        <Router history={history}>
          <Route path="/" exact component={StartPage} />
          <Route path="/admin" component={Sidebar} />
          <Route path="/admin" exact component={Dashboard} />

          {/* Мени на екранот за СДР експертите */}

              <Route path="/korisnici-i-uslugi" exact component={KorisniciUslugi} />
              <Route path="/klasifikacii" exact component={Klasifikacii} />
              <Route path="/mesecha-obrabotka" exact component={MesechaObrabotka} />
              <Route path="/godisna-obrabotka" exact component={GodisnaObrabotka} />
              <Route path="/registracija" exact component={Registracija} />
        </Router>
      </Segment>
    </div>
  );
}

export default App;
