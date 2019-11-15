import React, { useState } from "react";
import stlyed from "styled-components";


export default function SearchForm({setSearchName}) {
  const handelChange = (event) =>{
    setSearchName(event.target.value);
  }


  return (
    <section className="search-form">
      <SearchBarBox>
     <SearchInput name="search" type="text" onChange={handelChange} placeholder="search by name"/>
     </SearchBarBox>
    </section>
  );
}

const SearchInput = stlyed.input`
  border: 1px solid rgb(75, 183, 226);
  border-radius:5px;
  box-shadow: 0px 5px 10px rgba(0,0,0,0.2);
  font-size:1rem;
  padding:0.5rem;
  margin:1rem 0;
  width:300px;
  height:40px;
`;

const SearchBarBox = stlyed.div`
  display:flex;
  justify-content:center;
  align-items:center;
  margin-bottom: 2rem;
`;
