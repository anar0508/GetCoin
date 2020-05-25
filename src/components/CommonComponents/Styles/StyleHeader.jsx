import styled from "styled-components";
export const Menu = styled.nav`
  display: flex;
  width: 93%;
  margin: 0 auto;
  align-items: baseline;
  padding: 30px 0 15px 0;
`;
export const PageContainer = styled.h1`
width: 64%;
font-size: 50px;
font-weight: 300;
text-align:left;
min-width: 180px;

p{
  font-weight: 300;
  font-size: 14px;
  margin: 5px 0;
  &:hover{
    font-weight: 600;
  }
}
a{
  color: #833ae0;
}
img{
  width:5%; 
  min-width: 40px;
  &:hover{
    transition: 0.2s;
    perspective: 1000px;
    transform: rotateY(180deg) ;

  }
}
}
`;
export const LinkContainer = styled.h2`
  width: 12%;
  text-align: right;
  font-size: 25px;
  font-weight: 300;
  padding-left: 5px;
  a {
    &:hover {
      color: #833ae0;
      cursor: pointer;
      font-size: 27px;
      transition: font-size 10ms;
    }
  }
`;
