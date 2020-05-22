import React, { useState, useEffect } from "react";
import InputComponent from "./InputComponent";
import SelectComponent from "./SelectComponent";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 96.5%;
  min-width: 500px;
  margin-top: 50px;
  margin-left: 3.5%;
  justify-content: space-evenly;
  align-items: flex-start;
  article {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    margin-top: 5px;
    margin-bottom: 5px;
    width: 100%;
    min-width: 500px;
  }
  button {
    display: block;
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

const Submit = styled.input`
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
  display: block;
`;

const File = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  input {
    cursor: pointer;
    padding: 120px 0 0 0;
    display: inline-block;
    color: black;
    text-align: center;
    background: white;
    width: 120px;
    height: 120px;
    border: 1px solid black;
    border-radius: 50%;
  }
  label {
    cursor: pointer;

    display: block;
  }
  span {
    position: absolute;
    left: 55px;
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
    padding: 3px;
    height: 118px;
    resize: none;
    overflow: hidden;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
`;

function EditComponent(props) {
  const {
    editCoin,
    coin,
    countries,
    compositions,
    qualities,
    isEditing,
  } = props;

  const [name, changeName] = useState(coin.coin_name);
  const [denomination, changeDenomination] = useState(
    `${coin.denomination} ${coin.den_currency}`
  );
  const [year, changeYear] = useState(coin.issuance_year);
  const [price, changePrice] = useState(coin.price);
  const [country, changeCountry] = useState(coin.country);
  const [сomposition, changeComposition] = useState(coin.сomposition);
  const [shortDescription, changeShortDescription] = useState(
    coin.short_description
  );
  const [description, changeDescription] = useState(coin.description);
  const [quality, changeQuality] = useState(coin.quality);
  const [weight, changeWeight] = useState(coin.weight);
  const [obverse, changeObverse] = useState(coin.obverse_coin);
  const [reverse, changeReverse] = useState(coin.reverse_coin);

  const submitCoin = (e) => {
    e.preventDefault();
    const files = e.target.form.reverseFile.files;
    let newCoin = {
      coin_name: name,
      quantity: coin.quantity,
      coin_type: coin.coin_type,
      denomination: denomination,
      year: year,
      price: price,
      country: country,
      сomposition: сomposition,
      shortDescription: shortDescription,
      description: description,
      quality: quality,
      weight: weight,
      obverse: obverse,
      reverse: reverse,
      quantity: coin.quantity
    };
    editCoin(coin.idCoin, newCoin);
  };

  const getObverseFileName = (e) => {
    let obName = e.target.files[0].name.slice(0, -4);
    changeObverse(obName);
  };

  const getReverseFileName = (e) => {
    let reName = e.target.files[0].name.slice(0, -4);
    changeReverse(reName);
  };

  return (
    <Form
      encType="multipart/form-data"
      action="http://localhost:8000/admin/upload"
      method="post"
      onSubmit={submitCoin}
    >
      <article>
        <Container>
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
        </Container>
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
          <File>
            <input
              type="file"
              name="obverseFile"
              onChange={(e) => {
                getObverseFileName(e);
              }}
            />
            <label> Upload obverse </label>
            <span>+</span>
          </File>
        </Container>
      </article>

      <article>
        <Container>
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
        <Container>
          <File>
            <input
              type="file"
              name="reverseFile"
              onChange={(e) => {
                getReverseFileName(e);
              }}
            />
            <label> Upload reverse </label>
            <span>+</span>
          </File>
        </Container>
      </article>

      <article>
        <Container>
          <SelectComponent
            labelText="Country"
            options={countries}
            value={country}
            handleChangeState={changeCountry}
          />
          <SelectComponent
            labelText="Metall"
            options={compositions}
            value={сomposition}
            handleChangeState={changeComposition}
          />
        </Container>
        <Container>
          <SelectComponent
            labelText="Quality of the coin"
            options={qualities}
            value={quality}
            handleChangeState={changeQuality}
          />
          <InputComponent
            labelText="Weight"
            type="text"
            value={weight}
            handleChange={changeWeight}
          />
        </Container>
        <Container>
          <Buttons>
            <Submit type="submit" value="Save" />
            <button
              onClick={() => {
                isEditing(false, {});
              }}
            >
              {" "}
              Cancel{" "}
            </button>
          </Buttons>
        </Container>
      </article>
    </Form>
  );
}

export default EditComponent;
