import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  HashRouter,
  Link,
} from "react-router-dom";
import Acerca from "../pages/Acerca";
import Contacto from "../pages/Contacto";
import Dashboard from "../pages/Dashboard";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Productos from "../pages/Productos";
import ReactTopics from "../pages/ReactTopics";
import Usuario from "../pages/Usuario";
import MenuConceptos from "./MenuConceptos";
import PrivateRoute from "./PrivateRoute";

const ConceptosBasicos = () => {
  return (
    <div>
      <h2>Hash Router</h2>
      <HashRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/acerca">Acerca</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/acerca" component={Acerca} />
          <Route exact path="/contacto" component={Contacto} />
          <Route path="*" component={Error404} />
        </Switch>
      </HashRouter>
      <hr />
      <h2>Coneptos basicos</h2>
      <Router>
        <MenuConceptos />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/acerca" component={Acerca} />
          <Route exact path="/contacto" component={Contacto} />
          {/* Usar parametros en rutas */}
          <Route exact path="/usuario/:username" component={Usuario} />
          {/* Parametros de consulta */}
          <Route exact path="/productos/" component={Productos} />

          {/* Redirecciones */}
          <Route exact path="/about">
            <Redirect to="/acerca"></Redirect>
          </Route>
          <Route exact path="/contact">
            <Redirect to="/contacto"></Redirect>
          </Route>
          <Route path="/react" component={ReactTopics} />

          {/* Rutas privadas */}
          <Route exact path="/login" component={Login} />
          {/* <Route exact path="/dashboard" component={Dashboard} /> */}
          <PrivateRoute exact path="/dashboard" component={Dashboard} />

          <Route path="*" component={Error404} />
        </Switch>
      </Router>
    </div>
  );
};

// const ConceptosBasicos = () => {
//   return (
//     <div>
//       <h2>Coneptos basicos</h2>
//       <Router>
//         <Switch>
//           {/* Agregar exact para que la ruta especificada sea igual a la que digitemos y entra sin problem */}
//           <Route exact path="/">
//             <h3>Home</h3>
//           </Route>
//           <Route exact path="/acerca" component={Acerca} />
//           <Route exact path="/contacto" children={<Contacto />} />

//           {/* Primer forma para llamar un componente dentro de una ruta */}
//           {/* <Route exact path="/contacto" component={Contacto} /> */}
//         </Switch>
//       </Router>
//     </div>
//   );
// };

export default ConceptosBasicos;
