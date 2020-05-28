import React from "react";
import SelectContainer from "./SelectContainer";
import MultipleSelectContainer from "./MultipleSelectContainer";
import "../../index.css";
import { AdvancedSearchSection } from "./Styles/StyleAdvancedSearch";
function AdvancedSearch(props) {
  const {
    country,
    composition,
    quality,
    priceFrom,
    priceTo,
    yearFrom,
    yearTo,
    changeCountry,
    changeComposition,
    changeQuality,
    changePriceFrom,
    changePriceTo,
    changeYearFrom,
    changeYearTo,
    countries,
    compositions,
    qualities,
  } = props;
  return (
    <AdvancedSearchSection>
      <SelectContainer
        value={country}
        changeSelect={changeCountry}
        options={countries}
        labelText="Issuing country"
      />
      <MultipleSelectContainer
        from={priceFrom}
        to={priceTo}
        changeFrom={changePriceFrom}
        changeTo={changePriceTo}
        labelText="Price"
      />
      <SelectContainer
        value={composition}
        changeSelect={changeComposition}
        options={compositions}
        labelText="Metal"
      />
      <MultipleSelectContainer
        from={yearFrom}
        to={yearTo}
        changeFrom={changeYearFrom}
        changeTo={changeYearTo}
        labelText="Year of issue"
      />
      <SelectContainer
        value={quality}
        changeSelect={changeQuality}
        options={qualities}
        labelText="Quality"
      />
    </AdvancedSearchSection>
  );
}
export default AdvancedSearch;
