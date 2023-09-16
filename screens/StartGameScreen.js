import React, { useState } from "react";
import { Alert, Text, TextInput, View } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import common from "../assets/styles/common";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

const StartGameScreen = (props) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberInputHandler = (enteredNumber) => {
    setEnteredNumber(enteredNumber);
  };
  const resetInputHandler = () => {
    setEnteredNumber("");
  };
  const confirmButton = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number!", "Number must be between 0 and 99.", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    props.onPickedNumber(chosenNumber);
  };
  return (
    <View style={common.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
      <InstructionText>Enter a Number</InstructionText>
        <TextInput
          style={common.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <View style={common.buttonsContainer}>
          <View style={common.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={common.buttonContainer}>
            <PrimaryButton onPress={confirmButton}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
   
  );
};

export default StartGameScreen;
