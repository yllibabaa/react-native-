
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import PostsScreen from './screens/PostsScreen';
import CommentsScreen from './screens/commentsScreen';
import AlbumsScreen from './screens/albumsScreen';
import PhotoScreen from './screens/photoScreen';
import UsersScreen from './screens/usersScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: true,
          tabBarActiveTintColor: '#007AFF',
        }}
      >
        <Tab.Screen
          name="Posts"
          component={PostsScreen}
          options={{
            title: 'Posts',
            tabBarLabel: 'Posts',
          }}
        />
        <Tab.Screen
          name="Comments"
          component={CommentsScreen}
          options={{
            title: 'Comments',
            tabBarLabel: 'Comments',
          }}
        />
        <Tab.Screen
          name="Albums"
          component={AlbumsScreen}
          options={{
            title: 'Albums',
            tabBarLabel: 'Albums',
          }}
        />
        <Tab.Screen
          name="Photos"
          component={PhotoScreen}
          options={{
            title: 'Photos',
            tabBarLabel: 'Photos',
          }}
        />
        <Tab.Screen
          name="Users"
          component={UsersScreen}
          options={{
            title: 'Users',
            tabBarLabel: 'Users',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {  
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextStyle: {
    color: 'blue',
    fontSize: 40,
  }
});