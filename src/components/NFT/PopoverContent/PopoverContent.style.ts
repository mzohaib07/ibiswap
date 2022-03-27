import styled from "styled-components";

export const PopoverContentStyles = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    width: 270px;
    .cover-section{
        .popover-img{
        width: 100%;
        height: 50px;
        object-fit: cover;
        }   
    }
    .profile-section{
        position: relative;
        
    .popover-profile-img{
        position: absolute;
        left:105px;
        top:-21px;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        }
    }
    .name-section{
        padding: 15px 0px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 10px;
        row-gap: 15px;
        span:nth-child(1){
            align-self: center;
            font-size: 18px;
        }
        span:nth-child(2){
            align-self: center;
            font-size: 12px;
            font-weight: 400;
            color: grey;

        }
    }
    .last-section{
        display: flex;
        justify-content: space-between;
        margin: 0px 25px;
        padding: 15px 0;
        column-gap: 15px;
        div{
            display: flex;
            flex-direction: column;
            .number-heading{
                color: white;
                font-weight: 600;
                font-size: 18px;
            }
            .title-heading{
                color: grey;
                font-size: 14px;
            }
         
        }
    }

    
    
`