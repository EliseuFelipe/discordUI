import React from 'react';

import ChannelButton from '../ChannelButton';

import {Container, Category, AddCategoryIcon} from './styles';

const ChannelList: React.FC = () => {
    return (
        <Container>
            <Category>
                <span>Canais de texto</span>
                <AddCategoryIcon />
            </Category>

            
            <ChannelButton channelName="chat-livre" />
            <ChannelButton channelName="grupo de geografia" />
            <ChannelButton channelName="os bacanas" />
            <ChannelButton channelName="minha anotacoes" />
            <ChannelButton channelName="amigos" /> 

        </Container>

    );
};

export default ChannelList;
