import styled from "styled-components";
export const PaginatorMain = styled.div`
position: relative;
`;
export const Page = styled.section`

  display: flex;
  flex-wrap: wrap;
  width: 80%;
  min-width: 830px;
  justify-content: space-between;
`;
export const SelectContainer = styled.div`
position: absolute;
right: 50px;
top: -5px;
label{
  margin-right: 5px;
}
select{
  border: 1px solid black;
}
`;