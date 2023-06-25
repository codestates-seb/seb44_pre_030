import React from 'react';
import { styled } from 'styled-components';
import colorpalette from '../../styles/colorpalette';

const Pagination = ({total,limit,page,setPage}) => {
  const numPages = Math.ceil(total/limit);
  //전체 갯수 / 10 => 15 / 10 => 2page
  console.log(numPages)
  return (
      <PaginationContainer>
          <Button onClick={()=>setPage(page-1)} disabled={page === 1}>&lt;</Button>
          {Array(numPages)
            .fill()
            .map((_,i)=>(
              <Button
                key={i+1}
                onClick={()=>setPage(i+1)}
                aria-current={page===i+1?"page":null}
                >
                  {i+1}
              </Button>
            ))}
            <Button onClick={()=>setPage(page+1)} disabled={page === numPages}>&gt;</Button>
      </PaginationContainer>
  );
};
const PaginationContainer = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap:4px;
  margin:20px;
`
const Button = styled.button`
  width:25px;
  height: 29px;
  background-color: ${colorpalette.signatureWhite};
  border:none;
  border:1px solid ${colorpalette.headerSearchBorderColor};
  border-radius: ${colorpalette.headerBorderRadius};
  cursor: pointer;

  &:hover{
    background-color: ${colorpalette.paginationHoverBgColor};
    border-color:${colorpalette.paginationHoverBorderColor};
  }
  &[disabled]{
    cursor:revert;
  }
  &[aria-current]{
    background-color: ${colorpalette.signatureColor};
    color:${colorpalette.signatureWhite};
    font-weight: bold;
    border:none;
    cursor:revert;    
  }
`
export default Pagination;