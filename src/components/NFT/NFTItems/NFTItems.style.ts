import styled from "styled-components";

export const NFTItemsStyles = styled.section`
    width: 284px;
    margin-left: 30px;

    .card{
        display: flex;
        flex-direction: column;
        height: 100%;
        background-color: rgb(48, 51, 57);
        border: 1px solid rgb(21, 27, 34);
        border-radius: 10px;
        position: relative;
        z-index: 2; 
        border-radius: 10px;
        border: none;
        &:hover{
            cursor: pointer;
            transform:scale(1.01);
        }
    }
    .card-img{
        object-fit: cover;
        width: 100%;
        height: 100%;
        max-width: 100%;
        max-height: 100%;
        border-radius: 0px;
        box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 4px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
    .card-content{
        display: flex;
        justify-content: space-between;
        box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 4px;
        .title{
            font-size: 13px;
            color: gray;
            transition: 0.1s;
            &:hover{
                color: white;
            }
        }
        .card-body-content{
            display: flex;
            flex-direction: column;
            row-gap: 6px;
            text-align: right;
        .despcription
            {
            color: white;
            font-size: 13px;
            }
        } 
    }
    .card-actions{
        display: flex;
        justify-content: space-between;
        margin: 0px 5px;
        span:nth-child(1){
            color: skyblue;
            font-size: 13px;
            &:hover{
                color: grey;
            }
        }
        .heart-icon{
            color: gray;
            &:hover{
                color: orange;
            }
        }
        .heart-icon-content{
            display: flex;
            flex-direction: row;
            column-gap: 10px;
            justify-content: center;
            align-items: center;
            padding: 0px 5px;
        }
        .number{
            color:gray;
        }

    }
`