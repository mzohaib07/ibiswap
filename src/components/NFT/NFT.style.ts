import styled from "styled-components";

export const Wrapper = styled.div`
&.wrapper{
        display: grid;
        grid-template-columns:auto;
        .item-list{
        padding: 30px 20px;
        color: grey;
        font-size: 18px;
        margin-top: 10px;
        margin-left: 15px;
        }
    }
`
export const NFTStyles = styled.section`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        /* justify-content: center; */
        margin-top: 40px;
        row-gap: 30px;
` 