import React, { useState } from 'react';
import './App.css';
import html2canvas from 'html2canvas';


function App() {
  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState('');

  const onChangeLinea1 = function(evento) {
    setLinea1(evento.target.value)
  }
  const onChangeLinea2 = function(evento) {
    setLinea2(evento.target.value)
  }
  const onChangeImagen = function(evento) {
    setImagen(evento.target.value)
  }

  const onClickExportar = function(evento) {

    html2canvas(document.querySelector("#meme")).then(canvas => {

const link = document.createElement('a');
const img = canvas.toDataURL('image/jpeg');
link.download = 'imagen.jpg';
link.href = img;
link.click();

  });

  var enter = document.querySelector("button");
  
  }

  return (
    <div className="App">
      <div className="contenedor-inicial">
      <select onChange={onChangeImagen}>
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">History Channel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Phiolosoraptor</option>
        <option value="smart">Smart Guy</option>
      </select><br/>

      <input onChange={onChangeLinea1}type="text" placeholder='Linea 1' />
      <input onChange={onChangeLinea2 } type="text" placeholder='Linea 2' /> <br/><br/>
      <button onClick={onClickExportar}>Exportar</button>
      </div>
      <div className="meme" id="meme">
        {/* Comment 1 */}
        <span className="span1">{linea1}</span><br/>
        {/* Comment 2 */}
        <span className="span2">{linea2}</span><br/>
        <img src={"/img/" + imagen +".jpg"} alt="" />
      </div>
    </div>
  );
}

export default App;
