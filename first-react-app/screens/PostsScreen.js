import React from "react";
import {View , Text , StyleSheet, FlatList} from 'react-native'

class PostsScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            posts: [],
            loading: true,
        };
    }

    async componentDidMount(){
        try{
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const jsonData = await res.json();
            this.setState({posts : jsonData, loading: false});

        }catch (error){
            console.log("Fetching error" , error)
            this.setState({loading: false});
        }
    }

    render(){
        const {posts, loading} = this.state;

        if (loading) {
            return (
                <View style={[styles.container, {justifyContent: 'center', alignItems: 'center'}]}>
                    <Text style={{fontSize: 18}}>Loading posts...</Text>
                </View>
            );
        }

        return(
            <View style={styles.container}>
                <Text style={styles.title}>Posts</Text>

                <FlatList 
                data={posts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item})=> (
                    <View style={styles.item}>
                        <Text>{item.id}</Text>
                        <Text>{item.title}</Text>
                        </View>
                )}
                />
            </View>
        );
    }
}

        return(
            <View style={styles.container}>
                <Text style={styles.title}>Posts</Text>

                <FlatList 
                data={posts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item})=> (
                    <View style={styles.item}>
                        <Text>{item.id}</Text>
                        <Text>{item.title}</Text>
                        </View>
                )}
                />
            </View>
        );
    
   
    }
}
const styles = StyleSheet.create({
    container: {flex: 1 , padding: 16},
    title: {fontSize: 20 , marginBottom: 12},
    item: {paddingVertical:10 , borderBottomWidth: 1},
})

export default PostsScreen;