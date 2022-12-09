import React,{useEffect,useState} from "react";
import {StyleSheet,Text,View,SectionList,FlatList, TouchableOpacity, Image, ScrollView} from "react-native";
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
            uri: item.uri,
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

const ListItems = () => {
  const [trending, setTrending] = useState<ListProductsResponse>({
    data: [],
    metadata: {
      nextPage: 1,
      currentPage: 1,
      perPage: 1,
    },
  });

  const getTrendingRecipes = async () => {
    const response = await client.get<ListProductsResponse>("products");
    setTrending(response);
  };

  useEffect(() => {
    getTrendingRecipes();
  }, []);

  

  return (
    <View>
        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          sections={SECTIONS}
          listKey="Main"
          renderSectionHeader={({ section }) => (
            <>
              {section ? (
                <FlatList
                  data={section.data}
                  renderItem={({ item }) => <ListItem item={item} />}
                  showsHorizontalScrollIndicator={false}
                />
              ) : null}
            </>
          )}
          renderItem={({ item, section }) => {
            if (section) {
              return null;
            }
            return <ListItem item={item} />;
          }}
        
        />
      </View>
  );
};

export default ListItems;

const SECTIONS = [
  {
    horizontal: false,
    data: [
      {
        key: "1",
        uri: "https://3.bp.blogspot.com/-lehgFiVpvy0/W0-yXvkcVaI/AAAAAAAIiuk/Rpj5vNJige86b0cX4Kxg0OMWkn-oUx8-gCLcBGAs/s1600/Cardboard_Box_Clip_Art_PNG_Image-1279.png",
        categoria: "Dolor",
        cantidad: "10",
        name:'Acetaminofen',
        detalle:'Pastillas para el dolor de cuerpo',
      },
      {
        key: "2",
        uri: "https://3.bp.blogspot.com/-lehgFiVpvy0/W0-yXvkcVaI/AAAAAAAIiuk/Rpj5vNJige86b0cX4Kxg0OMWkn-oUx8-gCLcBGAs/s1600/Cardboard_Box_Clip_Art_PNG_Image-1279.png",
        categoria: "Dolor",
        cantidad: "10",
        name:'Acetaminofen',
        detalle:'Pastillas para el dolor de cuerpo',
      },
      {
        key: "3",
        uri: "https://3.bp.blogspot.com/-lehgFiVpvy0/W0-yXvkcVaI/AAAAAAAIiuk/Rpj5vNJige86b0cX4Kxg0OMWkn-oUx8-gCLcBGAs/s1600/Cardboard_Box_Clip_Art_PNG_Image-1279.png",
        categoria: "Dolor",
        cantidad: "10",
        name:'Acetaminofen',
        detalle:'Pastillas para el dolor de cuerpo',
      },
    ],
  },
];

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    borderRadius: 15,
    marginTop: 15,
    padding: 10,
    backgroundColor: '#E7FFFF',
    flex: 1,
  },
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
