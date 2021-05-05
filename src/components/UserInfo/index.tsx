import React from 'react';

//importamos os icones

import {Container,
        Profile, 
        Avatar, 
        UserData, 
        Icons, 
        MicIcon, 
        HeadphoneIcon,
        SettingsIcon} from './styles';

const UserInfo: React.FC = () => {
    return (

        <Container>
            <Profile>
                <Avatar />
                <UserData>
                    <strong>Eliseu Felipe</strong>
                    <span>#1234</span>
                </UserData>
            </Profile>
            
            <Icons>
                <MicIcon/>
                <HeadphoneIcon/>
                <SettingsIcon/>
            </Icons>
        </Container>

    );
};

export default UserInfo;
