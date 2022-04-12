import { Paper } from "@mui/material";
import styled from "styled-components";


export const Item = styled(Paper)`
    display: block;
`

export const FooterStyles = styled.div`
    .grid-container{
        background-color: #04111d;
        /* display: flex;
        flex-direction: column; */
        padding: 80px 0px 30px 0px; 
    }
    .first-grid{
        display: flex;        
        padding: 22px 0px 86px 0px;
        column-gap: 273px;
        background-color: #04111d;
        color: white;
        .left-grid{
            
        span{
            font-weight: 800;
            font-size: 22px;
            color: #ffed00;
         }
         .left-grid-disp{
            margin-top: 20px;
            width: 680px;
            font-size: 17px;
            font-weight: 400;
         }
         .left-grid-searchbar{
             display: flex;
             margin-top: 30px;
             column-gap: 20px;
             button {
                 border: none;
                 outline: none;
                 padding: 12px 45px;
                 border-radius: 15px;
                 align-self: end;
                 margin-top: 8px;
                 background-color: #ffed00;
                 color: black;
                 font-size: 16px;
                 font-weight: 800;
                 &:hover{
                     cursor: pointer;
                 }
             }
         }
        }
        .right-grid{
            span{
            font-weight: 800;
            font-size: 22px;
            color: #ffed00;
         } 
         .right-grid-icons{
            margin-top: 20px;
            display: flex;
            flex-direction:row;
            column-gap: 10px;
            .icon{
                padding: 15px;
                background-color: #353840;
                border-radius: 10px;
                transition: 0.2s ease-in-out;
                &:hover{
                    background-color: #ffed00;
                    cursor: pointer;
                    color: black;
                }
            }
         }
        }
    }
    .secound-grid{
        margin-top: 70px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        column-gap: 120px;
        background-color: inherit;
        color: white;
        .title{
            font-weight: 600;
            color: #ffed00;
        }
        ul{
            padding-left: 0px;
        }
        li{
            list-style-type: none;
            padding: 8px 0px 8px;
            font-size: 14px;
            transition: .1s ease;
            &:hover{
                transform: scale(1.01);
                cursor: pointer;
            }
        }
        .first-col{
            display: flex;
            flex-direction: column;
            width: 20%;
            row-gap: 13px;
            .ibiswap{
                font-weight: 600;
                font-size: 20px;
                cursor: pointer;
            }
            .desp{
                letter-spacing: .1rem;
            }
        }
        .scnd-col{
            display: flex;
            flex-direction: column;
        }
    }
    .third-grid{
        margin-top: 30px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        column-gap: 210px;
        background-color: inherit;
        color: white;
    }
`