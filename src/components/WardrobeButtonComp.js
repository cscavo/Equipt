import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";

//bottom bar (rectangle), "closet and outfits" button, "camera" button, "profile" button

const WardrobeButtonComp = (props) => {
  return (

<View>

    <Image style={props.buttonBold}></Image>
    
    <View style={styles.container}>
  
        <TouchableOpacity onPress={props.onPressCloset}>
            <Text style={[styles.text, styles.closet]}>Closet</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={props.onPressOutfits}>
            <Text style={[styles.text]}>Outfits</Text>
        </TouchableOpacity>
    </View>

</View>
    
  

  );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 32,
        padding: 20,
        paddingHorizontal: 50,
        //color: "#3B153B"
        color: "#193625"
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "stretch",
        marginTop: 60,
        borderTopWidth: 1.5,
        borderBottomWidth: 1.5,
        //borderColor: "#3B153B",
        borderColor: "#193625",
        gap: 20
    },
});

export default WardrobeButtonComp;