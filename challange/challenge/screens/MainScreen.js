
import React from "react";
import {Text, StyleSheet, View, Button} from 'react-native';
import { FlatList } from "react-native-web";

const people = [
    {name: "Leart", surname: "Obertinca", birthDate: "03.01.2009"},
    {name: "Olis", surname: "Jashari", birthDate: "23.10.2007"},
    {name: "Usame", surname: "Mjekiqi", birthDate: "21.05.2008"},
    {name: "Yll", surname: "Ahmeti", birthDate: "16.05.2009"}
];

const MainScreen = () => {
    return (
        <View>
            <FlatList
                data={people}
                renderItem={({item}) => {
                    return <View>   
                        <Text>{item.name} {item.surname} {item.birthDate}</Text>
                    </View>
                }}
            />
        </View>
    );
}

export default MainScreen;
