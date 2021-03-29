import {  Route, Router } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import Dashboard from "./admin/Dashboard";
import AdminMenu from "./admin/menu/AdminMenu";
import history from "./History";
import StartPage from "./StartPage";
import KorisniciUslugi from "./users/KorisniciUslugi";
import Klasifikacii from "./users/Klasifikacii";
import MesechaObrabotka from "./users/MesechaObrabotka";
import GodisnaObrabotka from "./users/GodisnaObrabotka";
import Registracija from "./users/Registracija";
import CentralenDepozitar from "./users/vnes-i-obrabotna-na-administrativni-podatoci/CentralenDepozitar";
import NarodnaBanka from "./users/vnes-i-obrabotna-na-administrativni-podatoci/NarodnaBanka";
import FondZaPenzisko from "./users/vnes-i-obrabotna-na-administrativni-podatoci/FondZaPenzisko";
import Spisok from "./users/vnes-i-obrabotna-na-administrativni-podatoci/Spisok";
import StranskiDirektori from "./users/vnes-i-obrabotna-na-administrativni-podatoci/StranskiDirektori";

function App() {
  return (
    <div className="App">
        <Router history={history}>
          <Route path="/" exact component={StartPage} />
          {/* <Route path="/admin" component={AdminSidebar} />
          <Route path="/admin" component={AdminTopMenu} /> */}
          <Route path="/admin" component={AdminMenu}/>
          <Route path="/admin" exact component={Dashboard} />

          {/* Мени на екранот за СДР експертите */}
            <div className="admin-sidebar">
              <Route path="/admin/korisnici-i-uslugi" exact component={KorisniciUslugi} />
              <Route path="/admin/klasifikacii" exact component={Klasifikacii} />
              <Route path="/admin/mesecha-obrabotka" exact component={MesechaObrabotka} />
              <Route path="/admin/godisna-obrabotka" exact component={GodisnaObrabotka} />
              <Route path="/admin/registracija" exact component={Registracija} />
              <Route path="/admin/centralen-depozitar" exact component={CentralenDepozitar} />
              <Route path="/admin/narodna-banka" exact component={NarodnaBanka} />
              <Route path="/admin/fond-za-penzisko" exact component={FondZaPenzisko} />
              <Route path="/admin/spisok" exact component={Spisok} />
              <Route path="/admin/stranski-direktori" exact component={StranskiDirektori} />
              <Route path="/admin/fond-za-penzisko" exact component={StranskiDirektori} />

            </div>
        </Router>
    </div>
  );
}

export default App;
