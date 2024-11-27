import React from "react";
import { Text, StyleSheet,View, Image} from "react-native";

const ImageDetail = (props) => {

    console.log(props);
  return <View style={styles.view}>
    <Text style={styles.text}>{props.description}</Text>
    <Image style={styles.image} source={props.imageSource}/>
    
  </View>
  
};

const styles = StyleSheet.create({
  image: {
    borderColor: 'red',
    borderWidth: 3,
    width: 300,
    height: 300,
    flex: 1,
    
  },
  text: {
    borderColor: 'red',
    borderWidth: 3,
    //width: 100,
    //height: 5,
    fontSize: 20
    

  },
  view:{
    alignItems: "center"
  }
});

export default ImageDetail;
