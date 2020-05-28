import React from "react";
import { bindActionCreators } from "redux";
import AdvancedSearch from "./AdvancedSearch";
import { connect } from "react-redux";
import {
  changeCountry,
  changeComposition,
  changeQuality,
  changePriceFrom,
  changePriceTo,
  changeYearFrom,
  changeYearTo,
} from "../../store/homepage/adSearch/actions.js";

function AdvancedSearchContainer(props) {
  const {
    country,
    composition,
    quality,
    priceFrom,
    priceTo,
    yearFrom,
    yearTo,
    countryChange,
    compositionChange,
    qualityChange,
    priceFromChange,
    priceToChange,
    yearFromChange,
    yearToChange,
    adSearchInfo,
  } = props;
  return (
    <AdvancedSearch
      country={country}
      composition={composition}
      quality={quality}
      priceFrom={priceFrom}
      priceTo={priceTo}
      yearFrom={yearFrom}
      yearTo={yearTo}
      changeCountry={countryChange}
      changeComposition={compositionChange}
      changeQuality={qualityChange}
      changePriceFrom={priceFromChange}
      changePriceTo={priceToChange}
      changeYearFrom={yearFromChange}
      changeYearTo={yearToChange}
      countries={adSearchInfo.countriesList}
      compositions={adSearchInfo.compositionsList}
      qualities={adSearchInfo.qualitiesList}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    country: state.adSearch.country,
    composition: state.adSearch.composition,
    quality: state.adSearch.quality,
    priceFrom: state.adSearch.priceFrom,
    priceTo: state.adSearch.priceTo,
    yearFrom: state.adSearch.yearFrom,
    yearTo: state.adSearch.yearTo,
    adSearchInfo: state.homepage.adSearchInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    countryChange: bindActionCreators(changeCountry, dispatch),
    compositionChange: bindActionCreators(changeComposition, dispatch),
    qualityChange: bindActionCreators(changeQuality, dispatch),
    priceFromChange: bindActionCreators(changePriceFrom, dispatch),
    priceToChange: bindActionCreators(changePriceTo, dispatch),
    yearFromChange: bindActionCreators(changeYearFrom, dispatch),
    yearToChange: bindActionCreators(changeYearTo, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdvancedSearchContainer);
