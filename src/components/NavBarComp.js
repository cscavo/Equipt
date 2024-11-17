import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";

//bottom bar (rectangle), "closet and outfits" button, "camera" button, "profile" button

const NavBarComp = (props) => {

  return (
    
  <View style={styles.container}>
    
    <TouchableOpacity onPress={ props.toWardrobeButton }>
        <Image style={[styles.image, props.wardrobeIconBox]} source={props.wardrobeIcon} />
    </TouchableOpacity>

    <TouchableOpacity>
        <Image style={styles.image} source={require('../../assets/camera_UI.png')} />
    </TouchableOpacity>

    <TouchableOpacity onPress={ props.toProfileButton }>
        <Image style={[styles.image, styles.profileIcon, props.profileIconBox]} source={props.profileIcon} />
    </TouchableOpacity>

  </View>

  );
};

/*
For Closet Screen: 
<NavBarComp wardrobeIcon={require('../../assets/wardrobe_UI.png')} 
            profileIcon={require('../../assets/person_UI.png')}
            toProfileButton={() => {props.navigation.navigate("Profile")}}/>

For Outfits Screen:
<NavBarComp wardrobeIcon={require('../../assets/wardrobe_UI.png')} 
            profileButton={require('../../assets/person_UI.png')}
            toProfileButton={() => {props.navigation.navigate("Profile")}}/>

For Profile Screen:
<NavBarComp wardrobeIcon={require('../../assets/wardrobe_UI.png')} 
            toWardrobeButton={() => {props.navigation.navigate("Closet")}}
            profileIcon={require('../../assets/person_UI.png')}/>
*/

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        
        borderTopWidth: 1,
        paddingTop: 10,
        margin: 0,
        marginTop: 20,
        gap: 60,
    },
    image: {
        height: 60,
        width: 60,
    },
    profileIcon: {
        bottom: 6,
    },
});

export default NavBarComp;