import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
var ToDo = [];
for (var i = 0; i < 20; i++) {
  ToDo.push({
    id: i,
    title: "Title " + i.toString(),
    description: "Description " + i.toString()
  })
}

function ToDoList({ Lista }) {
  const [elenco, setElenco] = useState(Lista);
  const [cont, setCont] = useState(0);


  useEffect(() => {
    console.log("modificato")
    console.log(elenco)

  }, [elenco])

  function agg() {


    var i = elenco.length;
    var arrayy = elenco
    arrayy.push({
      id: i,
      title: "Title " + i.toString(),
      description: "Description " + i.toString()
    })
    setCont(cont + 1)
    return arrayy
  }

  return (
    <>
      <div>
        <div id="LegCss">
          <h3>Added Rows:{cont}</h3>
          <button onClick={e => setElenco(agg())}>ADD ROW</button>
        </div>
        <ul className='ulGrid'>
          {
            elenco.map(el => (
              <div key={el.id.toString()} >
                <h4>{el.title}</h4>
                <p>{el.description}</p>
              </div>
            ))

          }
        </ul>

      </div>
    </>
  )

}
var el = <ToDoList Lista={ToDo} />;

ReactDOM.render(el,
  document.getElementById('root')
);


serviceWorker.unregister();