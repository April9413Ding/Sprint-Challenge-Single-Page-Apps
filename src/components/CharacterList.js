import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import styled from "styled-components";
import { Pagination } from 'semantic-ui-react';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [CharList,setCharList] = useState([]);
  const [searchName,setSearchName] = useState("");
  const [totalPageNum,setTotalPageNum] = useState(1);
  const [currentPage,setCurrentPage] = useState(1)

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    axios.get(`https://rickandmortyapi.com/api/character/?name=${searchName}&page=${currentPage}`).then(res=>{
      console.log(res);
      setCharList(res.data.results);
      setTotalPageNum(res.data.info.pages);
    })
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [searchName,currentPage]);

  const handleChange = (event,pageInfo) =>{
    setCurrentPage(pageInfo.activePage)
  }

  return (
    
    <section className="character-list">
      <SearchForm setSearchName={setSearchName}/>
      <Pagination className="pagetabs" defaultActivePage={1} totalPages={totalPageNum} onPageChange={handleChange} activePage={currentPage}	/>
      <CardListBox>
      {CharList.map(char=>{
        return <CharacterCard key={char.id} char={char}/>
      })}
      </CardListBox>
    </section>
  );
}

const CardListBox = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:space-evenly;
  align-items:center;
`;
