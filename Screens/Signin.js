import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity,  AsyncStorage} from 'react-native';
import { LoginManager,GraphRequest,GraphRequestManager } from "react-native-fbsdk";
//import firebase from 'react-native-firebase'

import GoogleIcon from 'react-native-vector-icons/AntDesign';
import FacebookIcon from 'react-native-vector-icons/FontAwesome5';
import TwitterIcon from 'react-native-vector-icons/FontAwesome5';



class LoginScreen extends React.Component {

    static navigationOptions = {
        headerShown: false
    }

    state = {
      email: '',
      password: '',
    }

    Signin = async () => {
      var {email, password} = this.state;
      if(!email, !password){
        return alert('What\'s your email and password');
      }else {
        const value = await AsyncStorage.getItem("@Signup_user")
        if(value === null){
          return alert("Please create an account")
        }
        if(value !== null){
          const data = JSON.parse(value);
          // console.log(data)

          if(email !== data.PhoneorEmail || password !== data.conformPassword){
            return alert("email or password invalid")
          } 
        else {
            this.props.navigation.navigate("Home", {
              fullname: data.fullname
            })
            this.setState({
              email: '',
              password: '',
            })
          }          
      }
    }
  } 


    _responseInfoCallback = async (error: ? Object, result: ? Object)=>{
      if (error) {
        console.log('Error fetching data: ' + error.toString());
      } else {

        const user = {
          name: result.name,
          email: result.email,
          pic: result.picture.data.url
        }
        AsyncStorage.setItem('@Facebook_Users', JSON.stringify(user))
        console.log(result)
        this.props.navigation.navigate('Home', {
          name: result.name,
          pic:result.picture.data.url
        })
        console.log('user save')
      }
    }

    loginWithFacebook = () => {
      LoginManager.logInWithPermissions(["public_profile","email"]).then((result) =>  {
          if (result.isCancelled) {
            console.log("Login cancelled");
          } else {
            
            const infoRequest = new GraphRequest(
              '/me',
              {
                parameters:{
                  fields:{
                    string:"id,name,email,picture.type(large)"
                  }
                }
              },
              this._responseInfoCallback,
            );
            // Start the graph request.
            new GraphRequestManager().addRequest(infoRequest).start();         
            
          }
        }).catch((error) => {
          console.log("Login fail with error: " + error);
        })
      }

    render() {

      return (
          <View style={{flex: 1}}>
            <View style={styles.header}>
              <View style={styles.textcontainer}>
                <Text style={styles.title}>Hi, Welcome!</Text>
              </View>

                <View style={styles.body}>
                  <View style={styles.inputContainer}>
                      <TextInput autoCapitalize="none" value={this.state.email} onChangeText={email => this.setState({email})} style={styles.input} placeholder="Phone Number or Email"/>
                  </View>

                  <View style={styles.inputContainer}>
                      <TextInput value={this.state.password} autoCapitalize="none" onChangeText={password => this.setState({password})} style={styles.input} secureTextEntry={true} placeholder="Password"/>
                  </View>
                </View>
            </View>

        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 200}}>
        <TouchableOpacity onPress={this.Signin} style={styles.btnContainer}>
            <Text style={styles.signin}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate("Signup")} style={styles.SignupContainer}>
            <Text style={styles.signup}>Dont have an account? Sign Up</Text>
        </TouchableOpacity>
        </View>


        <View style={{height: '35%', alignContent: 'flex-end', justifyContent: 'flex-end'}}>
        <View style={{marginLeft: 20}}>
          <Text style={{fontSize: 18, color: '#848484', fontWeight: 'bold'}}> Or Signin With </Text>
        </View>

        <View style={{flexDirection: 'row', paddingLeft: 10}}>

        <TouchableOpacity style={[styles.googleIconView, {marginLeft: 10}]}>
           <GoogleIcon name="google" size={26} color="red"/>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.loginWithFacebook} style={[styles.googleIconView, {marginLeft: 10}]}>
           <FacebookIcon name="facebook-f" size={26} color="#1663c7"/>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.googleIconView, {marginLeft: 10}]}>
           <TwitterIcon name="twitter" size={26} color="#30c9e8"/>
        </TouchableOpacity>
        </View>
        </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        width: "100%",
        height: 100,
        marginTop: 30
    }, 
    textcontainer: {
        marginTop: 20,
        height: 60
    },
    title: {
        fontSize: 30,
        padding: 20,
        fontWeight: 'bold',
        color: '#8930e8'
    },
    body: {
        marginTop: 100,
        height: 80,
        alignItems: 'center',
        justifyContent:"center"
    },
    inputContainer: {
        width: '90%',
        height: 80
    },
    input: {
        borderBottomWidth: 2,
        borderBottomColor: '#8930e8',
        fontSize: 18
    },
    btnContainer: {
        backgroundColor: "#8478FA",
        height: 50,
        width: 100,
        marginLeft: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    signin: {
        fontSize: 18,
        color: "white",
    }, 
    SignupContainer: {
        marginLeft: 10,
    },
    signup: {
        fontWeight: 'bold'
    },
    googleIconView: {
        flexDirection: 'row', 
        marginLeft: 20, 
        marginTop: 10, 
        backgroundColor: '#e4e4e4', 
        width: 60, 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: 50,
        borderRadius: 8
    }
    
  })

export default LoginScreen;