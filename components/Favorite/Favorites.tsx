import React from "react";
import {StyleSheet,Text,View,SectionList,FlatList, TouchableOpacity, Image, ScrollView} from "react-native";

import { Feather, MaterialIcons } from "@expo/vector-icons";

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
          <Text style={styles.detalle}>Fueron agragados {item.cantidad} productos</Text>
          <Text style={styles.date}>{item.time}
            <MaterialIcons name="favorite" style={styles.favorite} />
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

const FavoriteListItems = () => {
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

export default FavoriteListItems;

const SECTIONS = [
  {
    horizontal: true,
    data: [
      {
        key: "1",
        uri: "https://3.bp.blogspot.com/-lehgFiVpvy0/W0-yXvkcVaI/AAAAAAAIiuk/Rpj5vNJige86b0cX4Kxg0OMWkn-oUx8-gCLcBGAs/s1600/Cardboard_Box_Clip_Art_PNG_Image-1279.png",
        time: "02:00 pm",
        cantidad: "10",
      },
      {
        key: "2",
        uri: "https://3.bp.blogspot.com/-lehgFiVpvy0/W0-yXvkcVaI/AAAAAAAIiuk/Rpj5vNJige86b0cX4Kxg0OMWkn-oUx8-gCLcBGAs/s1600/Cardboard_Box_Clip_Art_PNG_Image-1279.png",
        time: "10:00 am",
        cantidad: "40",
      },
      {
        key: "3",
        uri: "https://3.bp.blogspot.com/-lehgFiVpvy0/W0-yXvkcVaI/AAAAAAAIiuk/Rpj5vNJige86b0cX4Kxg0OMWkn-oUx8-gCLcBGAs/s1600/Cardboard_Box_Clip_Art_PNG_Image-1279.png",
        time: "01:00 pm",
        cantidad: "20",
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
    color: 'red',
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
