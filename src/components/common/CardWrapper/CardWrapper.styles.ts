import styled from "styled-components";

export const CardStyles = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 80px;
    justify-content: center;
    .title-section{
    .title{
        color: #ffffff;
        font-weight: 800;
        font-size: 22px;
        color: #fff;
        line-height: 4rem;
        display: flex;
        justify-content: center;
        }
    }
    .card-section{
        display: flex;
        justify-content: center;
        column-gap: 20px;
        height: 700px;
        margin-bottom: 15rem;
        .card{
            width: 24.33%;
            border-radius: 10px;
            border: none;
            outline: none;
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        }
    }
`