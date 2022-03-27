import styled from "styled-components";

export const StatsStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 80px;
    .title-section{
        display: flex;
        justify-content: center;
        align-self: center;
        .title{
           margin-top: 50px;
           color: white;
           font-size: 900;
        }
    }
    .desp-section{
        display: flex;
        justify-content: center;
        align-self: center;
            .desp{
                padding: 30px 0px;
                color: grey;
                font-weight: 400;
                font-size: 17px;
                letter-spacing: .3px;
            } 
    }
    .dropdown-section{
        display: flex;
        justify-content: center;
        column-gap: 30px;
    }
    .table-section{
        margin-top: 50px;
        display: flex;
        justify-content: center;
    }

`