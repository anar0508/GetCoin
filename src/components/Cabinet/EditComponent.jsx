import React, { useState, useEffect } from "react";
import InputComponent from "./InputComponent";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: row;
  width: 96.5%;
  min-width: 500px;
  margin-left: 3.5%;
  justify-content: space-evenly;
  align-items: flex-start;
  article {
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    margin-bottom: 5px;
    width: 40%;
    min-width: 300px;

  }
  button {
    width: 100px;
    outline: none;
    border: none;
    padding: 9px;
    margin-left: 20px;
    background: #833ae0;
    color: white;
    text-align: center;
    vertical-align: middle;
    font-size: 14px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 300px;
  margin-bottom: 20px;
  label {
    font-size: 14px;
  }
  textarea {
    min-width: 250px;
    width: 60%;
    padding: 0 5px;
    outline: none;
    border: 1px solid black;
    text-align: left;
    font-size: 14px;
    height: 121px;
    resize: none
  }
`;

function EditComponent(props) {
  const { editCoin, coin } = props;
  useEffect(() => {}, [coin]);
  const [name, changeName] = useState(coin.coin_name);
  const [denomination, changeDenomination] = useState(`${coin.denomination} ${coin.den_currency}`);
  const [year, changeYear] = useState(coin.issuance_year);
  const [price, changePrice] = useState(coin.price);
  const [country, changeCountry] = useState(coin.country);
  const [сomposition, changeComposition] = useState(coin.сomposition);
  const [shortDescription, changeShortDescription] = useState(coin.short_description);
  const [description, changeDescription] = useState(coin.description);
  const [quality, changeQuality] = useState(coin.quality);
  const [weight, changeWeight] = useState(coin.weight);

  return (
    <Form>
      <article >
        <InputComponent
          labelText="Coin name"
          type="text"
          value={name}
          handleChange={changeName}
        />
        <InputComponent
          labelText="Face value"
          type="text"
          value={denomination}
          handleChange={changeDenomination}
        />
        <InputComponent
          labelText="Year of issue"
          type="number"
          value={year}
          handleChange={changeYear}
        />
        <InputComponent
          labelText="Price"
          type="number"
          value={price}
          handleChange={changePrice}
        />
        <InputComponent
          labelText="Country"
          type="select"
          value={country}
          handleChange={changeCountry}
        />
        <InputComponent
          labelText="Metall"
          type="select"
          value={сomposition}
          handleChange={changeComposition}
        />
      </article>

      <article >
        <Container>
  
          <label> Short description </label>
          <textarea
            cols="30"
            rows="10"
            value={shortDescription}
            onChange={(e) => changeShortDescription(e.target.value)}
          />
        </Container>

        <Container>
          <label> Long description </label>
          <textarea
            cols="30"
            rows="10"
            value={description}
            onChange={(e) => changeDescription(e.target.value)}
          />
        </Container>

        <InputComponent
          labelText="Quality of the coin"
          type="select"
          value={quality}
          handleChange={changeQuality}
        />
        <InputComponent
          labelText="Weight"
          type="text"
          value={weight}
          handleChange={changeWeight}
        />
      </article>

      <article >
      <form 
      id='uploadForm' 
      action='http://localhost:8000/upload' 
      method='post' 
      encType="multipart/form-data">
        <input type="file" name="sampleFile" />
        <input type='submit' value='Upload obverse!' />
    </form>    
     
    <form 
      id='uploadForm' 
      action='http://localhost:8000/upload' 
      method='post' 
      encType="multipart/form-data">
        <input type="file" name="sampleFile" />
        <input type='submit' value='Upload reverse' />
    </form>     
        <button> Save </button>
        <button> Cansel </button>
      </article>
    </Form>
  );
}

export default EditComponent;
