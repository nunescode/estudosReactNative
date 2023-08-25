import { Text, View } from "react-native";

export default function MinMax(props) {
  
const { min, max } = props;
const maxValue = Math.max(parseInt(min), parseInt(max));
const minValue = Math.min(parseInt(max), parseInt(min));
  
  return (
	  <View>
      <Text>O valor máximo é: {maxValue}</Text>
		  <Text>O valor mínimo é: {minValue}</Text>
	  </View>
  );
}
