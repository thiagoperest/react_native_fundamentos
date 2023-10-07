import { Text, View } from "react-native";

import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.mainEvent}>Nome do evento</Text>
      <Text style={styles.localEvent}>Sexta, 4 de Novembro de 2022.</Text>
    </View>
  );
}
