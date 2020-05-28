import styled from "styled-components";
export const ColumnContainer = styled.section`
  display: flex;
  flex-direction: column;
  width:25%;
  min-width: 283px;
  img{
    width: 214px;
    &:hover{
      transform: scale(1.1);
      transition: 0.2s
  }
  }
`;
export const H3 = styled.h3`
  font-size: 25px;
  
&:hover{
    color: #833ae0;
  }
  
`;
export const P = styled.p`
  font-weight: 300;
  font-size: 14px;
  margin: 10px 0;
  &:hover{font-weight: 600;}
`;
