import React,{useState,useEffect} from "react";
import axios from "axios";

export default function CharacterPage(props) {
  const[char,setChar] = useState([]);

  useEffect(()=>{
    axios.get(`https://rickandmortyapi.com/api/character/${props.match.params.id}`).then(res=>{
      console.log(res);
      setChar(res.data);
    })
  },[props.match.params.id])
  return (
    <div>
      <img src={char.image}/>
      <h2>Name: {char.name}</h2>
      <p>Gender: {char.gender}</p>
      <p>Status: {char.status}</p>
      <p>Origin: {char.origin && char.origin.name}</p>
      <p>Species: {char.species}</p>
      <p>Location: {char.location && char.location.name}</p>
    </div>
  )
};