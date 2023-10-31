import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import CardImage from "./CardImage.js";

const ImageList = ({ photos }) => {
  const renderItem = ({ item }) => (
    <CardImage image={item} />
  );

  return (
    <View>
      <FlatList
        data={photos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical:30,
  },
  image: {},
});

export default ImageList;
