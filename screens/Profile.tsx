import { View, Text } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import ClientList from "../components/client/Client";
import Nav from "../components/Home/Nav";

const Profile = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <Nav/>
      <Text style={{fontSize:20,}}>Client</Text>
      <ClientList/>
    </SafeAreaView>
  );
};

export default Profile;
