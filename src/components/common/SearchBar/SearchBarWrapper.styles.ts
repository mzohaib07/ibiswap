import styled from "styled-components";

export const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #363840;
  border-radius: 10px;
  margin-top: 9px;
  padding: 10px 10px;
  height: 25px;
  gap: 10px;
  width: 600px;
  max-width: 300px;
  .search-icon {
    margin-left: 0.75rem;
    margin-right: 0.75rem;
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 700;
    align-self: center;
  }
  &:hover {
    background-color: #4c505c;
  }
  .search-input {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-left: 0;
    background-color: transparent;
    width: 100%;
    border-width: 0;
    box-shadow: var(--tw-ring-inset) 0 0 0
      calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
      &:focus {
          outline: none;
          color: white;
      }
  }
`;