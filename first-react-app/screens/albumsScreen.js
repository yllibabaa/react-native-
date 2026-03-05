import React from "react";
import {View , Text , StyleSheet, FlatList} from 'react-native'

class AlbumsScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            albums: [],
            loading: true,
        };
    }

    async componentDidMount(){
        try{
            const res = await fetch("https://jsonplaceholder.typicode.com/albums");
            const jsonData = await res.json();
            this.setState({albums : jsonData, loading: false});

        }catch (error){
            console.log("Fetching error" , error)
            this.setState({loading: false});
        }
    }

    render(){
        const {albums, loading} = this.state;

        if (loading) {
            return (
                <View style={[styles.container, {justifyContent: 'center', alignItems: 'center'}]}>
                    <Text style={{fontSize: 18}}>Loading albums...</Text>
                </View>
            );
        }

        return(
            <View style={styles.container}>
                <Text style={styles.title}>Albums</Text>

                <FlatList 
                data={albums}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item})=> (
                    <View style={styles.item}>
                        <Text style={styles.id}>ID: {item.id}</Text>
                        <Text style={styles.userId}>User ID: {item.userId}</Text>
                        <Text style={styles.itemTitle}>{item.title}</Text>
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
    id: {fontSize: 12, color: '#999', marginBottom: 4},
    userId: {fontSize: 12, color: '#999', marginBottom: 6},
    itemTitle: {fontSize: 15, color: '#333', fontWeight: '500', lineHeight: 20},
})

export default AlbumsScreen;
