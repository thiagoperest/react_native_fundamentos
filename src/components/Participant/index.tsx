import { styles } from "./styles";
import { Text, TouchableOpacity, View } from "react-native";

interface IParticipant {
  name: string;
  onRemove: () => void;
}

export function Participant({ name, onRemove }: IParticipant) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
