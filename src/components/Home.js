import React from "react";
import styled from "styled-components";


const HomeText = styled.div`
  background-image: url('https://images.unsplash.com/photo-1589906493606-a6ca2a06078b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60');
  height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  display:flex;
  align-items:center;
  justify-content: center;
  color: white;
  font-size: 2rem;
`;

export default function Home(props) {
  return (
    <HomeText>
      <h2>Meow Eats</h2>
    </HomeText>
  );
}