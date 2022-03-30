import styled from "styled-components";

export const CreateSyles = styled.div`
    display:flex ;
    justify-content: center;
    color: white !important;
    padding: 50px 100px;
    .box{
       width :650px;
    }
    .profile-icon{
        font-size: 35px;
        margin-top: 5px;
    }
    .title{
        font-weight: 900;
        font-size: 20px;
        align-self: center;
    }
    .desp{
        margin: 30px 30px 50px 0px;
        line-height: 25px;
        letter-spacing: .4px;
        color: gray !important;
    }
    .wallets{
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        border: 1px solid #363840 ;
    
        .wallet-container{ 
            display :flex;
            transition: 0.3s ease-in-out;
            padding: 6px;
            border-bottom: 1px solid #363840 ;
            &:hover{
                background-color: #ffed00;
                cursor: pointer;
                color: black;
            }
        .logo{
            object-fit: cover;
            padding: 10px;
        }
        .logo-title{
            font-weight: 600;
            padding: 10px;
            align-self: center;
        }}
    }

`