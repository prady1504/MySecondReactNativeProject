import { FlatList, StyleSheet, useWindowDimensions, View } from "react-native";
import GridCard from "../components/gridCard";


export default function Grid() {
    const { width } = useWindowDimensions();
    const isTablet = width >= 768; 
    const numColumns = isTablet ? 3 : 2;

    const cards = [
        { id: 1, title: 'Card 1', description: 'This is the first card' , color: 'red' },
        { id: 2, title: 'Card 2', description: 'This is the second card', color: 'pink' },
        { id: 3, title: 'Card 3', description: 'This is the third card' , color: 'green' },
        { id: 4, title: 'Card 4', description: 'This is the fourth card',   color: 'yellow' },
        { id: 5, title: 'Card 5', description: 'This is the fifth card', color: 'cyan' },
        { id: 6, title: 'Card 6', description: 'This is the sixth card', color: 'magenta' },
    ];

    function renderItem({ item }) {
        return <GridCard title={item.title} message={item.description} color={item.color} />;
    }

    return (
        <FlatList
            key={numColumns}
            data={cards}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={numColumns}
            contentContainerStyle={styles.container}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9f9f9',
    }
});