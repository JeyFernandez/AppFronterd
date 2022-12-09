import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, } from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";

import { HttpClient } from "../../services/http.service";
import { ListProductsResponse } from '../../interfaces/index';


const client = new HttpClient();

const ListItem = ({ item }: any) => {
  return (
    <View style={styles.shawdon}>
      <View style={styles.boxs}>
        <Text style={styles.text}>{item.cantidad} Productos
          <Feather name="box" size={22} color="#FF8700" />
        </Text>
        <View style={styles.info}>
          <Image
            source={{
              uri: "https://3.bp.blogspot.com/-lehgFiVpvy0/W0-yXvkcVaI/AAAAAAAIiuk/Rpj5vNJige86b0cX4Kxg0OMWkn-oUx8-gCLcBGAs/s1600/Cardboard_Box_Clip_Art_PNG_Image-1279.png",
            }}
            style={styles.itemPhoto}
          />
          <View style={{ alignSelf: 'flex-end' }}>
            <Text style={styles.name}> {item.name}</Text>
            <Text style={styles.detalle}> {item.detalle}</Text>
            <Text style={styles.date}>{item.categoria}
              <MaterialIcons name="favorite-border" style={styles.favorite} />
            </Text>
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

const Products = () => {
  const [trending, setTrending] = useState<ListProductsResponse>({
    data: [],
    metadata:{
        nextPage: 1,
        currentPage: 1,
        perPage: 1,
      },
  });

  const getTrending = async () => {
    const response = await client.get<ListProductsResponse>("products");
    setTrending(response);
  };

  useEffect(() => {
    getTrending();
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

export default Products;

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
  favorite: {
    color: '#8A8A8A',
    fontSize: 30,
    alignSelf: 'flex-end',
  },
  btn: {
    backgroundColor: '#4885FF',
    padding: 8,
    color: '#fff',
    borderRadius: 8,
    alignSelf: 'flex-end',
  },
});
