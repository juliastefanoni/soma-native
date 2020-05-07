import React, { useState } from 'react';
import { 
  Text,
  View,  
  TouchableOpacity,
  TextInput } from 'react-native';

import styles from './styles';

export default function App(){
  const [valorA, setValorA] = useState("");
  const [valorB, setValorB] = useState("");
  let [resultado, setResultado] = useState("");

  function somar() {
    const result = parseInt(valorA) + parseInt(valorB);

    setResultado(result);
  }

  return (
    <View style={styles.container}>
      <View style={styles.valores}> 
        <TextInput 
          placeholder="Valor A"
          keyboardType="numeric"
          style={styles.input}
          value={valorA}
          onChangeText={ (valor) => setValorA(valor) } 
        />
        <TextInput 
          placeholder="Valor B"
          keyboardType="numeric"
          style={styles.input}
          value={valorB}
          onChangeText={ (valor) => setValorB(valor) } 
        />
      </View>
      <View style={styles.containerResultado}>
        <TouchableOpacity style={styles.botao} onPress={somar}>
          <Text style={styles.textBotao}> Somar </Text>
        </TouchableOpacity>

        <Text style={styles.textResultado}> Resultado: <Text style={styles.resultado}> {resultado} </Text> </Text>
      </View>

    </View>
  );
}

