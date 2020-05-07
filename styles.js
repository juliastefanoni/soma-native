import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 20,
    alignItems: 'center'
  },
  input: {
    height: 60,
    textAlign: "center",
    width: "50%",
    fontSize: 30,
    marginTop: 10
  },
  botao: {
    width: 120,
    backgroundColor: "#97d1a6",
    borderRadius: 8,
  },
  valores: {
    flexDirection: "row",
    marginTop: "60%"
  },
  textBotao: {
    alignSelf: "center",
    padding: 10,
    fontSize: 20
  },
  resultado: {
    fontSize: 50,
    color: "#a3c2ac"
  },
  textResultado: {
    color: "black",
    fontSize: 20,
    marginTop: "20%"
  },
  containerResultado: {
    marginTop: "15%",
    alignItems: 'center'
  }
});