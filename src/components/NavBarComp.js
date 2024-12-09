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
        <Image style={styles.camera} source={require('../../assets/camera_UI.png')} />
    </TouchableOpacity>

    <TouchableOpacity onPress={ props.onPressProfile }>
        <Image style={[styles.image, props.profileIconBox]} source={require('../../assets/person_UI.png')} />
    </TouchableOpacity>

  </View>

  );
};


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderTopWidth: 2,
        paddingVertical: 10,
        paddingBottom: 30,
        marginTop: 20,
        gap: 70,
        borderColor: "#193625",
        backgroundColor: '#DAE7E0'
    },
    camera: {
        height: 50,
        width: 50,
    },
    image: {
        height: 50,
        width: 50,
        opacity: 0.4
    },
});

export default NavBarComp;