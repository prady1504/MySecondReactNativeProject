import { Pressable, StyleSheet, Text, View } from "react-native";


export default function GridCard({ title = '', message = '', color = 'blue' }) {
  return (
    <View style={styles.gridItem}>
        <View style={[styles.container, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.message}>{message}</Text>
        </View>
    </View>

  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    borderRadius: 8,
    height: 150,
    justifyContent: 'center',
    elevation: 4,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  message: {
    fontSize: 14,
    color: '#333',
  },
});