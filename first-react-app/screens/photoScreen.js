import React from "react";
import {View , Text , StyleSheet, FlatList, Image} from 'react-native'

class PhotoScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            photos: [],
            loading: true,
        };
    }

    async componentDidMount(){
        try{
            const res = await fetch("https://jsonplaceholder.typicode.com/photos");
            const jsonData = await res.json();
            this.setState({photos : jsonData, loading: false});

        }catch (error){
            console.log("Fetching error" , error)
            this.setState({loading: false});
        }
    }

    render(){
        const {photos, loading} = this.state;

        if (loading) {
            return (
                <View style={[styles.container, {justifyContent: 'center', alignItems: 'center'}]}>
                    <Text style={{fontSize: 18}}>Loading photos...</Text>
                </View>
            );
        }

        return(
            <View style={styles.container}>
                <Text style={styles.title}>Photos</Text>

                <FlatList 
                data={photos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item})=> (
                    <View style={styles.item}>
                        <Image 
                            source={{uri: item.thumbnailUrl}}
                            style={styles.thumbnail}
                        />
                        <View style={styles.content}>
                            <Text style={styles.id}>ID: {item.id}</Text>
                            <Text style={styles.albumId}>Album ID: {item.albumId}</Text>
                            <Text style={styles.itemTitle} numberOfLines={2}>{item.title}</Text>
                        </View>
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
    item: {paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#ddd', flexDirection: 'row', alignItems: 'flex-start'},
    thumbnail: {width: 80, height: 80, marginRight: 12, borderRadius: 4},
    content: {flex: 1},
    id: {fontSize: 12, color: '#999', marginBottom: 4},
    albumId: {fontSize: 12, color: '#999', marginBottom: 6},
    itemTitle: {fontSize: 14, color: '#333', fontWeight: '500', lineHeight: 18},
})

export default PhotoScreen;
