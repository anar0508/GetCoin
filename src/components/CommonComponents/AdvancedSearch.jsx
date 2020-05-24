import React from "react";
import styled from "styled-components";
import SelectContainer from './SelectContainer';
import MultipleSelectContainer from './MultipleSelectContainer';
import "../../index.css";
const AdvancedSearchSection = styled.section`
width: 100%;
display: flex;
align-content: flex-start;
flex-direction: row;
flex-wrap: wrap;
width: 100%;
min-width: 650px;
margin-top: 30px;
`;

function AdvancedSearch(props) {
  const { country, composition, quality, priceFrom, priceTo, yearFrom, yearTo, changeCountry,
    changeComposition, changeQuality, changePriceFrom, changePriceTo, changeYearFrom, changeYearTo, countries, compositions, qualities} = props;        
    return (
    <AdvancedSearchSection>
      <SelectContainer value= {country} changeSelect= {changeCountry} options={countries} labelText='Issuing country'/>
      <MultipleSelectContainer from= {priceFrom} to={priceTo} changeFrom= {changePriceFrom} 
      changeTo= {changePriceTo} labelText='Price'/>
      <SelectContainer value= {composition} changeSelect= {changeComposition} options= {compositions} labelText='Metal'/>
      <MultipleSelectContainer from= {yearFrom} to={yearTo} changeFrom= {changeYearFrom} 
      changeTo= {changeYearTo} labelText='Year of issue'/>
      <SelectContainer value= {quality} changeSelect= {changeQuality} options= {qualities} labelText='Quality'/>


    </AdvancedSearchSection>
  );
}
export default AdvancedSearch;