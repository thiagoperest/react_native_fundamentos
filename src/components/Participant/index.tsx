import { styles } from "./styles";
import { Text, TouchableOpacity, View } from "react-native";

interface IParticipant {
  name: string;
}

export function Participant({ name }: IParticipant) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
