import styled from "styled-components";

export const Container = styled.div`
        display:flex;
        flex-direction:column;
        align-items:center;
        background-color:#FFF;
        border-radius:5px;
        padding: 5px 15px;
        width:30%;
        border: 1px solid black;

        @meadia (max-width: 750px) {
            width: 20%;

        p{
            font-size:12px;
        }
        span{
            font-size:20px;
        }
        svg{
            display:none;
        }
    }
`;

export const Header = styled.header`
        display:flex;
        align-items:center;
        justify-content:space-around;
        width:100%;
        gap:10px;

    svg{
        width:30px;
        height:30px;
    }

`;

export const HeaderTitle = styled.p`
  font-size: 20px;
`;

export const Total = styled.span`
  font-size: 30px;
  font-weight: bold;
`;