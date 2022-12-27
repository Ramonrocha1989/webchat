import React from 'react';
import * as FlexWebChat from "@twilio/flex-webchat-ui";


class App extends React.Component {

  state = {};

  constructor(props) {
    super(props);

    const { configuration } = props;

    FlexWebChat.Manager.create(configuration)
      .then(manager => this.setState({ manager }))
      .catch(error => this.setState({ error }));

    FlexWebChat.MainContainer.defaultProps = {
      ...FlexWebChat.MainContainer.defaultProps,
      height: '100%',
      width: '100%',
      right: '0%',     
      bottom: '0%',      
    }

    FlexWebChat.MainHeader.defaultProps = {
      ...FlexWebChat.MainHeader.defaultProps,
      titleText: 'Chat Empresa',
      showTitle: false,
      showImage: false,      
    }

    FlexWebChat.MessagingCanvas.defaultProps = {
      ...FlexWebChat.MessagingCanvas.defaultProps,
      memberDisplayOptions: {
        yourDefaultName: 'Você',
        theirDefaultName: 'Atendente',
        yourFriendlyNameOverride: false,
        theirFriendlyNameOverride: false
      },
      predefinedMessage: {
        body: 'Olá seja bem-vindo, envie uma mensagem para iniciar o chat!!',
        authorName: 'Atendente',
        isFromMe: false,
      },
      showWelcomeMessage: false,
      messageStyle: "Squared", 
      //showTypingIndicator: true,    
    }   
    
    
  }

  render() {
    const { manager, error } = this.state;
    if (manager) {
      return (
        <FlexWebChat.ContextProvider manager={manager}>
          <FlexWebChat.RootContainer />
        </FlexWebChat.ContextProvider>
      );
    }

    if (error) {
      console.error("Failed to initialize Flex Web Chat", error);
    }

    return null;
  }
}

export default App;
