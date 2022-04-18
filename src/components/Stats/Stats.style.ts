import styled from "styled-components";

export const StatsStyle = styled.div`
    display: flex;
    flex-direction: column;
    /* margin-top: 100px; */

    .title-section{
        display: flex;
        justify-content: center;
        align-self: center;
        margin-top: 101px;
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