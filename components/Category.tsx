import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, } from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";

import { HttpClient } from "../services/http.service";
import { ListCategoriesResponse } from "../interfaces";

const client = new HttpClient();

const ListItem = ({ item }: any) => {
  return (
    <View style={styles.shawdon}>
      <View style={styles.boxs}>
        <Text style={styles.text}>{item.name}
        <MaterialIcons name="category" size={24} color="#FF8700" />
        </Text>
        <View style={styles.info}>
        <Text style={styles.date}>{item.description}</Text>
          <View style={{ alignSelf: 'flex-end' }}>
            <TouchableOpacity>
              <Text style={styles.btn}>
                Ver mas <Feather name="arrow-right" />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const CategoryList = () => {
  const [trending, setTrending] = useState<ListCategoriesResponse>({
    data: [],

  });

  const getTrendingCategory = async () => {
    const response = await client.get<ListCategoriesResponse>("categories");
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
  shawdon: {
    shadowColor: "#000",
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 3,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginTop: 15,
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 10,
  },
  boxs: {
    padding: 10,
    paddingVertical: 12,
    borderRadius: 10,
  },
  text: {
    fontWeight: "bold",
    color: '#28151D',
    fontSize: 30,
    marginLeft: 12,
    paddingBottom: 10
  },
  date: {
    color: '#28151D',
    paddingTop: 10,
    fontSize: 40,
  },
  name: {
    color: '#28151D',
    paddingTop: 10,
    fontSize: 25,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  itemPhoto: {
    margin: 5,
    width: 90,
    height: 90,
  },
  detalle: {
    fontSize: 20,
    color: '#757575',
  },
  btn: {
    backgroundColor: '#4885FF',
    padding: 8,
    color: '#fff',
    borderRadius: 8,
    alignSelf: 'flex-end',
  },
});
