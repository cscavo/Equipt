import React from "react";
import { Text, StyleSheet,View, Image} from "react-native";

const ImageDetail = (props) => {

    console.log(props);
    
  return <View style={styles.container}>
    <Text style={styles.text}>{props.description}</Text>
    <Image style={styles.image} source={props.imageSource}/>
    
  </View>
  
};

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    
  },
  text: {
    //borderColor: 'red',
    //borderWidth: 3,
    //fontSize: 20
  },
  view:{
    //alignItems: "center",
  },
  container: {
    padding: 10
  }
});

export default ImageDetail;
