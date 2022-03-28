import { Paper } from "@mui/material";
import styled from "styled-components";

export const PaperStyle = styled(Paper)`
    display: block;
    margin-bottom: 200px;
    width: 1200px;
    .table-data{
        transition: 0.2s ease-in-out;
       &:hover{
            background-color:#353840 ;
            cursor: pointer;
        }
    }
    .table-cell{
        padding: 25px;
        color:white ;
        font-size:18px;
        border-bottom: 1px solid black !important;
    }
  
`

