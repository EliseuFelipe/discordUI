import React from 'react';

import {Container, HashtagIcon, InviteIcon, SettingIcon} from './styles';

export interface Props{
    channelName: string;
    selected?: boolean; // ? não obrigatorio
    
};

const ChannelButton: React.FC<Props> = (
    {
        channelName,
        selected
    }
) => {
    return (
        <Container>
            <div>
                <HashtagIcon />
                <span>chat-livre</span>
            </div>

            <div>
                <InviteIcon />
                <SettingIcon />
            </div>
        </Container>

    );
};

export default ChannelButton;
