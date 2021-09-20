import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FontAwesome5, Feather, AntDesign } from '@expo/vector-icons'

//import Screens
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function BottomNavigatior() {
    return (
        <Tab.Navigator
        tabBarOptions={{
            showLabel: false,
            // Floating Tab Bar...
            style: {
              backgroundColor: 'white',
              position: 'absolute',
              bottom: 10,
              marginHorizontal: 20,
              // Max Height...
              height: 60,
              borderRadius: 10,
              // Shadow...
              shadowColor: '#000',
              shadowOpacity: 0.06,
              shadowOffset: {
                width: 10,
                height: 10
              },
              paddingHorizontal: 20,
            }
        }}>
            <Tab.Screen name="Home" component={HomeScreen}
            options={{
                tabBarIcon: ({ focused }) => (
                  <View style={{
                    // centring Tab Button...
                    position: 'absolute',
                    top: 20
                  }}>
                    <AntDesign
                      name="home"
                      size={22}
                      color={focused ? 'red' : 'gray'}
                    ></AntDesign>
                  </View>
                )
              }}></Tab.Screen>
            <Tab.Screen name="Profile" component={ProfileScreen}
            options={{
                tabBarIcon: ({ focused }) => (
      
                  <TouchableOpacity>
                    <View style={{
                      width: 55,
                      height: 55,
                      backgroundColor: 'red',
                      borderRadius: 30,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginBottom: Platform.OS == "android" ? 50 : 30
                    }}>
                      <FontAwesome5
                      name="search"
                      size={20}
                      color={focused ? 'red' : 'white'}
                    ></FontAwesome5>
                    </View>
                  </TouchableOpacity>
                )
              }}
            
            ></Tab.Screen>
              <Tab.Screen name="Profile1" component={ProfileScreen}
            options={{
                tabBarIcon: ({ focused }) => (
                  <View style={{
                    // centring Tab Button...
                    position: 'absolute',
                    top: 20
                  }}>
                    <Feather
                      name="user"
                      size={22}
                      color={focused ? 'red' : 'gray'}
                    ></Feather>
                  </View>
                )
              }}></Tab.Screen>
        </Tab.Navigator>
    )
}

