import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";


export default function CharacterCard({char}) {

  return (
    <Link to={`/char/${char.id}`} className="cardlink">
    <Card>
      <img src={char.image}/>
      <h2>{char.name}</h2>
      <p>Origin: {char.origin.name}</p>
      <p>Species: {char.species}</p>
      <p>Location: {char.location.name}</p>
    </Card>
    </Link>
  )
};

const Card = styled.div`
  display:flex;
  flex-direction:column;
  box-shadow: 0px 5px 10px rgba(0,0,0,0.2);
  border-radius:5px;
  margin:1rem;
  padding:0.5rem;
  width:280px;
`;
