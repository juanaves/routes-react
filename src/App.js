import React from 'react';
import './App.css';
// ejemplo de React Router para  trabajar con esta 
//librería la cual nos ayuda con el manejo de rutas en nuestra aplicación
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Users from './pages/Users'
import Blog from './pages/Blog'
import PageNotFound from './pages/PageNotFound'


{/*

Links y Routers
El componente <Route>es el componente más importante en React Router.
 Renderiza UI si la ubicación actual coincide con el path del Route. 
 Idealmente, un componente <Route> debería tener un prop llamado path y 
 si el nombre del path coincide con la ubicación actual, se renderiza.

El componente <Link>, por el otro lado, es usado para navegar entre páginas. 
Es comparable al elemento anchor de HTML. Sin embargo, usando anchor links resultaria 
en un refresh del browser, el cual no queremos. Por lo tanto, podemos usar <Link> para 
navegar a un URL particular y tener la vista re-renderizada sin refreshear el browser.

.*/ }
function App() {
  return (
    <Router>
      <div className="App">
        <nav>
           {/* Componentes Links son usados para linkear a otras vistas */}
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/hola-mundo">Hello</Link>
            </li>
            <li>
              <Link to="/blog">Aprende</Link>
            </li>
          </ul>
        </nav>
        {/*Para definir las diferentes rutas de nuestra aplicación, 
        podemos usar el componente Route*/}  
        {/* Componentes Route son rendereizados si el prop `path` coincide con el URL actual */}
        <Switch>
          <Route exact path="/" component={Home} />
          {/*esto lo que significa que si lo que esta en la URL del navegador es
          /about cargar el componente About */}
          {/*por supuesto antes teniamos que haber importado ese componente, 
          lo ves en la parte superior
          import About from './pages/About' */}

          {/*
          Diferencias entre render y component
          render --> hace que el componente se monte solo una vez y luego vuelva a renderizar 
          component --> por otro lado, reinstala el componente en cada visita (el componente se monta,
             se desmonta y, si lo visita, se vuelve a montar)
          */}
          <Route exact path="/about" component={About} />
          <Route exact path="/users" render={() => <Users name='John Serrano' />} />
          <Route exact path="/blog" component={Blog}></Route>
          {/* Redirect
          Con este componente podemos causar un redireccionamiento a una ruta diferente
           a la ruta actual reemplazando el location
           si vamos al navegador y en la barra de dirección escribimos lo siguiente
            http://localhost:3000/redirect vamos a ver que nos hace un redirect a la ruta /about. 
           No olvides hacer el import de Redirect.
          */}
          <Redirect from="/redirect" to="/about" />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
