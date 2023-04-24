import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoal , setCourseGoal] = useState([]);

  function goalInputHandler(enteredText){
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler(){
    // for updating
   setCourseGoal((currentCourseGoal) => [
    ...currentCourseGoal, enteredGoalText]);
  }
  return (
    <View style={styles.appContainer}>
    
      <View style={styles.inputContainer}>
          <TextInput 
            style={styles.textInput} 
            placeholder=' Your course goal!' 
            onChangeText={goalInputHandler} />
          <Button title='Add Goal' onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
     
        {courseGoal.map((goal) => ( 
          <View style={styles.goalIteams} keys={goal}>
        <Text style={styles.goalText}>{goal}</Text>
        </View>)
       )}
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
 inputContainer:{
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 24,
  borderBottomWidth: 1,
  borderBottomColor:'#cccccc'
 },
 textInput:{
  borderColor:'#cccccc',
  borderWidth: 1,
  width:'70%',
  marginRight: 8,
  padding: 8
 },
 goalsContainer:{
  flex: 4
 },
 goalIteams: {
  margin: 6,
  padding: 6,
  borderRadius: 10,
  backgroundColor: 'indigo'
 },
 goalText:{
  color:'white'
 }

});
