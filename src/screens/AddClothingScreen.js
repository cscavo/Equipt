import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import SaveButtonComp from "../components/SaveButtonComp";

//Note for myself (Natalia): X in a box icon will go in this screen to return to the previous screen


const AddClothingScreen = (props) => {

  return(
    <View>

        <Text style={styles.photo}>[photo]</Text>

        <Text style={styles.categoryText}>Categtory</Text>

        <TouchableOpacity style={styles.categoryContainer}>
            <Text style={styles.category}>top</Text>
            <Text style={styles.category}>bottom</Text>
            <Text style={styles.category}>accessory</Text>
        </TouchableOpacity>
        

        <SaveButtonComp onPressSave={() => {props.navigation.navigate("Closet")}}/>

        

    </View>
  );
}


const styles = StyleSheet.create({
  photo: {
    fontSize: 35,
    alignSelf: "center",
    paddingHorizontal: 100,
    paddingVertical: 120,
    marginTop: 60,
    marginBottom: 30,
    backgroundColor: 'lightgrey',
    borderWidth: 2
  },
  categoryText: {
    fontSize: 30,
    marginLeft: 30
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
    marginBottom: 25,
    gap: 17,
  },
  category: {
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    paddingHorizontal: 15
  }


});

export default AddClothingScreen;