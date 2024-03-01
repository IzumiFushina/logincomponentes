import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
     
    },
    text: {
      color: 'white',
      fontSize: 50,
    },
    inputname: {
      color: 'black',
      borderWidth: 1,
      borderColor: 'black',
      marginBottom: 10,
      width: 300,
      height: 50, 
      backgroundColor: 'white',
    
    },
    button: {
      color: 'white',
      backgroundColor: 'black',
      fontSize: 20,
    },
    sunny: {
        width: 250,
        height: 250,
        bottom: 550,
  
      },
    titulo: {
      fontWeight: 'bold',
      fontSize: 50,
      marginBottom: 20,
      borderBottomColor: 'black',
      borderBottomWidth: 2,
    },
    sun: {
      flex: 2,
      alignItems: 'center',
      justifyContent: 'center',
      width:'100%',
      height: '100%',
    },
  });

export default styles;