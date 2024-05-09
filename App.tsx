import React, { useState } from 'react';
import { Alert, Button, Image, Text, TextInput, View, ToastAndroid,} from 'react-native';

export default function App() {
  const [text, setText] = useState('');

  const checkPalindrome = () => {
    const processedText = text.toLowerCase().replace(/[^a-z0-9]/gi, '');
    const reversedText = processedText.split('').reverse().join('');

    if (processedText === reversedText) {
      
      ToastAndroid.show('This is a Palindrome!', ToastAndroid.SHORT);
      Alert.alert('Palindrome!', 'This is a palindrome.', [{ text: 'OK' }]);
    } else {
      ToastAndroid.show('This is Not a Palindrome.', ToastAndroid.SHORT);
      Alert.alert('Not a Palindrome!', 'This is not a palindrome.', [{ text: 'OK' }]);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Check The Palindrome Text</Text>
      <Image
        source={{
          uri: 'https://paundracsr.github.io/undrcsr/images/slider-img.png',
        }}
        style={{ width: 250, height: 250 }}
      />
      <Text>Palindrome Validator</Text>
      <TextInput
        style={{
          borderWidth: 2,
          borderColor: 'black',
          width: 210,
          height: 50,
          padding: 10,
          margin: 10,
          borderRadius: 10,
        }}
        placeholder="Input Text"
        value={text}
        onChangeText={setText}
      />
      <Button title="Validate" onPress={checkPalindrome} />
    </View>
  );
}