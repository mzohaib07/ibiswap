import styled from "styled-components";
import { Link } from 'react-router-dom'


export const Wrapper = styled.section`
  position: fixed;
  background-color:#04111d;
  display: grid;
  grid-template-columns: 350px auto 680px;
  width: 100%;
  padding: 5px 0px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  z-index: 9999;
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
`;
export const HeaderItem = styled.span`
  padding: 23px;
  color: gray;
  font-weight: 700;
  cursor: pointer;
  transition: .1s ease-in-out;
  &:hover{
    color: #ffffff;
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
