import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import Nav from "../components/Home/Nav";
import ListItem from "../components/Home/ListItems";

const Home = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <Nav/>
      <ListItem/>
    </SafeAreaView>
  );
};

export default Home;
