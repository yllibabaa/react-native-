import React from "react";
import {Text,View,StyleSheet, FlatList} from 'react-native';
import data from '../assets/data.json'

const names =()=>{
    return (
        <View>
            <Text>Dummy Names</Text>
            <FlatList
            data={data}
            renderItem={({item})=>{
                return(
                    <View>
                        <Text>{item.name}</Text>
                        <Text>{item.bio}</Text>
                    </View>)
            }}></FlatList>
        </View>
    );
};


export default names;

