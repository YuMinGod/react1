/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    text-align: center;
    padding: 30px 50px;
    & ul{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    & li {
        padding: 0 7px 0 10px;
        position: relative; 
        &::before {
            content: '';
            width: 1px;
            height: 16px;
            background-color: #dbdbdb;
            position: absolute;
            top: 2px;
            left: 3px;
        }
        &:first-child:before{
            width: 0;
        }
    }
    & address{
        padding-top: 15px;
    }
`;

const FooterList:React.SFC = () => {
    return(
        <Wrapper>
            <address>
                {`Copyright © `}
                <a href="https://github.com/YuMinGod"><strong>YuMinGod</strong></a>
                {` All Rights Reserved.`}
            </address>
        </Wrapper>
    );
}

export default FooterList;