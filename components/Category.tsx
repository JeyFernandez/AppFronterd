import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, } from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";

import { HttpClient } from "../services/http.service";
import { ListCategoriesResponse } from '../interfaces/index';

const client = new HttpClient();

const ListItem = ({ item }: any) => {
  return (
    <View style={styles.container}>
        <Text style={styles.category}> {item.name}</Text>
    </View>
  );
};

const CategoryList = () => {
  const [trending, setTrending] = useState<ListCategoriesResponse>({
    data: [],

  });

  const getTrendingCategory = async () => {
    const response = await client.get<ListCategoriesResponse>("products");
    setTrending(response);
  };

  useEffect(() => {
    getTrendingCategory();
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

export default CategoryList;

const styles = StyleSheet.create({
  container: {
  },
  category: {
    fontWeight: "bold",
    color: '#28151D',
    fontSize: 20,
    marginLeft: 12,
    paddingBottom: 10
  },
});
