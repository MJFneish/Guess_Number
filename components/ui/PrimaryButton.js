import React from "react";
import { Pressable, Text, View } from "react-native";

import styles from "../../assets/styles/PrimaryButtonStyle";

const PrimaryButton = (props) => {
  const onPress = props.onPress;
  
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.buttonText}>{props.children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;
