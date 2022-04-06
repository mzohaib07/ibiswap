import styled from "styled-components";

export const CollapsibleStyles = styled.div`
    width: 720px;
    margin: 30px 0px;
    .card-header{
        display: flex;
        justify-content: space-between;
        padding: 20px;
        background-color: #262b2f;
        border-bottom: 1px solid black;
    }
    .expand-icon{
        color:grey !important;
        &:hover{
            color: white !important;
            cursor: pointer;
        }
    }
`