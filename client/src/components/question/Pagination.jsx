import React,{useState,useEffect} from 'react';
import { styled } from 'styled-components';

const Pagination = ({totalPage,list,page,setPage}) => {
  //총 페이지 갯수에 따라 Pagination 갯수 정하기limit단위로 페이지 리스트 넘기기
  const [currentPageArray,setCurrentPageArray] = useState([]);
  const [totalPageArray,setTotalPageArray] = useState([]);


  useEffect(()=>{

  })
  return (
      <PaginationContainer>
          
      </PaginationContainer>
  );
  };
  const PaginationContainer = styled.div`
  display: flex;
`
export default Pagination;