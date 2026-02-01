import { View } from "react-native";
import Age from "../components/Age";
import ComponentA from "../components/ComponentA";
import FavSubject from "../components/FavSubject";
import Greet from "../components/Greet";
import Name from "../components/Name";

function Index() {
  return (
    <View>
      <Greet />
      <ComponentA />
      <Name />
      <Age />
      <FavSubject />
    </View>
  );
}

export default Index;
