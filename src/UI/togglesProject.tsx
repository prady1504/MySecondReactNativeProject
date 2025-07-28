import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/Button";
import { useState } from "react";


function TogglesProject() {
    const [buttonName, setButtonName] = useState('Show Details');
    const [detailsVisible, setDetailsVisible] = useState(false);
    function toggleFeature() {
        if (buttonName === 'Show Details') {
            setButtonName('Hide Details');
            setDetailsVisible(true);
        } else {
            setButtonName('Show Details');
            setDetailsVisible(false);
        }
    }
    return (
        <View style={styles.container}>
            {detailsVisible && <Text style={styles.title}>Toggles Project</Text>}
            <CustomButton name={buttonName} onPress={toggleFeature} />
        </View>
    );
}

export default TogglesProject;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: 'gray',
    },
});