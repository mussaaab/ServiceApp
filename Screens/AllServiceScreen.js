import React from'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList} from 'react-native';

import KeyboardIcon from 'react-native-vector-icons/FontAwesome5';
import HardDriveIcon from 'react-native-vector-icons/Feather';
import BedIcon from 'react-native-vector-icons/Ionicons';
import CameraIcon from 'react-native-vector-icons/FontAwesome5';



const data = [
    {
    key: 1,
    title: "Keyboard Service",
    text: 'Including repair, set and clean the keyboard',
    price: 10,
    icon: <KeyboardIcon name="keyboard" size={40} color="#9538ff" />
    },
    {
    key: 2,
    title: "Hard Drive Service",
    text: 'Including repair, set and clean the hard drive',
    price: 20,
    icon: <HardDriveIcon name="hard-drive" size={40} color="#9538ff" />
    },
    {
    key: 3,
    title: "Furniture Service",
    text: 'Including repair, set and clean the furniture',
    price: 100,
    icon: <BedIcon name="ios-bed" size={40} color="#9538ff"/>
    },
    {
    key: 4,
    title: "Camera Service",
    text: 'Including repair, set and clean the camera',
    price: 40,
    icon: <CameraIcon name="camera" size={40} color="#9538ff"/>
    },
]

class AllServicesScreen extends React.Component {
    static navigationOptions={
        title: "",
       headerStyle: {
           backgroundColor: 'transparent',
           elevation:0 
       }
    } 

    state = {
        count: 0
    }



    increaseCount = () => {
        const { count } = this.state;
        this.setState({
            count: count + 1
        })
    }

    decrementCount = () => {
        console.log('pressed')
        const { count } = this.state;
        this.setState({
            count: count - 1
        })

    }    

    renderHeader(){
        return(
            <View style={styles.header}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Services</Text>
            </View>

            </View>
        )
    }

    serviceData=({item})=> {
        return (
            <View key={`${item.key}`}>
                <View style={styles.mainContainer}>
                    <View style={styles.iconContainer}>
                        {item.icon}
                    </View>

                    <View style={styles.textContainer}>
                        <Text style={{fontSize: 18, fontWeight: 'bold', flexWrap: 'wrap',}}>{item.title}</Text>
                            <Text>{item.text}</Text>

                    <View style={styles.paymntContainer}>
                        <Text style={{fontSize: 16, fontWeight: 'bold'}}>${item.price} / Unit</Text>

                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                        <TouchableOpacity onPress={this.increaseCount} style={styles.highContainer}>
                            <Text style={{fontSize: 18, color: 'white'}}>+</Text>
                        </TouchableOpacity>
                                
                    <View style={styles.viewPaymnt}>
                        <Text>{ this.state.count }</Text>
                    </View>

                    <TouchableOpacity style={styles.lowContainer}>
                        <Text style={{fontSize: 22, color: 'white', fontWeight: 'bold'}}>-</Text>
                    </TouchableOpacity>
                    </View>
                    </View>
                    </View>
                </View>
           </View>
        )
    }

    // renderallServiceData() {
    //     console.log("hello")
    //     return (
    //         <View>
    //             {data.map(data => this.serviceData(data))}
    //         </View>
        
    //     )
    // }



    render(){
        return(
            <View style={styles.container}>

                {this.renderHeader()}
                
                <View style={styles.body}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>Select Service Category</Text>
            </View>
                
            <FlatList 
            data={data}
            renderItem={this.serviceData} />
            
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        width: "100%",
        height: 60
    }, 
    textContainer: {
        height: 60,
        marginTop: 10,
        flex: 1,
        marginLeft: 10
    },
    title: {
        paddingLeft: 20,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#8930e8'
    },
    body:{
        width: '90%',
        alignSelf: 'center',
        marginTop: 20,
        height: 40
    },
    mainContainer: {
        width: '90%',
        height: 160,
        alignSelf: 'center',
        backgroundColor: '#E3E3E3',
        marginTop: 20,
        borderRadius: 12,
        flexDirection: 'row',
        shadowColor: 'red',
        elevation: 6
    },
    iconContainer: {
        backgroundColor: 'whitesmoke',
        width: 80,
        height: 70,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 14,
        marginLeft: 20,
        marginTop: 26
    },
    textcontainer: {
        marginLeft: 18,
        marginTop: 20,
    },
    paymntContainer: {
        marginTop: 40,
        flexDirection: 'row',
        alignItems: 'center'
    },
    highContainer: {
        height: 30,
        width: 38,
        backgroundColor: '#B363FF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6
    },
    viewPaymnt: {
        width: 40,
        height: 30,
        backgroundColor: 'whitesmoke',
        marginLeft: 4,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    lowContainer: {
        height: 30,
        width: 38,
        marginLeft: 4,
        backgroundColor: '#C88EFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6
    }
})

export default AllServicesScreen;