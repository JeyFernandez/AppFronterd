import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, } from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";

import { HttpClient } from "../../services/http.service";
import { ListClinetsResponse } from "../../interfaces";

const client = new HttpClient();

const ListItem = ({ item }: any) => {
  return (
    <View style={styles.container}>
        <Text style={styles.client}> {item.name}</Text>
    </View>
  );
};

const ClientList = () => {
  const [trending, setTrending] = useState<ListClinetsResponse>({
    data: [],
    metadata:{
      nextPage: 1,
      currentPage: 1,
      perPage: 1,
    },
  });

  const getTrendingClient = async () => {
    const response = await client.get<ListClinetsResponse>("clients");
    setTrending(response);
  };

  useEffect(() => {
    getTrendingClient();
  }, []);

  return (
    <View>
      <FlatList
      horizontal
        data={trending.data}
        renderItem={({ item }) => <ListItem item={item} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ClientList;

const styles = StyleSheet.create({
  container: {
  },
  client: {
    fontWeight: "bold",
    color: '#28151D',
    fontSize: 20,
    marginLeft: 12,
    paddingBottom: 10
  },
});
