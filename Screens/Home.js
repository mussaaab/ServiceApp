import React from 'react';
import {View, Text, StyleSheet, ScrollView, TextInput, Image, TouchableOpacity, FlatList} from 'react-native';

import { Avatar } from 'react-native-paper';

import MessageIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import SnowIcon from 'react-native-vector-icons/FontAwesome';
import ToolIcon from 'react-native-vector-icons/FontAwesome5';
import PaintIcon from 'react-native-vector-icons/FontAwesome5';
import SearchIcon from 'react-native-vector-icons/FontAwesome';
import WaterPumpIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import CarIcon from 'react-native-vector-icons/FontAwesome5';
import TvIcon from 'react-native-vector-icons/FontAwesome5';
import AirIcon from 'react-native-vector-icons/Entypo';
import WashingIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FanIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import LaptopIcon from 'react-native-vector-icons/Entypo';


const options = [
    {
        key: 1,
        title: "Message",
        icon: <MessageIcon name="message-settings" size={28} color="#8930e8"/> 
    },
    {
        key: 2,
        title: "Clean",
        icon: <SnowIcon name="snowflake-o" size={28}  color="#8930e8"/> 
    },
    {
        key: 3,
        title: "Repair",
        icon: <ToolIcon name="tools" size={28}  color="#8930e8"/> 
    },
    {
        key: 4,
        title: "Color",
        icon: <PaintIcon name="brush" size={28} color="#8930e8"/> 
    },
    {
        key: 5,
        title: "Plubering",
        icon: <WaterPumpIcon name="water-pump" size={28} color="#8930e8"/> 
    },
]

class HomeScreen extends React.Component {

    renderOptions = ({item}) => {
        return (
            <View key={`${item.key}`}>
            <View style={{flexDirection: 'row',}}>

                <TouchableOpacity activeOpacity={0.6} style={styles.messageContainer} >
                    <View style={styles.iconContainer}>
                        {item.icon}
                    </View>

                    <View style={styles.message}>
                    <Text style={{fontSize: 16, color: 'white'}}>{item.title}</Text>
                    </View>
                </TouchableOpacity>

                </View>
                </View>
        )
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                <View style={{alignItems: 'flex-end'}}>
                <Avatar.Image style={styles.img} source={{uri:this.props.navigation.getParam("pic")} ? {uri:this.props.navigation.getParam("pic")} : require("../img/avatar.png") } />
                </View>

                <View style={styles.textContainer}>
        <Text style={{fontSize: 24, fontWeight: 'bold', }}>Hi, {this.props.navigation.getParam("name") ? this.props.navigation.getParam("name") : this.props.navigation.getParam("fullname")}</Text>
                    <Text style={{fontSize: 14, }}>Need a Help?</Text>
                </View>

                </View>
                <View style={styles.searchContainer}>
                    <SearchIcon style={{marginLeft: 10, alignSelf: 'center'}} size={18} name="search" color="#8930e8" />
                    <View>

                    <TextInput style={{height: 40, width: 200, marginLeft: 6}} placeholder="Search" />
                    </View>
                </View>

                {/* Header FlatList */}
                <View style={{height: 150}}>
                    <FlatList
                        data={options}
                        renderItem={this.renderOptions}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false} />
                </View>


                {/* body ScrollView */}
                
