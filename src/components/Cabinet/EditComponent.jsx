import React, { useState} from "react";
import InputComponent from "./InputComponent";
import SelectComponent from "./SelectComponent";
import { Form, Container, File, Buttons, Submit } from "./Styles/StylesEditComponent";

function EditComponent(props) {
  const {
    editCoin,
    coin,
    countries,
    compositions,
    qualities,
    cancelEdit,
    addCoin
  } = props;
  let typeNum;

  if (coin.coin_type==='Commemorative'){
    typeNum= 3;
      } else if (coin.coin_type==='Exclusive') {
        typeNum= 2;
      } else {typeNum= 1;}

  const [name, changeName] = useState(coin.coin_name);
  const [denomination, changeDenomination] = useState(
    coin.denomination ? `${coin.denomination} ${coin.den_currency}` : ""
  );
  const [year, changeYear] = useState(coin.issuance_year);
  const [price, changePrice] = useState(coin.price);
  const [country, changeCountry] = useState(coin.country);
  const [сomposition, changeComposition] = useState(coin.сomposition);
  const [shortDescription, changeShortDescription] = useState(
    coin.short_description
  );
  const [description, changeDescription] = useState(coin.description);
  const [type, changeType] = useState(typeNum);
  const [quality, changeQuality] = useState(coin.quality);
  const [weight, changeWeight] = useState(coin.weight);
  const [obverse, changeObverse] = useState(coin.obverse_coin);
  const [reverse, changeReverse] = useState(coin.reverse_coin);

  const submitCoin = (e) => {
    e.preventDefault();
    const formData = new FormData();

    if(!(!e.target.obverseFile.files[0])){
      formData.append('obverseFile', e.target.obverseFile.files[0]);
    }
     if(!(!e.target.reverseFile.files[0])){
      formData.append('reverseFile', e.target.reverseFile.files[0]);
     }
    
    let newCoin = {
      coin_name: name,
      quantity: coin.quantity? coin.quantity : 10,
      coin_type: type,
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
      popularity: coin.popularity? coin.popularity: 0,
      formData: formData
    };
    
    coin.idCoin ? editCoin(coin.idCoin, newCoin) : addCoin(newCoin);

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
    <Form onSubmit={submitCoin} >
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
          <SelectComponent
            labelText="Coin type"
            options={[{type:1}, {type:2}, {type:3}]}
            value={type}
            handleChangeState={changeType}
          />
          <Buttons>
            <Submit type="submit" value="Save" />
            <button onClick={() => {cancelEdit(false, {});}}>
              Cancel
            </button>
          </Buttons>
        </Container>
      </article>
    </Form>
  );
}

export default EditComponent;
