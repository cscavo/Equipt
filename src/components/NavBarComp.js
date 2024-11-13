import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";

//bottom bar (rectangle), "closet and outfits" button, "camera" button, "profile" button

const NavBarComp = (props) => {

  return (
    
  <View>
    
    <TouchableOpacity onPress={ props.toClosetButton }>
        <Image style={props.closetIconBox} source={props.closetIcon} />
    </TouchableOpacity>

    <TouchableOpacity>
        <Image source={require('../../assets/camera_UI.png')} />
    </TouchableOpacity>

    <TouchableOpacity onPress={ props.toProfileButton }>
        <Image style={props.profileIconBox} source={props.profileIcon} />
    </TouchableOpacity>

  </View>

  );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 22,
        position: 'absolute',
        top: 45,

    },
    plus: {
        width: 120,
        height: 120,
        top: -120,
        alignSelf: 'flex-end',
        position: 'absolute',
    },

});

export default NavBarComp;