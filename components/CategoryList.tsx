import { CategoryItem } from "@/components/CategoryItem";
import { StyleSheet, TouchableHighlight } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

type Category = {
    name: string,
    color: string
};


export function CategoryList({ items, itemOnPress }: { items: Category[], itemOnPress: () => void }) {
    return (
        <ScrollView style={style.container}>
            {items.map(item => (
                <TouchableHighlight onPress={itemOnPress} key={item.name}>
                    <CategoryItem name={item.name} color={item.color} />
                </TouchableHighlight>
            ))}
        </ScrollView>
    )
}

const style = StyleSheet.create({
    container: {
        overflow: "scroll"
    }
})
