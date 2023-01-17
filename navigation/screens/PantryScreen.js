import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import FoodList from "../../Components/FoodList";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { auth } from "../../firebase-config";

export default function Pantry({ setFoodlist, foodList, styles }) {
	//this is a mutable change without using setState - seems dodgy no?
	//it orders the list by expiry with most recent first
	foodList.sort((a, b) => a.expiryDate.getTime() - b.expiryDate.getTime());
	//gets todays date (and time)
	let todaysDate = new Date();
	return (
		<View style={styles.pagestyle}>
			<View style={styles.displaybox}>
				<View>
					<Text style={styles.subtitle}> Total: ({data.length} items)</Text>
					<FlatList
						data={foodList}
						renderItem={({ item }) => {
							//calculates days left until expiry
							let msleft = item.expiryDate.getTime() - todaysDate.getTime();
							let daysLeft = msleft / 1000 / 60 / 60 / 24;
							let daysLeftRounded = Math.floor(daysLeft);
							return (
								<GestureHandlerRootView>
									 <FoodList name={item.name} expiry={daysLeftRounded} foodList={foodList} setFoodList={setFoodList} id={item.id}/>
								</GestureHandlerRootView>
							);
						}}
					/>
				</View>
			</View>
		</View>
	);

}
