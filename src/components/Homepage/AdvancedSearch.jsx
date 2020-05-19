import React from "react";
import styled from "styled-components";
import SelectContainer from './SelectContainer';
import MultipleSelectContainer from './MultipleSelectContainer';
import "../../index.css";
const AdvancedSearchSection = styled.section`
width: 100%;
display: flex;
align-content: flex-start;
flex-direction: column;
flex-wrap: wrap;
height: 230px;
`;

function AdvancedSearch(props) {
  const { country, composition, quality, priceFrom, priceTo, yearFrom, yearTo, changeCountry,
    changeComposition, changeQuality, changePriceFrom, changePriceTo, changeYearFrom, changeYearTo, countries, compositions, qualities} = props;        
    return (
    <AdvancedSearchSection>
      <SelectContainer select= {country} changeSelect= {changeCountry} options={countries} labelText='Issuing country'/>
      <SelectContainer select= {composition} changeSelect= {changeComposition} options= {compositions} labelText='Metal'/>
      <SelectContainer select= {quality} changeSelect= {changeQuality} options= {qualities} labelText='Quality'/>
      <MultipleSelectContainer from= {priceFrom} to={priceTo} changeFrom= {changePriceFrom} 
      changeTo= {changePriceTo} labelText='Price'/>
      <MultipleSelectContainer from= {yearFrom} to={yearTo} changeFrom= {changeYearFrom} 
      changeTo= {changeYearTo} labelText='Year of issue'/>
    </AdvancedSearchSection>
  );
}
export default AdvancedSearch;