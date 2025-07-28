import { Pressable, Text, StyleSheet } from "react-native";

function CustomButton({name, onPress}) {

    return <Pressable onPress={onPress}
    style={({pressed}) => [styles.button, pressed && styles.buttonPressed]}>
        <Text style={styles.text}>{name}</Text>
    </Pressable>
}

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonPressed: {
    backgroundColor: '#45A049',
    transform: [{ scale: 0.97 }],
  },
  text: {
    color: 'white',
    fontWeight: '600',
    fontSize: 24,
  },
});