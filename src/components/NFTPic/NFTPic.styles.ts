import styled from "styled-components";

export const NFTPicStyles = styled.div`
     .card{
        width: 500px;
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
        .card-actions{
            display: flex;
            justify-content: space-between;
            margin: 0px 5px;
        span:nth-child(1){
            color: skyblue;
            font-size: 13px;
            .etherum-icon{
                font-size: 15px;
            }
            &:hover{
                color: white;
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
    }
`