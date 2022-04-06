import styled from "styled-components";

export const ViewNFTStyles = styled.div`
    margin: 50px 0px 140px 0px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    column-gap: 40px;

    .right-sect{
        width: 690px;
        .username-section{
            display: flex;
            justify-content: space-between;
            .title{
            color: #007bff;
            font-size: 18px;
            padding: 13px 0px 0px 0px;
            &:hover{
                color: white;
                cursor: pointer;
            }
            }
            .icons{
                .icon-logo{
                    padding: 12px;
                    background-color: #202225;
                    color: white;
                    border: 1px solid grey;
                    &:hover{
                        cursor: pointer;
                    }
            }
            }
        }
        .code-section{
            margin-top: 25px;
        }
        .owner-section{
            margin-top: 25px;
        }
        .offer-section{
            margin-top: 30px;
            border-radius: 10px;
            padding: 20px;
            display: flex;
            flex-direction: column;
            width: inherit;
            background-color: #303339;
            border:1px solid grey;
            span:nth-child(1){
                color: grey;
                padding: 15px 0px;
                font-size: 18px;
            }
            .ofer-btn{
                display: flex;
                justify-content: center;
                column-gap: 10px;
                width:350px ;
                margin-top :15px ;
                padding:15px 0px;
                background-color:#303339 ;
                border-radius: 10px;
                border: 1px solid black;
                color: white;
                font-size: 15px;
                font-weight: 800;
                &:hover{
                    cursor: pointer;
                    background-color:#303330 ;
                }
            }
        }
    }

`