import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function TodoCard({ task, onDelete }) {
  return (
    <View style={styles.card}>
      <Text style={styles.taskText}>{task}</Text>
      <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  taskText: {
    fontSize: 16,
    color: '#333',
    flexShrink: 1,
  },
  deleteButton: {
    backgroundColor: '#ff4d4d',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  deleteText: {
    color: '#fff',
    fontWeight: '600',
  },
});