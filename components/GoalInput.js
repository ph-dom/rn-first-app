import React, { useState } from 'react';
import { View, TextInput, Button, Modal, StyleSheet } from 'react-native';

const GoalInput = props => {
	const [enteredGoal, setEnteredGoal] = useState('');
	
	const addGoalHandler = () => {
		props.handleAddGoal(enteredGoal);
		setEnteredGoal('');
	} 

	return (
		<Modal visible={props.visible} animationType="slide">
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Course Goal"
					style={styles.input}
					value={enteredGoal}
					onChangeText={enteredText => setEnteredGoal(enteredText)}
				/>
				<View style={styles.actions}>
					<Button
						title="CANCEL"
						color="red"
						onPress={() => props.setIsAddMode(false)}
					/>
					<Button
						title="ADD"
						onPress={addGoalHandler}
					/>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
		marginBottom: 10
  },
	actions: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '60%' 
	}
});

export default GoalInput;