import React from 'react';
import styled from "styled-components";

export const Button = styled.button`
    height: 30px;
    width: 100px;
    background: palevioletred;
    border-radius: 3px;
    border: none;
    color: white;
    background: tomato;
    margin: 10px 10px 20px 10px;
`;

class Search extends React.Component {
  render(){
    return (
    <Button>hello</Button>

    )
  }
}
export default Search;