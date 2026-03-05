import React from "react";
import {View , Text , StyleSheet, FlatList} from 'react-native'

class UsersScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            users: [],
            loading: true,
        };
    }

    async componentDidMount(){
        try{
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const jsonData = await res.json();
            this.setState({users : jsonData, loading: false});

        }catch (error){
            console.log("Fetching error" , error)
            this.setState({loading: false});
        }
    }

    render(){
        const {users, loading} = this.state;

        if (loading) {
            return (
                <View style={[styles.container, {justifyContent: 'center', alignItems: 'center'}]}>
                    <Text style={{fontSize: 18}}>Loading users...</Text>
                </View>
            );
        }

        return(
            <View style={styles.container}>
                <Text style={styles.title}>Users</Text>

                <FlatList 
                data={users}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item})=> (
                    <View style={styles.item}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.username}>@{item.username}</Text>
                        <Text style={styles.email}>{item.email}</Text>
                        <Text style={styles.phone}>{item.phone}</Text>
                        <View style={styles.row}>
                            <Text style={styles.label}>City: </Text>
                            <Text style={styles.value}>{item.address.city}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.label}>Company: </Text>
                            <Text style={styles.value}>{item.company.name}</Text>
                        </View>
                        <Text style={styles.website}>{item.website}</Text>
                    </View>
                )}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {flex: 1 , padding: 16},
    title: {fontSize: 20 , marginBottom: 12, fontWeight: 'bold'},
    item: {paddingVertical: 12 , borderBottomWidth: 1, borderBottomColor: '#ddd'},
    name: {fontSize: 16, fontWeight: 'bold', marginBottom: 4, color: '#333'},
    username: {fontSize: 13, color: '#666', marginBottom: 6},
    email: {fontSize: 12, color: '#0066cc', marginBottom: 4},
    phone: {fontSize: 12, color: '#666', marginBottom: 8},
    row: {flexDirection: 'row', marginBottom: 4},
    label: {fontSize: 12, fontWeight: '600', color: '#555'},
    value: {fontSize: 12, color: '#333', flex: 1},
    website: {fontSize: 12, color: '#0066cc', marginTop: 8, fontStyle: 'italic'},
})

export default UsersScreen;
