import React from "react";
import {View , Text , StyleSheet, FlatList} from 'react-native'

class CommentsScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            comments: [],
            loading: true,
        };
    }

    async componentDidMount(){
        try{
            const res = await fetch("https://jsonplaceholder.typicode.com/comments");
            const jsonData = await res.json();
            this.setState({comments : jsonData, loading: false});

        }catch (error){
            console.log("Fetching error" , error)
            this.setState({loading: false});
        }
    }

    render(){
        const {comments, loading} = this.state;

        if (loading) {
            return (
                <View style={[styles.container, {justifyContent: 'center', alignItems: 'center'}]}>
                    <Text style={{fontSize: 18}}>Loading comments...</Text>
                </View>
            );
        }

        return(
            <View style={styles.container}>
                <Text style={styles.title}>Comments</Text>

                <FlatList 
                data={comments}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item})=> (
                    <View style={styles.item}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.email}>{item.email}</Text>
                        <Text style={styles.body}>{item.body}</Text>
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
    item: {paddingVertical: 10 , borderBottomWidth: 1, borderBottomColor: '#ddd'},
    name: {fontSize: 16, fontWeight: 'bold', marginBottom: 4},
    email: {fontSize: 12, color: '#666', marginBottom: 6},
    body: {fontSize: 14, color: '#333', lineHeight: 20},
})

export default CommentsScreen;
