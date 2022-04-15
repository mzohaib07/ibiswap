import { Paper } from "@mui/material";
import styled from "styled-components";

export const Item = styled(Paper)`
  /* display: block; */
`;

export const FooterStyles = styled.div`
  background-color: #04111d; 
  .main-container {
    display: flex;
    justify-content: center;
    column-gap: 200px;
    .upper-footer {
      display: flex;
      flex-direction: row;
    .left-grid {
      background-color: inherit;
      padding: 100px 0px 86px 0px;
      color: white;
      span {
        font-weight: 800;
        font-size: 22px;
        color: #ffed00;
      }
      .left-grid-disp {
        margin-top: 20px;
        width: 680px;
        font-size: 17px;
        font-weight: 400;
      }
      .left-grid-searchbar {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-top: 30px;
        row-gap: 40px;
        column-gap: 20px;
        button {
          border: none;
          outline: none;
          padding: 12px 45px;
          border-radius: 15px;
          align-self: end;
          margin-top: 8px;
          background-color: #ffed00;
          color: black;
          font-size: 16px;
          font-weight: 800;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
    .right-grid {
      padding: 100px 0px 86px 0px;
      background-color: #04111d;
      color: white;
      span {
        font-weight: 800;
        font-size: 22px;
        color: #ffed00;
      }
      .right-grid-icons {
        margin-top: 20px;
        display: flex;
        flex-direction: row;
        column-gap: 10px;
        .icon {
          padding: 15px;
          background-color: #353840;
          border-radius: 10px;
          transition: 0.2s ease-in-out;
          &:hover {
            background-color: #ffed00;
            cursor: pointer;
            color: black;
          }
        }
      }
    }
  }
}
  .lower-footer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 80px 0px 30px 0px;
    column-gap: 90px;
    row-gap: 70px;

    .first-col {
        display: flex;
        flex-direction: column;
        justify-content: center;
        row-gap: 10px;
        width: 350px;
        background-color: inherit;
        color: white;
        .iner-content{
          display: flex;
          flex-direction: column;
        .ibiswap {
          font-weight: 600;
          font-size: 20px;
          cursor: pointer;
        }
        .desp {
          letter-spacing: 0.1rem;
        }
      }
      }
      .title {
        font-weight: 600;
        color: #ffed00;
      }
      ul {
        padding-left: 0px;
      }
      li {
        list-style-type: none;
        padding: 8px 0px 8px;
        font-size: 14px;
        transition: 0.1s ease;
        &:hover {
          transform: scale(1.01);
          cursor: pointer;
        }
      }
      .scnd-col {
        width: 200px;
        display: flex;
        flex-direction: column;
        background-color: inherit;
        color: white;
      }
      .third-col{
        width: 200px;
        display: flex;
        flex-direction: column;
        background-color: inherit;
        color: white;
      }
      .fourth-col{
        width: 200px;
        display: flex;
        flex-direction: column;
        background-color: inherit;
        color: white;
      }
  }
  .lower-down-grid{
    display: flex;
    justify-content: center;
    width: 400px;
    padding-top: 30px;
    padding-bottom: 30px;
    
    .color {
      background-color: #04111d;
      color: white;
  }
 
  }
`;
