import { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import CustomButton from "../components/Button";
import Card from "../components/Card";

function GreetingCard() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
   const [cards, setCards] = useState<{ id: string; name: string; message: string }[]>([]);

  function handleGreeting() {
    const newCard = {
        id: Date.now().toString(),
        name: name.trim(),
        message: message.trim(),
      };
    setCards(prev => [newCard, ...prev]);
    setName('');
    setMessage('');
  }
  return (
    <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your name"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
        <TextInput
          placeholder="Enter a message"
          style={[styles.input, { height: 80 }]}
          value={message}
          onChangeText={setMessage}
          multiline
        />
        <CustomButton name="Send Greeting" onPress={handleGreeting} />

       <FlatList
        data={cards}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Card
            title={`Hello, ${item.name}!`}
            message={item.message}
          />
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

export default GreetingCard;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 60,
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ddd',
  }
});