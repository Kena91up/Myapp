import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <Modal visible={props.visible} animationType='slide'>
    <View style={styles.inputContainer}>
    <Image style={styles.image} source={require('../assets/OIP.png')}/>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Add Goal" onPress={addGoalHandler} />
        </View>
        <View style={styles.button}>
          <Button title="Cancle" onPress={props.onCancle}/>
        </View>
      </View>
    </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#',
    backgroundColor: 'gray'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '90%',
    padding: 8,
  },
  buttonContainer: {
    flexDirection:'row',
    marginTop: 20,
  },
  button:{
    width: '30%' ,
    margin: 10,
  },
  image:{
    width: 100,
    height: 100,
    margin: 20,
  }
});