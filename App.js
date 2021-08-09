import React from 'react';

import HomeIcon from 'react-native-vector-icons/AntDesign';
import ProfileIcon from 'react-native-vector-icons/FontAwesome5';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './Screens/Signin';
import SignupScreen from './Screens/signup';
import HomeScreen from './Screens/Home';
import SplashScreen from './Screens/Splash';
import ProfileScreen from './Screens/Profile';
import AllServicesScreen from './Screens/AllServiceScreen';

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';


const DrawerTab = createDrawerNavigator({
  Profile: {
    screen: ProfileScreen
  },

})

const BottomTabs = createMaterialBottomTabNavigator({
  Home: {
    screen: HomeScreen,
     navigationOptions: {
       tabBarIcon: ({tintColor}) => (
         <HomeIcon name="home" size={20} color={tintColor} />
       )
     }
  },
  Profile: {
    screen: DrawerTab,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <ProfileIcon name="user-tie" size={20} color={tintColor} />
      )
    }
  }
}, {
  navigationOptions: {
    headerShown: false,
  },
  barStyle:{
    backgroundColor:"#8930e8"
  }
});


const AppNavigator = createStackNavigator({
  Splash: {
    screen: SplashScreen
  },
  Login: {
    screen: LoginScreen,
  },
  Signup: {
    screen: SignupScreen
  },
  Home: {
    screen: BottomTabs
  },
  AllServics: {
    screen: AllServicesScreen
  }


});

export default createAppContainer(AppNavigator);

class App extends React.Component{
  render(){
    return (
      <AppNavigator />
    );
  };
}


