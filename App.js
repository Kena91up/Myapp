import { useState } from 'react';
import { StyleSheet, View, FlatList} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
// flastlist also for scrolling to work it faster in mobile more data//
export default function App() {
  const [courseGoal , setCourseGoal] = useState([]);

  function addGoalHandler(enteredGoalText){
    // for updating
   setCourseGoal((currentCourseGoal) => [
    ...currentCourseGoal,  
    {text:enteredGoalText, id: Math.random().toString()},
  ]);
  }
  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }
  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler}/>
      <View  style={styles.goalsContainer}>
        <FlatList data={courseGoal} 
           renderItem={(itemData) => {
            return (
            <GoalItem text={itemData.item.text} 
              id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}/>
                );
      }} 
      KeyExtractor={(item, index) => {
      return item.id;
      }}
        alwaysBounceVertical={false}
      />
        </View>
      </View>
   );
}
const styles = StyleSheet.create({
 appContainer: {
  flex: 1,
  paddingTop: 50,
  paddingHorizontal: 16
 },
 
 goalsContainer:{
  flex: 4
}
});
