import { createAppContainer } from "react-navigation";
import { createSwitchNavigator } from "react-navigation";
import ClosetScreen from "./src/screens/ClosetScreen";
import AddClothingScreen from "./src/screens/AddClothingScreen";
import OutfitsScreen from "./src/screens/OutfitsScreen";
import ProfileScreen from "./src/screens/ProfileScreen";

const navigator = createSwitchNavigator(
  {
    Closet: ClosetScreen,
    AddClothing: AddClothingScreen,
    Outfits: OutfitsScreen,
    Profile: ProfileScreen,
  },
  {
    initialRouteName: "Closet",
    /* defaultNavigationOptions: {
      title: "Equipt",
    }, */
  }
);

export default createAppContainer(navigator);