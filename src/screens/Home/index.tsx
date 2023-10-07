import { Text, TextInput, View } from "react-native";

import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.mainEvent}>Nome do evento</Text>
      <Text style={styles.localEvent}>Sexta, 4 de Novembro de 2022.</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do participante"
        placeholderTextColor="#6B6B6B"
      />
    </View>
  );
}
