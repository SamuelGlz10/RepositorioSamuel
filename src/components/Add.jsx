import React, {useState} from 'react'
import Boton from './Boton'
import { useNavigate } from 'react-router-dom';

const Add = ({add}) => {
  const navegate = useNavigate();
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const onsubmit = (e)=> {
      e.preventDefault();
      if(!name || !price) {alert("Ingresa un dato"); return};
      add({name:name, price:price});
      setName("");
      setPrice("");
      navegate("/items")
    };
  return (
    <form onSubmit={onsubmit}>
      <input onChange={(e)=> setName(e.target.value)} value={name} type="text" name="" id=""/>
      <input onChange={(e)=> setPrice(e.target.value)} value={price} type="text" name="" id=""/>
      <input type="submit" value={"add"}/>
    </form>
  )
}

export default Add