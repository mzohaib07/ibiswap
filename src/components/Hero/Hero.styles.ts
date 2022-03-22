import styled from "styled-components";
import bgImg from "../../assets/bg-img.png";

export const Wrapper = styled.div`
  position: relative;

  .container {
  
    display: flex;
    justify-content: center;
  }
  .img-container{
    background-image: url(${bgImg});
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 1;
  }
  .content-wrapper {
    display: flex;
    position: relative;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    height: 75vh;
    padding: 0px 150px
  }
  .ctaContainer{
    margin-top: 30px;
  }
  .copy-container {
    width: 40%;
    height: 445px;  
  }
  .main-img{
    width: 570px;
    height: 450px;
    object-fit: cover;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
  .title {
    position: relative;
    color: #ffffff;
    font-weight: 800;
    font-size: 54px;
    color: #ffed00;
    line-height: 4rem;
  }
  .card-container{
    display: flex;
    flex-direction: column;
  }
  .description {
    font-size: 20px;
    color: #fff;
    padding: 20px 0px;
    font-weight: 600;
  }
  .explore-btn {
    position: relative;
    border: none;
    padding: 15px 60px;
    margin-right: 20px;
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 600;
    border-radius: .7rem;
    cursor: pointer;
    background-color: #ffed00;
  }
  .create-btn {
    position: relative;
    padding: 15px 60px;
    margin-right: 20px;
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 600;
    border-radius:.7rem;
    background-color: #231f20;
    color:#ffed00 ;
    border: 2px solid #ffed00 ;
    cursor: pointer;
  }
  .author {
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .infoContainer {
    display: flex;
    flex-direction: row;
    padding: 1rem;
    color: #ffffff;
    align-items: center;
    height: 5rem;
    background-color: #303339;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`;
