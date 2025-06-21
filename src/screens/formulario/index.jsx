import React, { useEffect } from 'react';
import{View, Text, StyleSheet, ScrollView, TextInput} from 'react-native'


export default function Formulario(){
  const [pergunta1, setPergunta1] = React.useState('');
  const [pergunta2, setPergunta2] = React.useState('');
  const [pergunta3, setPergunta3] = React.useState('');
  const [pergunta4, setPergunta4] = React.useState('');

    return(
        <ScrollView style={styles.container}>
          <Text style={styles.title}>Responda o questionário abaixo para que possamos personalizar sua experiência no nosso app!</Text>


          <View>
            <Text>Pergunta 1</Text>
            <TextInput 
              style={styles.input}
              value={pergunta1}
              onChangeText={setPergunta1}
            />
          </View>

          <View>
            <Text>Pergunta 2</Text>
            <TextInput 
              style={styles.input}
              value={pergunta2}
              onChangeText={setPergunta2}
            />
          </View>

          <View>
            <Text>Pergunta 3</Text>
            <TextInput 
              style={styles.input}
              value={pergunta3}
              onChangeText={setPergunta3}
            />
          </View>

          <View>
            <Text>Pergunta 4</Text>
            <TextInput 
              style={styles.input}
              value={pergunta4}
              onChangeText={setPergunta4}
            />
          </View>


        </ScrollView>
    )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight:700
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})