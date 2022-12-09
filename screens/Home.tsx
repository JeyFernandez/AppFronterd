import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import Nav from "../components/Home/Nav";
import ListItems from "../components/Home/ListItems";

const Home = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <Nav/>
      <ListItems />
    </SafeAreaView>
  );
};

export default Home;
