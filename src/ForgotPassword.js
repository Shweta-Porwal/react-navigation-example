import React from "react";
import { Button, Container, Content, H2, Input, InputGroup, Text, View } from "native-base";

export default class ForgotPassword extends React.Component {
    static navigationOptions = {
        title: '',
    };

    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container>
                <Content style={{ padding: 16 }}>
                    <H2 style={{ marginTop: 16, alignSelf: 'center' }}>{'Forgot Password'}</H2>
                    <View style={{ marginTop: 32 }}>
                        <InputGroup>
                            <Input
                                placeholder={"Name"}
                                value={this.state.name}
                                onChangeText={(value) => this.setState({ email: value })}
                                autoCorrect={false}
                                autoCapitalize="none"
                                returnKeyType="next"
                                ref="email" />
                        </InputGroup>
                        <Button
                        title={"Next"}
                        isLoading={this.state.isLoading}
                        onPress={async (value) => {
                            console.log("Proceed Button clicked");
                            
                        }}
                        style={{
                            alignSelf: 'center',
                            width: 100,
                            marginTop: 50,
                            backgroundColor: "#1792e5"
                        }}
                    >
                        {
                            (this.state.isLoading)
                                ? <ActivityIndicator animating={this.state.isLoading} size='small' color='white' />
                                : null
                        }
                        <Text style={{ color: "white",textAlign:'center' }}> Proceed </Text>
                    </Button>
                    </View>
                </Content>
            </Container>
        )
    }

    
}

