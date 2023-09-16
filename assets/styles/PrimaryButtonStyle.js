import { StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const styles = StyleSheet.create({
    buttonOuterContainer:{
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },
    buttonInnerContainer:{
        backgroundColor: Colors.brown200,
        borderRadius: 28,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,

    },
    buttonText:{
        color: 'white',
        textAlign: 'center',
    },
    pressed:{
        opacity: 0.75,
    },
    // container:{},

});

export default styles;