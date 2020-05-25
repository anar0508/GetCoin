import styled from "styled-components";
export const Article = styled.article`
  width: 90%;
  margin: 0 auto;
  display: flex;
  max-width: 920px;
  min-width: 600px;
  margin-top: 24px;
  justify-content: space-evenly;
  
`;
export const ImageContainer = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  min-width: 300px;
  align-content: space-between;
`;
export const Reverse = styled.img`
  width: 90%;
  display: block;
`;
export const Obverse = styled.img`
  width: 90%;
  display: block;
`;
export const DescriptionContainer = styled.div`
  width: 50%;
  background: rgba(196, 196, 196, 0.5);
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  min-width: 300px;
  align-content: space-between;
`;
export const P = styled.p`
  font-size: 14px;
  margin-top: 15px;
`;
