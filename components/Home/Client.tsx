import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, ScrollView, Image, } from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";

import { HttpClient } from "../../services/http.service";
import { ListClinetsResponse } from "../../interfaces";

const client = new HttpClient();

const ListItem = ({ item }: any) => {
  return (
    <View style={styles.shawdon}>
      <View style={styles.boxs}>
        <Text style={styles.text}>{item.name}

        </Text>
        <View style={styles.info}>
          <Image
            source={{
              uri: item.avatar,
            }}
            style={styles.itemPhoto}
          />
          <View style={{ alignSelf: 'flex-end' }}>
            <Text style={styles.name}> {item.bibliografia}</Text>
          </View>
        </View>
      </View>
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
    <ScrollView>
      <FlatList
      horizontal
        data={trending.data}
        renderItem={({ item }) => <ListItem item={item} />}
        showsHorizontalScrollIndicator={false}
      />
    </ScrollView>
  );
};

export default ClientList;

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
    fontSize: 20,
    marginLeft: 12,
    paddingBottom: 10
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
});
