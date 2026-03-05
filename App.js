import { View, Text, Image, StyleSheet, Linking, Pressable } from 'react-native';

export default function App() {
  const supportURL = 'https://www.mercadolivre.com.br/refrigerante-2l-cocacola-original/up/MLBU1124854838';
  const supportURL2 = 'https://www.savegnago.com.br/cerveja-heineken-5l/p?idsku=8593&utm_source=shopping&utm_medium=organic&utm_campaign=googleshoppinglisting_bebidas_cervejas_cerveja_premium&utm_term=28210&srsltid=AfmBOopRzMD6vcFGZX2BKuL9OVRpkQaW1yrBHVIeJtSmnNj63jSw8n0fzSA';
  
  const usuario = {
    nome: "Gragas KDA",
    bio: "O Melhor Gragas da FIAP🍺!", 
    seguidores: "2.4B",
    avatar: "https://newr7-r7-prod.web.arc-cdn.net/resizer/v2/7LDBKN2SBVA7NDBVQPEC3U5WGU.jpeg?auth=083b32258e128ab9f0391b46f24416aeccd67e20f57aecc44b5a79be99740b8c&width=1600&height=900",
  };

  return (
    <View style={styles.container}>
      {/* Avatar */}
      <Image
        source={{ uri: usuario.avatar }}
        style={styles.avatar}
      />
      {/* Nome */}
      <Text style={styles.nome}>{usuario.nome}</Text>
      {/* Bio */}
      <Text style={styles.bio}>{usuario.bio}</Text>
      {/* Stats */}
      <View style={styles.stats}>
        <Text style={styles.stat}>👥 {usuario.seguidores} seguidores</Text>
      </View>
      
      {/* Link 1 */}
      <Pressable onPress={() => Linking.openURL(supportURL)} style={styles.url1}>
        <Text style={styles.linkText}>Gosto muito</Text>
      </Pressable>

      {/* Link 2 */}
      <Pressable onPress={() => Linking.openURL(supportURL2)}>
        <Text style={styles.linkText}>Gosto mais ainda</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9a6ff',
    padding: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#000',
    marginBottom: 16,
  },
  nome: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  bio: {
    fontSize: 14,
    color: '#000',
    fontStyle: "bold",
    textAlign: 'center',
    marginBottom: 16,
  },
  stats: {
    backgroundColor: '#1a1a1a',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  stat: {
    color: '#fff',
    fontSize: 14,
  },
  url1: {
    padding: 10,
    marginVertical: 10,
  },
  linkText: {
    color: '#0066cc',
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});