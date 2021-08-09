import React from 'react';
import {View, StyleSheet, AsyncStorage} from 'react-native';
import LogoIcon from 'react-native-vector-icons/AntDesign'


class SplasgScreen extends React.Component {
    static navigationOptions = {
        headerShown: false
    }

    getData = async () => {
        try {
          const value = await AsyncStorage.getItem('@Facebook_Users')
          if(value !== null) {

            var data=JSON.parse(value);

            this.props.navigation.navigate('Home', {
              name: data.name,
              pic:data.pic
            })
            console.log("user exits")
          }
          else{
            this.props.navigation.navigate("Login")
          }
        } catch(e) {
          this.props.navigation.navigate("Login")
          console.log(e)
        }
      }
  
      componentDidMount(){
        this.getData();
      }

    
    render(){
        return (
            <View style={Styles.container}>
                <View style={Styles.logo}>
                    <LogoIcon name="dingding-o" size={70} color="#4C2FC9"/>
                </View>
            </View>
        )
    }
}

    

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4C2FC9',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        height: 100,
        width: 100,
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30
    }

})

export default SplasgScreen;