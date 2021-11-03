import {
  Link,
  Switch,
  Route,
  useParams,
  useRouteMatch,
} from "react-router-dom";

const Topic = () => {
  let { topic } = useParams();

  return (
    <div>
      <h4>{topic}</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
        deleniti tempore? Veritatis id, culpa quaerat, rem ab dignissimos quia
        nostrum facilis quae deleniti temporibus qui nemo. Laborum consequatur
        error iste.
      </p>
    </div>
  );
};

const ReactTopics = () => {
  //El path nos facilita constriur rutas relativas <Route>
  //La url nos permite constriur enlaces relativos <Link> o <NavLink<
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h3>Temas de React</h3>
      <ul>
        <li>
          <Link to={`${url}/jsx`}>JSX</Link>
        </li>
        <li>
          <Link to={`${url}/props`}>Props</Link>
        </li>
        <li>
          <Link to={`${url}/estado`}>Estado</Link>
        </li>
        <li>
          <Link to={`${url}/componente`}>Componente</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={path}>
          <h4>Elije un tema</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint rerum
            deleniti ducimus id molestiae iure labore odio repellat ipsa fugit
            distinctio nisi, delectus blanditiis facere accusantium aut dicta
            culpa quis.
          </p>
        </Route>
        <Route path={`${path}/:topic`} component={Topic} />
      </Switch>
    </div>
  );
};

export default ReactTopics;
