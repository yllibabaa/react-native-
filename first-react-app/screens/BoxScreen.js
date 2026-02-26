// import React from 'react';
// import {Text,View,StyleSheet} from 'react-native';

// // const BoxScreen =()=>{
// //     return <Text>BoxScreen</Text>
// // }


// // const styles=StyleSheet.create({})


// // const BoxScreen =()=>{
// //     return (
// //         <View style={{flex:1,flecDirection:'row',justifyContent:'space-between'}}>
         
// //         </View>
// //     )
// // }   



// //  const BoxScreen =()=>{
// //      return (
// //          <View style={styles.container}>
// //             <text>BoxScreen</text>
         
// //          </View>
// //      )
// //  }   




// export default BoxScreen;
import React from 'react';
import {Text,View,StyleSheet} from 'react-native';

const BoxScreen =()=>{
    return(
        <View style={{flex:1, flexDirection:'row'}}>
            <View style={{height:100, width:100, backgroundColor:'red'}}/>
            <View style={{height:100, width:100, backgroundColor:'blue'}}/>
            <View style={{height:100, width:100, backgroundColor:'green'}}/>
        </View>
    );   
};


export default BoxScreen;

