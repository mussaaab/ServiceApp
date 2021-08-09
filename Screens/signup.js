import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, AsyncStorage} from 'react-native';


class SignupScreen extends React.Component {

    static navigationOptions={
        title: "",
       headerStyle: {
           backgroundColor: 'transparent',

           elevation:0 
       }
    }

    state = {
        fullname: '',
        PhoneorEmail: '',
        password: '',
        conformPassword: ''
    }

    signup = () =>  {
        const {fullname, PhoneorEmail, password, conformPassword } = this.state;
        if(!fullname || !PhoneorEmail || !password || !conformPassword){
            return alert("Please fill all fields")
        }
        if(password !== conformPassword){
           return alert("Password not match")
        }
        else {
            const userSignup = {
                fullname,
                PhoneorEmail,
                password,
                conformPassword
            }
            AsyncStorage.setItem("@Signup_user", JSON.stringify(userSignup)).then((result) => {
                console.log(userSignup)
                this.props.navigation.navigate("Login", {
                    fullname: userSignup.fullname,
                    email: userSignup.email,
                    conformPassword: userSignup.conformPassword
                })
            })
        }
    }
    
    render() {
      return (
        <View style={styles.container}>
            <View style={styles.header}>
              <View style={styles.textcontainer}>
                <Text style={styles.title}>Sign Up!</Text>
              </View>

                <View style={styles.body}>
                  <View style={styles.inputContainer}>
                      <TextInput value={this.state.fullname} onChangeText={fullname => this.setState({fullname})} style={styles.input} placeholder="Fullname"/>
                  </View>

                  <View style={styles.inputContainer}>
                      <TextInput autoCapitalize="none" value={this.state.PhoneorEmail} onChangeText={PhoneorEmail => this.setState({PhoneorEmail})} style={styles.input} placeholder="Phone Number or Email"/>
                  </View>

                  <View style={styles.inputContainer}>
                      <TextInput autoCapitalize="none" value={this.state.password} onChangeText={password => this.setState({password})} secureTextEntry={true} style={styles.input} placeholder="Password"/>
                  </View>

                  <View style={styles.inputContainer}>
                      <TextInput style={styles.input} autoCapitalize="none" value={this.state.conformPassword} onChangeText={conformPassword => this.setState({conformPassword})} secureTextEntry={true} placeholder="Conform Password"/>
                  </View>
                </View>
            </View>

        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 310}}>
        <TouchableOpacity onPress={this.signup} style={styles.btnContainer}>
            <Text style={styles.signin}>Sign Up</Text>
        </TouchableOpacity>

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
    }, 
    textcontainer: {
        height: 60
    },
    title: {
        fontSize: 30,
        padding: 20,
        fontWeight: 'bold',
        color: '#8930e8'
    },
    body: {
        marginTop: 150,
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

    
  })

export default SignupScreen;