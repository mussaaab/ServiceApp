import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, AsyncStorage} from 'react-native'

import { Avatar } from 'react-native-paper';

import { LoginManager } from "react-native-fbsdk";

class ProfileScreen extends React.Component {

    logout = () => {
        AsyncStorage.removeItem('@Facebook_Users').then(()=>{
            LoginManager.logOut();
            this.props.navigation.navigate("Login")
        })
    }


    render(){
        return (
            <View style={Styles.container}>
                <View>
                <View >
                <Avatar.Image  source={require('../img/avatar.png') ?  require('../img/avatar.png'): {uri:this.props.navigation.getParam("pic")}} />
                </View>

                </View>
                <TouchableOpacity style={{backgroundColor: 'skyblue'}} onPress={this.logout}>
                <Text>Logout</Text>

                </TouchableOpacity>
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    container:  {
        flex: 1,
    }
})

export default ProfileScreen