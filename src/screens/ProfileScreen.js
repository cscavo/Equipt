import React, {useState, useContext} from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import NavBarComp from "../components/NavBarComp";
import {Context} from '../context/SkinColorContext';

const ProfileScreen = (props) => {

  const {skinColorState, changeSkinColor} = useContext(Context);

  const [border1, setBorder1] = useState(false);
  const [border2, setBorder2] = useState(false);
  const [border3, setBorder3] = useState(false);
  const [border4, setBorder4] = useState(false);
  const [border5, setBorder5] = useState(false);
  const [border6, setBorder6] = useState(false);
  const [border7, setBorder7] = useState(false);
  const [border8, setBorder8] = useState(false);
  const [border9, setBorder9] = useState(false);
  const [border10, setBorder10] = useState(false);

  console.log("skin color " + skinColorState.skinColor)
  return (
  <View style={styles.container}>    

    <Text style={styles.text}>Profile</Text>

    <View style={styles.skincolorContainer}>
      <Text style={styles.skinColorText}>Skin Color</Text>
      <View style={styles.skinRow}>
        <TouchableOpacity onPress={() => {changeSkinColor("#f5e9e3"), setBorder1(true), setBorder2(false), setBorder3(false), setBorder4(false), setBorder5(false), 
                                          setBorder6(false), setBorder7(false), setBorder8(false), setBorder9(false), setBorder10(false)}}>
          {border1==true
          ? <Image style={{height: 40, width: 40, backgroundColor: "#f5e9e3", borderRadius: 6, borderWidth: 3, borderColor: "black"}}></Image>
          : <Image style={{height: 40, width: 40, backgroundColor: "#f5e9e3", borderRadius: 6, borderWidth: 3, borderColor: "#f5e9e3"}}></Image>
          }
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {setBorder1(false), setBorder2(true), setBorder3(false), setBorder4(false), setBorder5(false), 
                                          setBorder6(false), setBorder7(false), setBorder8(false), setBorder9(false), setBorder10(false)}}>
          {border2==true
          ? <Image style={{height: 40, width: 40, backgroundColor: "#efdbd0", borderRadius: 6, borderWidth: 3, borderColor: "black"}}></Image>
          : <Image style={{height: 40, width: 40, backgroundColor: "#efdbd0", borderRadius: 6, borderWidth: 3, borderColor: "#efdbd0"}}></Image>
          }
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {setBorder1(false), setBorder2(false), setBorder3(true), setBorder4(false), setBorder5(false),
                                          setBorder6(false), setBorder7(false), setBorder8(false), setBorder9(false), setBorder10(false)}}>
          {border3==true
          ? <Image style={{height: 40, width: 40, backgroundColor: "#e7c7b2", borderRadius: 6, borderWidth: 3, borderColor: "black"}}></Image>
          : <Image style={{height: 40, width: 40, backgroundColor: "#e7c7b2", borderRadius: 6, borderWidth: 3, borderColor: "#e7c7b2"}}></Image>
          }
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {setBorder1(false), setBorder2(false), setBorder3(false), setBorder4(true), setBorder5(false),
                                          setBorder6(false), setBorder7(false), setBorder8(false), setBorder9(false), setBorder10(false)}}>
          {border4==true
          ? <Image style={{height: 40, width: 40, backgroundColor: "#d8b5a1", borderRadius: 6, borderWidth: 3, borderColor: "black"}}></Image>
          : <Image style={{height: 40, width: 40, backgroundColor: "#d8b5a1", borderRadius: 6, borderWidth: 3, borderColor: "#d8b5a1"}}></Image>
          }
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {setBorder1(false), setBorder2(false), setBorder3(false), setBorder4(false), setBorder5(true),
                                          setBorder6(false), setBorder7(false), setBorder8(false), setBorder9(false), setBorder10(false)}}>
          {border5==true
          ? <Image style={{height: 40, width: 40, backgroundColor: "#c99c85", borderRadius: 6, borderWidth: 3, borderColor: "black"}}></Image>
          : <Image style={{height: 40, width: 40, backgroundColor: "#c99c85", borderRadius: 6, borderWidth: 3, borderColor: "#c99c85"}}></Image>
          }
        </TouchableOpacity>
        
      </View>

      <View style={styles.skinRow}>
        <TouchableOpacity onPress={() => {setBorder1(false), setBorder2(false), setBorder3(false), setBorder4(false), setBorder5(false)
                                          setBorder6(true), setBorder7(false), setBorder8(false), setBorder9(false), setBorder10(false)}}>
          {border6==true
          ? <Image style={{height: 40, width: 40, backgroundColor: "#c0876e", borderRadius: 6, borderWidth: 3, borderColor: "black"}}></Image>
          : <Image style={{height: 40, width: 40, backgroundColor: "#c0876e", borderRadius: 6, borderWidth: 3, borderColor: "#c0876e"}}></Image>
          }
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {setBorder1(false), setBorder2(false), setBorder3(false), setBorder4(false), setBorder5(false),
                                          setBorder6(false), setBorder7(true), setBorder8(false), setBorder9(false), setBorder10(false)}}>
          {border7==true
          ? <Image style={{height: 40, width: 40, backgroundColor: "#ad7054", borderRadius: 6, borderWidth: 3, borderColor: "black"}}></Image>
          : <Image style={{height: 40, width: 40, backgroundColor: "#ad7054", borderRadius: 6, borderWidth: 3, borderColor: "#ad7054"}}></Image>
          }
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {setBorder1(false), setBorder2(false), setBorder3(false), setBorder4(false), setBorder5(false), 
                                          setBorder6(false), setBorder7(false), setBorder8(true), setBorder9(false), setBorder10(false)}}>
          {border8==true
          ? <Image style={{height: 40, width: 40, backgroundColor: "#875743", borderRadius: 6, borderWidth: 3, borderColor: "black"}}></Image>
          : <Image style={{height: 40, width: 40, backgroundColor: "#875743", borderRadius: 6, borderWidth: 3, borderColor: "#875743"}}></Image>
          }
          </TouchableOpacity>

        <TouchableOpacity onPress={() => {setBorder1(false), setBorder2(false), setBorder3(false), setBorder4(false), setBorder5(false), 
                                          setBorder6(false), setBorder7(false), setBorder8(false), setBorder9(true), setBorder10(false)}}>
          {border9==true
          ? <Image style={{height: 40, width: 40, backgroundColor: "#6c4635", borderRadius: 6, borderWidth: 3, borderColor: "black"}}></Image>
          : <Image style={{height: 40, width: 40, backgroundColor: "#6c4635", borderRadius: 6, borderWidth: 3, borderColor: "#6c4635"}}></Image>
          }
        </TouchableOpacity>
        

        <TouchableOpacity onPress={() => {setBorder1(false), setBorder2(false), setBorder3(false), setBorder4(false), setBorder5(false), 
                                          setBorder6(false), setBorder7(false), setBorder8(false), setBorder9(false), setBorder10(true)}}>
          {border10==true
          ? <Image style={{height: 40, width: 40, backgroundColor: "#4c2b22", borderRadius: 6, borderWidth: 3, borderColor: "black"}}></Image>
          : <Image style={{height: 40, width: 40, backgroundColor: "#4c2b22", borderRadius: 6, borderWidth: 3, borderColor: "#4c2b22"}}></Image>
          }
        </TouchableOpacity>

        
        
      </View>
    </View>
    

    

    <Image style={styles.stats}></Image>

    <NavBarComp wardrobeIcon={require('../../assets/wardrobe_UI.png')} 
            onPressWardrobe={() => {props.navigation.navigate("Closet")}}
            onPressCamera={() => {props.navigation.navigate("AddClothing")}}
            profileIcon={require('../../assets/person_UI.png')} profileIconBox={styles.profileButtonBold}/>

  </View>
  
  );

};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    alignSelf: "center",
    paddingTop: 70,
    paddingBottom: 20
  },
  skinColorText: {
    fontSize: 20,
    paddingHorizontal: 27,
    marginVertical: 20,
  },
  skincolorContainer: {
    height: 180,
    width: 300,
    borderRadius: 20,
    alignSelf: "center",
    margin: 20,
    //backgroundColor: 'lightgrey',
    borderWidth: 2,
  },
  skinColorBlock: {
    height: 40,
    width: 40,
    backgroundColor: "black",
    borderRadius: 6,
  },
  skinRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    gap: 10,
    paddingVertical: 5
  },
  stats: {
    width: 300,
    borderRadius: 20,
    alignSelf: "center",
    flex: 1,
    margin: 10,
    //backgroundColor: 'lightgrey',
    borderWidth: 2
  },
  profileButtonBold: {
    borderWidth: 3,
    borderRadius: 4
  },
  container: {
    flex: 1
  }
});

export default ProfileScreen;
