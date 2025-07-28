import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import CustomButton from "../components/Button";
import { useState } from "react";
import TodoCard from "../components/ToDoCard";

function ToDo() {

  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<string[]>([]);
  function addTask() {
    if (task.trim()) {
      setTasks(prev => [task, ...prev]);
      setTask('');
    }
  }
  function deleteTask(index: number) {
    setTasks(prev => prev.filter((_, i) => i !== index));
  }
  return (
    <View style={styles.inputContainer} >
      <TextInput
        placeholder="Add a new task"
        style={styles.input}
        value={task}
        onChangeText={setTask}
      />
      <CustomButton name="Add Task" onPress={addTask} />

      <FlatList
        data={tasks}
        renderItem={({ item, index }) => <TodoCard task={item} onDelete={() => deleteTask(index)} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

export default ToDo;

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 12,
    paddingHorizontal: 20,
  },
  input: {
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 12,
    borderBottomWidth: 1,
  },
});