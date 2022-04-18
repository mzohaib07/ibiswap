import { Paper } from "@mui/material";
import styled from "styled-components";

export const Item = styled(Paper)`
  display: block;
`;
export const CardStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 40px;
  margin-bottom: 150px;
  .grid-section{
    display: flex;
    justify-content: center;
    column-gap: 40px;
    row-gap: 40px;
  }
  .title-section {
    background-color: inherit;
    .title {
      color: #ffffff;
      font-weight: 800;
      font-size: 22px;
      color: #fff;
      line-height: 4rem;
      display: flex;
      justify-content: center;
      row-gap: 100px;
    }
  }
  .card-section {
    display: flex;
    justify-content: space-between;
    transition: 0.3s ease-in-out;
    background-color: #202225; 
    .card {
      border-radius: 10px;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      background-color: #202225;
      img {
        border-radius: 10px;
        height: 650px;
        width: 480px;
        @media (max-width: 768px) {
          height: 350px;
          width: 300px;
        }
      }
    }
    &:hover{
        cursor: pointer;
        transform: scale(1.01);
    }
  }
`;
