import styled from "styled-components";
import { Link } from 'react-router-dom'
import { Box } from "@mui/system";


export const BoxWrapper = styled(Box)`
  position: fixed;
  &.wrapper{
    background-color:#04111d;
    display: grid;
    grid-template-columns: auto 700px 680px;
    width: 100%;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    z-index: 9999;
    height: 70px;
}
  `;

export const NavLink = styled(Link)`
    text-decoration: none;
`
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 14px;
  gap: 10px;
  .logo-text {
    color: #ffffff;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 600;
    border-bottom: none;
  }
`;

export const HeaderItems = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 1200px) {
    display: none;
  }
`;
export const HeaderItem = styled.span`
  padding: 23px;
  color: gray;
  font-weight: 700;
  cursor: pointer;
  &:hover{
    color: #ffffff;
  }
  &.nav-active{
    border-bottom: 2px solid #ffed00;
  }
`;

export const HeaderIcon = styled.div`
  padding-left: 1rem;
  padding-right: 2rem;
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 900;
  cursor: pointer;
  .icon{
      color: gray;
      font-size: 33px;
      transition: .1s ease-in-out;
      &:hover{
        color: white;
      }
  }
`;
