import React, {useState, useContext} from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import NavBarComp from "../components/NavBarComp";
import {Context} from '../context/SkinColorContext';
import {Context as ClothingContext} from '../context/ClothingContext';
import {BarChart} from "react-native-chart-kit";
import {Dimensions} from "react-native";

const ProfileScreen = (props) => {

  const {skinColorState, changeSkinColor} = useContext(Context);
  const {state: clothingState} = useContext(ClothingContext);

  //Calculating counts for each category
  const topCount = clothingState.filter(item => item.category === "top").length;
  const bottomCount = clothingState.filter(item => item.category === "bottom").length;
  const accessoryCount = clothingState.filter(item => item.category === "accessory").length;


  console.log("skin color " + skinColorState.skinColor)
  return (
  <View style={styles.container}>    

    <Image style={styles.profileBar}></Image>
    <Text style={styles.text}>Profile</Text>

    <View style={styles.skincolorContainer}>
      <Text style={styles.skinColorText}>Skin Color</Text>
      <View style={styles.skinRow}>

        {skinColorState.skinColor=="#f5e9e3"
        ? <Image style={{height: 40, width: 40, backgroundColor: "#f5e9e3", borderRadius: 6, borderWidth: 3, borderColor: "#02200E"}}></Image>
        : <TouchableOpacity onPress={() => {changeSkinColor("#f5e9e3")}}>
            <Image style={{height: 40, width: 40, backgroundColor: "#f5e9e3", borderRadius: 6, borderWidth: 3, borderColor: "#f5e9e3"}}></Image>
          </TouchableOpacity>
        }

        {skinColorState.skinColor=="#efdbd0"
        ? <Image style={{height: 40, width: 40, backgroundColor: "#efdbd0", borderRadius: 6, borderWidth: 3, borderColor: "#02200E"}}></Image>
        : <TouchableOpacity onPress={() => {changeSkinColor("#efdbd0")}}>
          <Image style={{height: 40, width: 40, backgroundColor: "#efdbd0", borderRadius: 6, borderWidth: 3, borderColor: "#efdbd0"}}></Image>
        </TouchableOpacity>
        }

        {skinColorState.skinColor=="#e7c7b2"
        ? <Image style={{height: 40, width: 40, backgroundColor: "#e7c7b2", borderRadius: 6, borderWidth: 3, borderColor: "#02200E"}}></Image>
        :<TouchableOpacity onPress={() => {changeSkinColor("#e7c7b2")}}>
          <Image style={{height: 40, width: 40, backgroundColor: "#e7c7b2", borderRadius: 6, borderWidth: 3, borderColor: "#e7c7b2"}}></Image>
        </TouchableOpacity>
        }
        
        {skinColorState.skinColor=="#d8b5a1"
        ? <Image style={{height: 40, width: 40, backgroundColor: "#d8b5a1", borderRadius: 6, borderWidth: 3, borderColor: "#02200E"}}></Image>
        : <TouchableOpacity onPress={() => {changeSkinColor("#d8b5a1")}}>
          <Image style={{height: 40, width: 40, backgroundColor: "#d8b5a1", borderRadius: 6, borderWidth: 3, borderColor: "#d8b5a1"}}></Image>
        </TouchableOpacity>
        }
        
        {skinColorState.skinColor=="#c99c85"
        ? <Image style={{height: 40, width: 40, backgroundColor: "#c99c85", borderRadius: 6, borderWidth: 3, borderColor: "#02200E"}}></Image>
        :<TouchableOpacity onPress={() => {changeSkinColor("#c99c85")}}>
          <Image style={{height: 40, width: 40, backgroundColor: "#c99c85", borderRadius: 6, borderWidth: 3, borderColor: "#c99c85"}}></Image>
        </TouchableOpacity>
        }
        
        
      </View>

      <View style={styles.skinRow}>

        {skinColorState.skinColor=="#c0876e"
        ? <Image style={{height: 40, width: 40, backgroundColor: "#c0876e", borderRadius: 6, borderWidth: 3, borderColor: "#02200E"}}></Image>
        : <TouchableOpacity onPress={() => {changeSkinColor("#c0876e")}}>
          <Image style={{height: 40, width: 40, backgroundColor: "#c0876e", borderRadius: 6, borderWidth: 3, borderColor: "#c0876e"}}></Image>
        </TouchableOpacity>
        }

        {skinColorState.skinColor=="#ad7054"
        ? <Image style={{height: 40, width: 40, backgroundColor: "#ad7054", borderRadius: 6, borderWidth: 3, borderColor: "#02200E"}}></Image>
        : <TouchableOpacity onPress={() => {changeSkinColor("#ad7054")}}>
          <Image style={{height: 40, width: 40, backgroundColor: "#ad7054", borderRadius: 6, borderWidth: 3, borderColor: "#ad7054"}}></Image>
        </TouchableOpacity>
        }

        {skinColorState.skinColor=="#875743"
        ? <Image style={{height: 40, width: 40, backgroundColor: "#875743", borderRadius: 6, borderWidth: 3, borderColor: "#02200E"}}></Image>
        : <TouchableOpacity onPress={() => {changeSkinColor("#875743")}}>
          <Image style={{height: 40, width: 40, backgroundColor: "#875743", borderRadius: 6, borderWidth: 3, borderColor: "#875743"}}></Image>
        </TouchableOpacity>
        }
        

        
        {skinColorState.skinColor=="#6c4635"
        ? <Image style={{height: 40, width: 40, backgroundColor: "#6c4635", borderRadius: 6, borderWidth: 3, borderColor: "#02200E"}}></Image>
        : <TouchableOpacity onPress={() => {changeSkinColor("#6c4635")}}>
          <Image style={{height: 40, width: 40, backgroundColor: "#6c4635", borderRadius: 6, borderWidth: 3, borderColor: "#6c4635"}}></Image>
        </TouchableOpacity>
        }
        
        {skinColorState.skinColor=="#4c2b22"
        ? <Image style={{height: 40, width: 40, backgroundColor: "#4c2b22", borderRadius: 6, borderWidth: 3, borderColor: "#02200E"}}></Image>
        :<TouchableOpacity onPress={() => {changeSkinColor("#4c2b22")}}>
          <Image style={{height: 40, width: 40, backgroundColor: "#4c2b22", borderRadius: 6, borderWidth: 3, borderColor: "#4c2b22"}}></Image>
        </TouchableOpacity>
        }
        
      </View>
    </View>
    
    
<View style={styles.stats}>
  <Text style={styles.statsWord}>Stats</Text>

  <BarChart
    data={{
      labels: ["Tops", "Bottoms", "Accessories"],
      datasets: [
        {
          data: [topCount, bottomCount, accessoryCount],
        },
      ],
    }}
    width={Dimensions.get("window").width - 150}
    height={220}
    yAxisLabel=""
    yAxisInterval={1}
    chartConfig={{
      backgroundGradientFrom: "#FFFDF9",
      backgroundGradientTo: "#FFFDF9",
      decimalPlaces: 0,
      color: (opacity = 1) => `rgb(0, 0, 0), ${opacity})`,
      /* THE ONLY WAY I COULD MAKE THE BARS SOLID BLACK */
      fillShadowGradientFrom: "#193625",
      fillShadowGradientFromOpacity: 1,
      fillShadowGradientTo: "#193625",
      fillShadowGradientToOpacity: 1,
      /* ********************************** */
    }}
    style={{
      marginVertical: 8,
      borderRadius: 16,
    }}
  />
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
    paddingTop: 80,
    paddingBottom: 25,
    marginBottom: 10,
    color: "#193625",
  },
  profileBar: {
    height: 145,
    width: 500,
    alignSelf: "center",
    position: "absolute",
    backgroundColor: '#DAE7E0'
  },
  skinColorText: {
    fontSize: 20,
    paddingHorizontal: 27,
    marginVertical: 20,
    color: "#02200E",
  },
  skincolorContainer: {
    height: 180,
    width: 300,
    borderRadius: 20,
    alignSelf: "center",
    margin: 20,
    borderWidth: 2,
    borderColor: "#02200E"
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
    borderWidth: 2,
    borderColor: "#02200E"
  },
  profileNavBar: {
    opacity: 1
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFDF9"
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
    color: "#02200E",
  }
});

export default ProfileScreen;
