import styled from "styled-components";
import { Link } from 'react-router-dom'


export const Wrapper = styled.section`
  position: fixed;
  z-index: 1;
  background-color:#231f20;
  display: grid;
  grid-template-columns: 350px auto 680px;
  width: 100vw;
  padding: 5px 0px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
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
export const HeaderItem = styled.div`
  padding-left: 1rem;
  padding-right: 2rem;
  color: #ffffff;
  font-weight: 700;
  cursor: pointer;
`;

export const HeaderIcon = styled.div`
  padding-left: 1rem;
  padding-right: 2rem;
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 900;
  cursor: pointer;
  .icon{
      color: white;
      font-size: 25px;
  }
`;
