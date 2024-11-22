import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";

//bottom bar (rectangle), "closet and outfits" button, "camera" button, "profile" button

const SaveButtonComp = (props) => {

  return (
    
  <View style={styles.container}>
    
    <TouchableOpacity onPress={ props.onPressSave }>
        <Text style={[styles.text, props.saveButtonStyle]}>save</Text>
    </TouchableOpacity>

  </View>

  );
};


const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        //borderWidth: 2,
        alignSelf: "center",
        paddingHorizontal: 40,
        paddingVertical: 12,
        //borderRadius: 4,
        backgroundColor: 'lightgrey'
    },
});

export default SaveButtonComp;