import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import QRCode from 'react-native-qrcode';

import { Container, Nav, NavItem, NavText } from './styles';

export default function Menu(){
    return (
        <Container>
            <Code>
                <QRCode
                    value="http://github.com/luliveira"
                    size={80}
                    fgColor="#FFF"
                    bgColor="#8B10AE"
                />
            </Code>

            <Nav>
                <NavItem>
                    <Icon name="help-outline" size={20} color="#FFF" />
                    <NavText> Me ajuda </NavText>
                </NavItem>
                <NavItem>
                    <Icon name="person-outline" size={20} color="#FFF" />
                    <NavText> Meu perfil </NavText>
                </NavItem>
                <NavItem>
                    <Icon name="credit-card" size={20} color="#FFF" />
                    <NavText> Configura cartão </NavText>
                </NavItem>
                                <NavItem>
                    <Icon name="smartphone" size={20} color="#FFF" />
                    <NavText> Configuração do app </NavText>
                </NavItem>
            </Nav>

            <SignOutButton onPress={() => {}}>
              <SignOutButtonText>SAIR DO APP</SignOutButtonText>
            </SignOutButton>
        </Container>
    );
}
