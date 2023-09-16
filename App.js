import StartGameScreen from "./screens/StartGameScreen";
import common from "./assets/styles/common";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground, SafeAreaView } from "react-native";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOverScreen from './screens/GameOverScreen';
import {useFonts} from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);
  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/Open_Sans/static/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/Open_Sans/static/OpenSans-Bold.ttf'),
  })

  if(!fontsLoaded){
    return <AppLoading />;
  }
  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };
  const gameOverHandler = (numberOfRounds) => {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }
  const resetGame = () => {
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} gameOverHandler={gameOverHandler} />;
  }

  if(gameIsOver && userNumber) {
    screen = <GameOverScreen userNumber={userNumber} roundNumber={guessRounds} resetGame={resetGame}/>
  }


  return (
    <LinearGradient colors={[ Colors.brown400, Colors.yellow]} style={common.rootScreen}>
      <ImageBackground
        resizeMode="cover"
        source={require("./assets/images/bgfav.jpg")}
        style={common.rootScreen}
        imageStyle={common.backgroundImage}
      >
        <SafeAreaView style={common.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}
