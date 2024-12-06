import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";

//bottom bar (rectangle), "closet and outfits" button, "camera" button, "profile" button

const WardrobeButtonComp = (props) => {
  return (

<View>

    
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
        padding: 20,
        paddingHorizontal: 50
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "stretch",
        marginTop: 60,
        borderTopWidth: 1.5,
        borderBottomWidth: 1.5,
    },
});

export default WardrobeButtonComp;