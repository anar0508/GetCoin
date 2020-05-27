// import React from "react";
// import { Link } from "react-router-dom";
// import "../../index.css";
// import styled from 'styled-components';

// function Coin(props) {
//   const { coin } = props;

//   let paragraphs = coin.description.split("/p");
//   paragraphs = paragraphs.map((line) => {
//     return <P key = {coin.idCoin}>{line}</P>;
//   });

//   return (
//     <Article>
//       <ImageContainer>
//         <Reverse
//           src={`http://localhost:8000/image?id=${coin.idCoin}&side=reverse`}
//           alt="Coin"
//         />
//         <Obverse
//           src={`http://localhost:8000/image?id=${coin.idCoin}&side=obverse`}
//           alt="Coin"
//         />
//       </ImageContainer>
//       <DescriptionContainer>
//         <h2>{coin.coin_name}</h2>
//         {paragraphs}

//         <table>
//           <tbody>
//           <tr>
//             <td>Issuing country</td>
//             <td>{coin.country}</td>
//           </tr>

//           <tr>
//             <td>Composition </td>
//             <td>{coin.сomposition}</td>
//           </tr>

//           <tr>
//             <td>Quality</td>
//             <td>{coin.quality}</td>
//           </tr>

//           <tr>
//             <td>Denomination</td>
//             <td>{`${coin.denomination} ${coin.den_currency} `}</td>
//           </tr>

//           <tr>
//             <td>Year</td>
//             <td>{coin.issuance_year}</td>
//           </tr>

//           <tr>
//             <td>Weight</td>
//             <td>{coin.weight}</td>
//           </tr>

//           <tr>
//             <td>Price</td>
//             <td>{`${coin.price} ${coin.price_currency} `}</td>
//           </tr>
//           </tbody>
//         </table>

//         <P style={{color: coin.quantity>0? 'green': 'red'}}> Available: {coin.quantity} </P>

//         <Link to ={'/coins'}> {'<--Back to list'} </Link>
        
//       </DescriptionContainer>
//     </Article>
//   );
// }
// export default Coin;
