import { StyleSheet, Text, View } from "react-native";


function Card({  title = '', message = '' }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9F9F9',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    marginVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    marginBottom: 8,
  },
  message: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
  },
});