import React, {useState, useContext} from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import NavBarComp from "../components/NavBarComp";
import {Context} from '../context/SkinColorContext';
import {Context as ClothingContext} from '../context/ClothingContext';

const ProfileScreen = (props) => {

  const {skinColorState, changeSkinColor} = useContext(Context);
  const {state: clothingState} = useContext(ClothingContext);

  //Calculating counts for each category
  const topCount = clothingState.filter(item => item.category === "top").length;
  const bottomCount = clothingState.filter(item => item.category === "bottom").length;
  const accessoryCount = clothingState.filter(item => item.category === "accessory").length;


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

        {skinColorState.skinColor=="#f5e9e3"
        ? <Image style={{height: 40, width: 40, backgroundColor: "#f5e9e3", borderRadius: 6, borderWidth: 3, borderColor: "black"}}></Image>
        : <TouchableOpacity onPress={() => {changeSkinColor("#f5e9e3")}}>
            <Image style={{height: 40, width: 40, backgroundColor: "#f5e9e3", borderRadius: 6, borderWidth: 3, borderColor: "#f5e9e3"}}></Image>
          </TouchableOpacity>
        }

        {skinColorState.skinColor=="#efdbd0"
        ? <Image style={{height: 40, width: 40, backgroundColor: "#efdbd0", borderRadius: 6, borderWidth: 3, borderColor: "black"}}></Image>
        : <TouchableOpacity onPress={() => {changeSkinColor("#efdbd0")}}>
          <Image style={{height: 40, width: 40, backgroundColor: "#efdbd0", borderRadius: 6, borderWidth: 3, borderColor: "#efdbd0"}}></Image>
        </TouchableOpacity>
        }

        {skinColorState.skinColor=="#e7c7b2"
        ? <Image style={{height: 40, width: 40, backgroundColor: "#e7c7b2", borderRadius: 6, borderWidth: 3, borderColor: "black"}}></Image>
        :<TouchableOpacity onPress={() => {changeSkinColor("#e7c7b2")}}>
          <Image style={{height: 40, width: 40, backgroundColor: "#e7c7b2", borderRadius: 6, borderWidth: 3, borderColor: "#e7c7b2"}}></Image>
        </TouchableOpacity>
        }
        
        {skinColorState.skinColor=="#d8b5a1"
        ? <Image style={{height: 40, width: 40, backgroundColor: "#d8b5a1", borderRadius: 6, borderWidth: 3, borderColor: "black"}}></Image>
        : <TouchableOpacity onPress={() => {changeSkinColor("#d8b5a1")}}>
          <Image style={{height: 40, width: 40, backgroundColor: "#d8b5a1", borderRadius: 6, borderWidth: 3, borderColor: "#d8b5a1"}}></Image>
        </TouchableOpacity>
        }
        
        {skinColorState.skinColor=="#c99c85"
        ? <Image style={{height: 40, width: 40, backgroundColor: "#c99c85", borderRadius: 6, borderWidth: 3, borderColor: "black"}}></Image>
        :<TouchableOpacity onPress={() => {changeSkinColor("#c99c85")}}>
          <Image style={{height: 40, width: 40, backgroundColor: "#c99c85", borderRadius: 6, borderWidth: 3, borderColor: "#c99c85"}}></Image>
        </TouchableOpacity>
        }
        
        
      </View>

      <View style={styles.skinRow}>

        {skinColorState.skinColor=="#c0876e"
        ? <Image style={{height: 40, width: 40, backgroundColor: "#c0876e", borderRadius: 6, borderWidth: 3, borderColor: "black"}}></Image>
        : <TouchableOpacity onPress={() => {changeSkinColor("#c0876e")}}>
          <Image style={{height: 40, width: 40, backgroundColor: "#c0876e", borderRadius: 6, borderWidth: 3, borderColor: "#c0876e"}}></Image>
        </TouchableOpacity>
        }

        {skinColorState.skinColor=="#ad7054"
        ? <Image style={{height: 40, width: 40, backgroundColor: "#ad7054", borderRadius: 6, borderWidth: 3, borderColor: "black"}}></Image>
        : <TouchableOpacity onPress={() => {changeSkinColor("#ad7054")}}>
          <Image style={{height: 40, width: 40, backgroundColor: "#ad7054", borderRadius: 6, borderWidth: 3, borderColor: "#ad7054"}}></Image>
        </TouchableOpacity>
        }

        {skinColorState.skinColor=="#875743"
        ? <Image style={{height: 40, width: 40, backgroundColor: "#875743", borderRadius: 6, borderWidth: 3, borderColor: "black"}}></Image>
        : <TouchableOpacity onPress={() => {changeSkinColor("#875743")}}>
          <Image style={{height: 40, width: 40, backgroundColor: "#875743", borderRadius: 6, borderWidth: 3, borderColor: "#875743"}}></Image>
        </TouchableOpacity>
        }
        

        
        {skinColorState.skinColor=="#6c4635"
        ? <Image style={{height: 40, width: 40, backgroundColor: "#6c4635", borderRadius: 6, borderWidth: 3, borderColor: "black"}}></Image>
        : <TouchableOpacity onPress={() => {changeSkinColor("#6c4635")}}>
          <Image style={{height: 40, width: 40, backgroundColor: "#6c4635", borderRadius: 6, borderWidth: 3, borderColor: "#6c4635"}}></Image>
        </TouchableOpacity>
        }
        
        {skinColorState.skinColor=="#4c2b22"
        ? <Image style={{height: 40, width: 40, backgroundColor: "#4c2b22", borderRadius: 6, borderWidth: 3, borderColor: "black"}}></Image>
        :<TouchableOpacity onPress={() => {changeSkinColor("#4c2b22")}}>
          <Image style={{height: 40, width: 40, backgroundColor: "#4c2b22", borderRadius: 6, borderWidth: 3, borderColor: "#4c2b22"}}></Image>
        </TouchableOpacity>
        }
        
      </View>
    </View>
    
    
  <View style = {styles.stats}> 
    <Text style={styles.statsWord}>Stats</Text>
    <Text style={styles.statsText}>Tops: {topCount}</Text>
    <Text style={styles.statsText}>Bottoms: {bottomCount}</Text>
    <Text style={styles.statsText}>Accessories: {accessoryCount}</Text>
  </View>

    <NavBarComp wardrobeIcon={require('../../assets/wardrobe_UI.png')} 
            onPressWardrobe={() => {props.navigation.navigate("Closet")}}
            onPressCamera={() => {props.navigation.navigate("AddClothing")}}
            profileIcon={require('../../assets/person_UI.png')} profileIconBox={styles.profileNavBar}/>

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
  profileNavBar: {
    opacity: 1
  },
  container: {
    flex: 1
  },
  statsText: {
    fontSize: 18,
    paddingHorizontal: 27,
    marginBottom: 10,
  },
  statsWord: {
    fontSize: 20,
    paddingHorizontal: 27,
    marginVertical: 20,
  }
});

export default ProfileScreen;
