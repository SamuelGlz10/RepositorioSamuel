import './App.css';
import { useState } from "react";
import Header from './components/Header';
import Boton from './components/Boton';
import Lista from './components/Lista';
import Add from './components/Add';

function App() {
  const initialItems = [
    { id: 1, name: "item1", price: 1 },
    { id: 2, name: "item2", price: 2 },
    { id: 3, name: "item3", price: 3 },
  ];

  const [count, setCount] = useState(0);
  const [items, setItems] = useState(initialItems);

  const sum = () => {
    setCount(count + 1);
  };

  const resta = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const add = (item) => {
    item.id = items.length + 1;
    setItems([...items, item]);
  };

  const del = (id)=> {
    setItems(items.filter((item)=> item.id !== id));

  };

  const nombre = "R tilin jugadorx de Fn profesional";
  return (
    <div>
      <Header />
      {count}
      <Boton name={"suma"} click={sum} />
      <Boton name={"resta"} click={resta} />
      <Boton name={"reset"} click={reset} />
      <Boton name={"mensaje"} click={() => alert(nombre)} />
      <Add add={add} />
      <Lista items={items} ondelete={del} />
    </div>
  );
}

export default App;