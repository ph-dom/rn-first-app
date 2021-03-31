import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const handleAddGoal = goal => {
    setGoals(goals => [...goals, { id: Math.random().toString(), value: goal }]);
    setIsAddMode(false);
  }

  const handleTouchGoal = idGoal => {
    setGoals(goals => goals.filter(goal => goal.id !== idGoal));
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        handleAddGoal={handleAddGoal}
        setIsAddMode={setIsAddMode}
      />
      <FlatList 
        data={goals}
        renderItem={itemData => (
          <GoalItem
            handleTouchGoal={handleTouchGoal}
            id={itemData.item.id}
            title={itemData.item.value}
          />
        )}
        keyExtractor={goal => goal.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
