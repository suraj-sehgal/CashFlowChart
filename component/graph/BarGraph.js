import React from "react";
import { StyleSheet, View } from "react-native";
import { VictoryAxis, VictoryBar, VictoryChart, VictoryPie, VictoryTheme } from "victory-native";



const BarGraph = ({ expenses }) => {
    console.log(expenses);
    const data = [
        { x: 1, y: parseInt(expenses.Transportation) },
        { x: 2, y: parseInt(expenses.Housing)},
        { x: 3, y: parseInt(expenses.Entertainment) },
        { x: 4, y: parseInt(expenses.Education) },
        { x: 5, y: parseInt(expenses.Healthcare) },
        { x: 6, y: parseInt(expenses.Utilities) },
        { x: 7, y: parseInt(expenses.Miscellaneous) },
    ];

    const pieData = [
        { x: "Tr", y: parseInt(expenses.Transportation) },
        { x: "Ho", y: parseInt(expenses.Housing)},
        { x: "En", y: parseInt(expenses.Entertainment) },
        { x: "Ed", y: parseInt(expenses.Education) },
        { x: "He", y: parseInt(expenses.Healthcare) },
        { x: "Ut", y: parseInt(expenses.Utilities) },
        { x: "Mi", y: parseInt(expenses.Miscellaneous) },
    ];



    return (
        <View style={styles.container}>
            <VictoryChart
                // adding the material theme provided with Victory
                theme={VictoryTheme.material}
                domainPadding={20}
            >
                <VictoryAxis
                    tickValues={[1, 2, 3, 4, 5, 6, 7]}
                    tickFormat={["Tr", "Ho", "En", "Ed", "He", "Ut", "Mi"]}
                />
                <VictoryAxis
                    dependentAxis
                    tickFormat={(x) => (`${x / 1000}`)}
                />
                <VictoryBar
                    data={data}
                    x="x"
                    y="y"
                />
            </VictoryChart>
            <VictoryPie
                colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
                data={pieData}
            />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5fcff",
    }
});

export default BarGraph;