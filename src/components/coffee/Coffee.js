import React from "react";

// styling
import styled from "styled-components";


const CoffeeContainer = styled.div`
  display: block;
  width:  auto;
  margin: 45px 5px auto auto;
  text-align: center
`;

const Support = styled.img`
  cursor: pointer;
  max-width: 150px;
  max-height: 200px;
`


function Coffee() {


  const navigateCoffee = () => {
    window.location.replace('https://www.buymeacoffee.com/Dherington');
  };

  return (
    <CoffeeContainer>
     
        <p>If you find this project useful, please consider making a donation to keep it alive.</p>
        <Support src="Coffee/bmc-button.png" alt="support"  onClick={navigateCoffee}/>
    </CoffeeContainer>
  )
 }

export default Coffee