                <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 6}}>
                <View style={{marginLeft: 20,}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>Our Services</Text>
                    <Text style={{fontSize: 12,}}>Select Service category</Text>
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("AllServics")} style={{marginRight: 20}}>
                    <Text style={{fontSize: 14}}>View All</Text>
                </TouchableOpacity>
                </View>

                <View style={{height: 180,}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                <View style={{height: 150, alignSelf: 'center', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 40}}>
                   <TouchableOpacity activeOpacity={0.6} style={{width: 130, height: 136, backgroundColor: "#a39cf4", borderRadius: 14, elevation: 10}}>
                        <Text  style={{fontWeight: "bold", paddingTop: 10, paddingLeft: 12, fontSize: 16, color: 'white'}}>Laptop</Text>
                        <Text  style={{fontWeight: "bold", paddingLeft: 12, fontSize: 16, color: 'white'}}>Service</Text>
                    <View style={{alignItems: 'center', alignSelf: 'center', justifyContent: 'center', marginTop: 6, backgroundColor: 'white', width: 60, height: 60, borderRadius: 12}}>
                        <LaptopIcon name="laptop" size={36} color="#a39cf4"/>
                    </View>
                   </TouchableOpacity>

                   <TouchableOpacity activeOpacity={0.6} style={{width: 130, height: 136, backgroundColor: "#a39cf4", borderRadius: 14, elevation: 10, marginLeft: 10}}>
                   <Text style={{fontWeight: "bold", paddingTop: 10, paddingLeft: 12, fontSize: 16, color: 'white'}}>Fan</Text>
                        <Text style={{fontWeight: "bold", paddingLeft: 12, fontSize: 16, color: 'white'}}>Service</Text>
                    <View style={{alignItems: 'center', alignSelf: 'center', justifyContent: 'center', marginTop: 6, backgroundColor: 'white', width: 60, height: 60, borderRadius: 12}}>
                        <FanIcon name="fan" size={36} color="#a39cf4"/>
                    </View>
                   </TouchableOpacity>

                   <TouchableOpacity activeOpacity={0.6} style={{width: 130, height: 136, backgroundColor: "#a39cf4", borderRadius: 14, elevation: 10, marginLeft: 10}}>
                   <Text style={{fontWeight: "bold", paddingTop: 10, paddingLeft: 12, fontSize: 16, color: 'white'}}>Washer</Text>
                        <Text style={{fontWeight: "bold", paddingLeft: 12, fontSize: 16, color: 'white'}}>Service</Text>
                    <View style={{alignItems: 'center', alignSelf: 'center', justifyContent: 'center', marginTop: 6, backgroundColor: 'white', width: 60, height: 60, borderRadius: 12}}>
                        <WashingIcon name="washing-machine" size={36} color="#a39cf4"/>
                    </View>
                   </TouchableOpacity>

                   <TouchableOpacity activeOpacity={0.6} style={{width: 130, height: 136, backgroundColor: "#a39cf4", marginRight: 10, borderRadius: 14, elevation: 10, marginLeft: 10}}>
                   <Text style={{fontWeight: "bold", paddingTop: 10, paddingLeft: 12, fontSize: 16, color: 'white'}}>AC</Text>
                        <Text style={{fontWeight: "bold", paddingLeft: 12, fontSize: 16, color: 'white'}}>Service</Text>
                    <View style={{alignItems: 'center', alignSelf: 'center', justifyContent: 'center', marginTop: 6, backgroundColor: 'white', width: 60, height: 60, borderRadius: 12}}>
                        <AirIcon name="air" size={32} color="#a39cf4"/>
                    </View>
                   </TouchableOpacity>

                   <TouchableOpacity activeOpacity={0.6} style={{width: 130, height: 136, backgroundColor: "#a39cf4", borderRadius: 14, elevation: 10,}}>
                   <Text style={{fontWeight: "bold", paddingTop: 10, paddingLeft: 12, fontSize: 16, color: 'white'}}>TV</Text>
                        <Text style={{fontWeight: "bold", paddingLeft: 12, fontSize: 16, color: 'white'}}>Service</Text>
                    <View style={{alignItems: 'center', alignSelf: 'center', justifyContent: 'center', marginTop: 6, backgroundColor: 'white', width: 60, height: 60, borderRadius: 12}}>
                        <TvIcon name="tv" size={32} color="#a39cf4"/>
                    </View>
                   </TouchableOpacity>

                   <TouchableOpacity activeOpacity={0.6} style={{width: 130, height: 136, backgroundColor: "#a39cf4", borderRadius: 14, elevation: 10, marginLeft: 10}}>
                   <Text style={{fontWeight: "bold", paddingTop: 10, paddingLeft: 12, fontSize: 16, color: 'white'}}>Car</Text>
                        <Text style={{fontWeight: "bold", paddingLeft: 12, fontSize: 16, color: 'white'}}>Service</Text>
                    <View style={{alignItems: 'center', alignSelf: 'center', justifyContent: 'center', marginTop: 6, backgroundColor: 'white', width: 60, height: 60, borderRadius: 12}}>
                        <CarIcon name="car-crash" size={32} color="#a39cf4"/>
                    </View>
                   </TouchableOpacity>

                   </View>
                   </ScrollView>
                </View> 

                <View style={{flexDirection: 'row',alignSelf: 'center', justifyContent: 'space-between', marginTop: 10, height: 120, width:"94%", borderRadius: 12, backgroundColor: '#d4d1fa'}}>

                <Image style={{width: 180, height: 120,  borderRadius: 4}} source={require('../img/undraw_best_place_r685.png')} />

                <View style={{width: 200, alignSelf: 'center', marginTop: 10, paddingLeft: 8}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>Let's Order</Text>
                    <Text style={{fontSize: 12,}}>Check your order detail</Text>
                    <Text style={{fontSize: 12,}}>and wait for our service.</Text>
                </View>
            </View>

            <View style={{marginLeft: 20, marginTop: 20}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>News</Text>
                    <Text style={{fontSize: 12,}}>Stay up to date for our lastest news</Text>
                </View>

                <View style={{flexDirection: 'row', width: "95%", backgroundColor: "#a866ee", alignSelf: 'center', height: 100, marginTop: 20,borderRadius: 12,}}>
                <Image style={{width: 180, height: 120, borderRadius: 4}} source={require('../img/undraw_news_go0e.png')} />

                <View style={{flex: 1, marginTop: 20, paddingLeft: 10, flexWrap: 'wrap', backgroundColor: 'red'}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>lastest Offer</Text>
                    <Text style={{fontSize: 12, color: 'white'}}>There is 5% off on our laptop service</Text>
                    
                </View>
                </View>
                </ScrollView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: { 
        height: 200, 
        width: '100%',
        backgroundColor: '#a39cf4',   
        borderBottomLeftRadius: 60, 
        borderBottomRightRadius: 60, 
        flexDirection: 'row-reverse', 
        justifyContent: 'space-between',
        position: 'absolute',
    },
    img: {
        marginTop: 22, 
        marginRight: 16
    },
    textContainer: {
        marginTop: 22,
        marginLeft: 20
    },
    searchContainer: {
        backgroundColor: 'white',
        width: 240,
        marginTop: 90,
        borderRadius: 10,
        marginLeft: 20,
        flexDirection: 'row',
    },
    messageContainer: {
        width: 80,
        height: 110,
        backgroundColor: '#8930e8',
        marginTop: 20,
        borderRadius: 10,
        marginLeft: 20,
        elevation: 10,
        position: 'relative'
    },
    iconContainer: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
        backgroundColor: "white",
        width: 40,
        height: 40,
        borderRadius: 8,
    },
    message: {
        alignItems: 'center', 
        justifyContent: 'center', 
        marginTop: 16,
    },
})

export default HomeScreen;