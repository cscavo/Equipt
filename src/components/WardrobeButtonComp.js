import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";

//bottom bar (rectangle), "closet and outfits" button, "camera" button, "profile" button

const WardrobeButtonComp = (props) => {

  return (

<View>

    <Image style={styles.image}></Image>
    
    <View style={styles.container}>
        <TouchableOpacity onPress={props.onPressCloset}>
            <Text style={[styles.text, props.closetButtonBold]}>Closet</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={props.onPressOutfits}>
            <Text style={[styles.text, props.outfitsButtonBold]}>Outfits</Text>
        </TouchableOpacity>
    </View>

</View>
    
  

  );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 32,
        //borderWidth: 1.5,
        margin: 18,
        paddingHorizontal: 10,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 0,
        marginTop: 20,
        gap: 20,
    },
    image: {
        borderTopWidth: 1.5,
        borderBottomWidth: 1.5,
        position: "absolute",
        height: 80,
        width: 375,
        top: 19,
    },
});

export default WardrobeButtonComp;