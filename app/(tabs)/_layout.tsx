import { Tabs } from 'expo-router';
import React from 'react';

const TabElements = ({focus}: any)=>{
  if(focus){
    return (
      <></>
    )
  }
  return (
    <>
    </>
  )

}


const TabIcon = () => {
  return (
    <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#FE7743',
          tabBarInactiveTintColor: '#666666',
          tabBarItemStyle: {
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          },
          tabBarStyle: {
            backgroundColor: "#000000",
            borderRadius: 50,
            marginHorizontal: 20,
            marginBottom: 36,
            height: 52,
            position: "absolute",
            overflow: "hidden",
            borderWidth: 2,
            borderColor: "#FE7743",
            shadowColor: "#FE7743",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowRadius: 2,
            elevation: 4,
          },
        }}>
      <Tabs.Screen
      name='index'
      options={{
        headerShown: false,
        
      }}
      />
      <Tabs.Screen
      name='buddy'
      options={{
        headerShown: false
      }}/>
      <Tabs.Screen
      name='profile'
      options={{
        headerShown: false
      }}/>
    <Tabs.Screen
      name='goals'
      options={{
        headerShown: false
      }}/>
    </Tabs>
  )
}

export default TabIcon