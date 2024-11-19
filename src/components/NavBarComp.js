import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";

//bottom bar (rectangle), "closet and outfits" button, "camera" button, "profile" button

const NavBarComp = (props) => {

  return (
    
  <View style={styles.container}>
    
    <TouchableOpacity onPress={ props.onPressWardrobe }>
        <Image style={[styles.image, props.wardrobeIconBox]} source={require('../../assets/wardrobe_UI.png')} />
    </TouchableOpacity>

    <TouchableOpacity onPress={ props.onPressCamera }>
        <Image style={styles.image} source={require('../../assets/camera_UI.png')} />
    </TouchableOpacity>

    <TouchableOpacity onPress={ props.onPressProfile }>
        <Image style={[styles.image, props.profileIconBox]} source={props.profileIcon} />
    </TouchableOpacity>

  </View>

  );
};


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderTopWidth: 1,
        paddingVertical: 10,
        marginTop: 20,
        gap: 60,
        backgroundColor: 'lightgrey',
    },
    image: {
        height: 60,
        width: 60,
    },
});

export default NavBarComp;