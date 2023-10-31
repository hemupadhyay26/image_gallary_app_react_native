import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { Input, Button } from "react-native-elements";
import { getImages } from "../api/pexels";
import ImageList from "../components/ImageList";
import { FAB } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({ openSearch }) => {
  const [photos, setPhotos] = useState([]);
  const [searchWord, setSearchWord] = useState("pics");
  const [isloading, setisLoading] = useState(true);
  const [next_page, setNext_page] = useState("");
  //Charge image when component starts
  const loadImages = async () => {
    const res = await getImages(searchWord, next_page);
    setNext_page(res.data.next_page);
    setisLoading(false);
    setPhotos(res.data.photos);
  };

  //To look for any typing content from input text
  const handleSearch = async () => {
    setisLoading(true);
    await loadImages(searchWord);
  };

  // navigate the search for same thing to next page
  const handleSearchNext = async () => {
    setisLoading(true);
    await loadImages(searchWord, next_page);
  };

  useEffect(() => {
    loadImages();
  }, []);

  return (
    <>
    {/* open the search box in the screen */}
      {openSearch && (
        <View style={styles.containerSearch}>
          <Input
            leftIcon={{
              type: "feather",
              name: "search",
              color: "#303546",
            }}
            onChangeText={(value) => setSearchWord(value)}
            placeholder="Type any word..."
            inputContainerStyle={styles.searchInput}
          />
          <Button
            onPress={() => handleSearch()}
            buttonStyle={styles.searchButton}
            title="Search"
          />
        </View>
      )}
      {isloading ? (
        <ActivityIndicator size="large" />
      ) : (
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => {
              handleSearchNext();
            }}
            style={styles.button}
          >
            <Text style={styles.text}> next_page </Text>
          </TouchableOpacity>
          {/* list all the image fetch for that page */}
          <ImageList photos={photos} />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#132332",
  },
  button: {
    backgroundColor: "#229783",
    paddingVertical: 12,
    marginVertical:10,
    marginHorizontal:10,
    borderRadius:10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  containerSearch: {
    backgroundColor: "#132332",
    flexDirection: "row",
    paddingRight: 80,
    alignItems: "flex-start",
    paddingTop: 10,
  },
  title: {
    color: "#FFFFFF",
    textAlign: "right",
    fontSize: 16,
    paddingTop: 20,
    paddingRight: 10,
  },
  searchInput: {
    backgroundColor: "#E5E7EB",
    color: "#132332",
    borderRadius: 5,
    paddingLeft: 10,
  },
  searchButton: {
    backgroundColor: "#229783",
    paddingVertical: 12,
  },
});

export default HomeScreen;
