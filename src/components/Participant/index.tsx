import { styles } from "./styles";
import { Text, TouchableOpacity, View } from "react-native";

export function Participant() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Thiago Peres</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
