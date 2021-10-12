//Importamos este componente para poder manejar el router
import { Route, Switch } from 'react-router-dom';
// importamos useEffect además de useState
import { useEffect, useState } from 'react';
// Importamos el servicio del local storage
import ls from '../services/local-storage';
// Importamos las hojas de estilo
import '../styles/core/Reset.scss';
import '../styles/core/Variables.scss';
import '../styles/App.scss';




function App() {
  return (
    <div className="App">
      <nav className="nav">
        <button className="nav__button">Fridge</button>
        <h1 className="nav__button">Lista de la compra</h1>
        <button className="nav__button">Planning</button>
      </nav>
      <main className="main">
        <section className="section__shopping">
          <ul className="shopping">
            <li className="shopping__element">
              Elemento lista de la compra
            </li>
          </ul>
        </section>
        <section className="section__pantry">
          <h2 className="section__title">Tu despensa</h2>
          <div>
            <ul className="pantry__has">
              <li className="patry__has--element">
                <p>Alimento</p>
                <span>Fecha de compra</span>
                <button>Carro</button>
                <button>Eliminar</button>
              </li>
            </ul>
            <form className="pantry__form">
              <input className="pantry__form--input" type="text" placeholder="Ingrediente" />
              <input className="pantry__form--input" type="number" placeholder="Cantidad" />
              <select className="pantry__form--input" name="unit" id="unit">
                <option className="pantry__form--input" value="u">unidad</option>
                <option className="pantry__form--input" value="kg">Kilogramos</option>
                <option className="pantry__form--input" value="l">Litros</option>
              </select>
              <input className="pantry__form--input" type="date" name="date" id="date" placeholder="fecha de compra" />
              <input className="pantry__form--input" type="submit" value="Añadir" />
            </form>
            <ul className="pantry__usually">
              <li className="pantry__usually--element">
                Ingredientes
              </li>
            </ul>
          </div>
          <h2 className="section__title">Añade un ingrediente</h2>
          <h2 className="section__title">Ingredientes Habituales</h2>
        </section>
        <section className="section__planning">
          <h2 className="section__title">Planning de comidas</h2>
          <ol className="week">
            <li className="week__day">
              <p>Lunes</p>
              <div>Comida</div>
              <div>Cena</div>
            </li>
            <li className="week__day">
              <p>Martes</p>
              <div>Comida</div>
              <div>Cena</div>
            </li>
            <li className="week__day">
              <p>Miércoles</p>
              <div>Comida</div>
              <div>Cena</div>
            </li>
            <li className="week__day">
              <p>Jueves</p>
              <div>Comida</div>
              <div>Cena</div>
            </li>
            <li className="week__day">
              <p>Viernes</p>
              <div>Comida</div>
              <div>Cena</div>
            </li>
            <li className="week__day">
              <p>Sábado</p>
              <div>Comida</div>
              <div>Cena</div>
            </li>
            <li className="week__day">
              <p>Domingo</p>
              <div>Comida</div>
              <div>Cena</div>
            </li>
          </ol>
          <h2 className="section__title">Recetas Sugeridas</h2>
          <ul>
            <li>
              Receta
            </li>
          </ul>
          <h2 className="section__title">Recetas favoritas</h2>
          <ul>
            <li>
              Receta
            </li>
          </ul>
          <h2 className="section__title">Recetas</h2>
          <ul>
            <li>
              Receta
            </li>
          </ul>
        </section>
      </main>

      {/* <Switch>
        <Route path=''>
          //Contenido del componente correspondiente
        </Route>
        // Opción de ruta por si no encuentra ninguna de las opciones anteriores, sería como poner el error 404 de hot found
        <Route>
          <section>
            Oh! Página equivocada
          </section>
        </Route>
      </Switch> */}
    </div>
  );
}

export default App;
