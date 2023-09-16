import { StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const styles = StyleSheet.create({
    rootContainer:{
      flex: 1,
      marginTop: 100,
      alignItems: 'center',
    },
    numberInput: {
      height: 50,
      width: 50,
      fontSize: 32,
      borderBottomColor: Colors.yellow,
      borderBottomWidth: 2,
      color: Colors.yellow,
      marginVertical: 8,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    buttonsContainer: {
      flexDirection: 'row',
    },
    buttonContainer: {
      flex: 1,
    },
    rootScreen: {
      flex: 1,
    },
    backgroundImage: {
      opacity: 0.15,
    },
  });

  export default styles;