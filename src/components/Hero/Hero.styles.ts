import { Paper } from "@mui/material";
import styled from "styled-components";

export const Item = styled(Paper)``

export const Wrapper = styled.div`
 .content-wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 150px 150px;
    row-gap: 60px;
  }

  .grid-container{
    display:flex;
    justify-content: center;
    transition: 0.2s ease-in-out;
    &:hover{
      cursor: pointer;
      transform: scale(1.01);
    }
  }

  .copy-container {
    max-width:700px;
    background-color: inherit !important;
    .ctaContainer{
      display: flex;
      flex-wrap: wrap;
      row-gap: 20px;
    }
  }  
  .main-img{
    width: 570px;
    height: 450px;
    object-fit: cover;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    margin-bottom: -4px;
    @media (max-width: 768px) {
          height: 350px;
          width: 350px;
        }
  }
  .title {
    position: relative;
    color: #ffffff;
    font-weight: 800;
    font-size: 54px;
    color: #ffed00;
    line-height: 4rem;
    @media (max-width: 768px) {
      font-size: 44px;
      line-height: 3rem;
        }
  }
  .card-container{
    display: flex;
    flex-direction: column;
  }
  .description {
    font-size: 20px;
    color: #fff;
    padding: 20px 0px;
    font-weight: 600;
  }
  .explore-btn {
    position: relative;
    border: none;
    padding: 15px 60px;
    margin-right: 20px;
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 600;
    border-radius: .7rem;
    cursor: pointer;
    background-color: #ffed00;
  }
  .create-btn {
    position: relative;
    padding: 15px 60px;
    margin-right: 20px;
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 600;
    border-radius:.7rem;
    background-color: #231f20;
    color:#ffed00 ;
    border: 2px solid #ffed00 ;
    cursor: pointer;
  }
  .author {
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .infoContainer {
    display: flex;
    flex-direction: row;
    padding: 1rem;
    color: #ffffff;
    align-items: center;
    height: 5rem;
    background-color: #303339;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  } 
`;
