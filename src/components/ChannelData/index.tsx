import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import {Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
    // deixar o scroll na ultima mensagem
    const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;
    useEffect(() => {
        const div = messageRef.current;

        if(div){
            div.scrollTop = div.scrollHeight;
        }
    },[messageRef]);

    return (
        <Container>
            <Messages ref={messageRef}>

                {Array.from(Array(15).keys()).map((n) => (
                    <ChannelMessage 
                        author="Eliseu Felipe"
                        date="15/05/2020"
                        content="Bom dia, Pessoal."
                    />
                ))}
                
                
                <ChannelMessage 
                    author="Roberto Silva"
                    date="16/05/2020"
                    content={
                        <>
                            <Mention>@Eliseu Felipe</Mention>, boa noite.
                        </>
                    }
                    hasMention
                    isBot
                /> 

            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #Chat-livre"/>
                <InputIcon />
            </InputWrapper>
        </Container>

    );
};

export default ChannelData;
