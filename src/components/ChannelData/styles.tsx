import styled from 'styled-components';
import { AlternateEmail} from 'styled-icons/material';

export const Container = styled.div`
    grid-area: CD;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-color: var(--primary);

`;

export const Messages = styled.div`
    padding: 20px 0; // 20px cima e baixo, 0 esq-dir

    display: flex;
    flex-direction: column;

    // 100vh = altura da tela
    // deixar espaço entre os "-"
    max-height: calc(100vh - 46px - 68px);
    overflow-y: scroll;

    // customizar scrollbar
    ::-webkit-scrollbar{
        width: 8px;
    }

    ::-webkit-scrollbar-thumb{
        background-color: var(--tertiary);
        border-radius: 4px; // borda circular
    }

    ::-webkit-scrollbar-track{
        background-color: var(--secondary);
    }
`;

export const InputWrapper = styled.div`
    width: 100%;

    padding: 0px 16px; // 0 cima-baixo, 16 esq-dir

`;

export const Input = styled.div`
    width: 100%;
    height: 44px;

    padding: 0 10px 0 57px;
    border-radius: 7px;

    color: var(--white);
    background-color: var(--chat-input);

    position: relative;

    &::placeholder{
        color: var(--gray);
    }

    //icone
    ~ svg{
        position: relative;
        top: -50%;
        left: 14px;
        transition: 180ms ease-in-out;
    }
`;

export const InputIcon = styled(AlternateEmail)`
    height: 24px;
    width: 24px;

    color: var(--gray);
`;
