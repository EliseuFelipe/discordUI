import styled from 'styled-components';

import {PersonAdd, Settings} from 'styled-icons/material';

import {Hashtag} from 'styled-icons/heroicons-outline';

export const Container = styled.div`
    display: flex;
    flex-direction: row; // padrao, nao precisa dessa linha
    align-items: center;
    justify-content: space-between;

    cursor: pointer;
    padding: 5px 3px;
    border-radius: 5px;

    background-color: transparent;

    transition: background-color .2s;

    // a div sera ser flex
    >div{
        display: flex;
        align-items: center;
    }

    // seleciona o span da div (chat-livre)
    >div span{
        margin-left: 5px;
        color: var(--senary);
    }

    // hover = mouse em cima, active = clicado
    &:hover, &:active{
        background-color: var(--quinary);

        >div span{
            color: var(--white);
        }
    } 
`;

export const HashtagIcon = styled(Hashtag)`
    width: 20px;
    height: 20px;

    color: var(--symbol);
`;

export const InviteIcon = styled(PersonAdd)`
    width: 16px;
    height: 16px;

    color: var(--symbol);
    cursor: pointer;

    transition: color .2s;

    &:hover{
        color: var(--white);
    }
`;

export const SettingIcon = styled(Settings)`
    width: 16px;
    height: 16px;

    margin-left: 4px;

    color: var(--symbol);
    cursor: pointer;

    transition: color .2s;

    &:hover{
        color: var(--white);
    }
`;