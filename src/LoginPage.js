import React from "react";
import { Button, Container, Content, Input, InputGroup, Text, View } from 'native-base';
import { ActivityIndicator } from "react-native";


export default class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            isLoading: false
        }
    }

    render() {
        return (
            <Container>
                <Content style={{ padding: 16, marginTop: 30 }}>
                    <InputGroup>
                        <Input
                            placeholder={"Name"}
                            value={this.state.name}
                            onChangeText={(value) => this.setState({ name: value })}
                            autoCorrect={false}
                            autoCapitalize="none"
                            returnKeyType="next"
                            ref="name" />
                    </InputGroup>

                    <InputGroup>
                        <Input
                            placeholder={"Password"}
                            value={this.state.password}
                            style={{ flex: 1 }}
                            onChangeText={(value) => this.setState({ password: value })}
                            autoCorrect={false}
                            returnKeyType="go"
                        />
                    </InputGroup>
                    <View style={{ marginTop: 16 }} />   
                    <Button block
                        onPress={async (value) => {
                            console.log("Login Button clicked");
                        }}
                        style={{
                            alignSelf: 'center',
                            width: '90%',
                            marginTop: 50,
                            backgroundColor: "#1792e5"
                        }}
                    >
                        {
                            (this.state.isLoading)
                                ? <ActivityIndicator animating={this.state.isLoading} size='small' color='white' />
                                : null
                        }
                        <Text style={{ color: "white" }}> Login </Text>
                    </Button>

                    <View style={[
                        {
                            flex: 1,
                            alignSelf: 'center',
                            alignItems: 'flex-end',
                            flexDirection: 'row',
                            justifyContent: 'flex-end'
                        }]}>
                        <View style={{ flex: 1 }} />
                        <Button
                            block
                            transparent
                            onPress={() => {
                                console.log("Forgot password clicked");
                                this.props.navigation.navigate("ForgotPassword");
                            }}
                        >
                            <Text uppercase={false}
                            > {"Forgot Password"} </Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }

    async waitTimeout(timeoutValue) {
        // Now check for the status of the transaction
        return new Promise((resolve, reject) => {
            setTimeout(resolve, timeoutValue);
        })
    }
}

