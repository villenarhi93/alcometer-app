import { StatusBar } from 'expo-status-bar';
import { Switch, ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { LightMode, DarkMode } from './styles/Styles';
import { useState } from 'react';
import { RadioButton } from 'react-native-paper';
import NumericInput from 'react-native-numeric-input';

export default function App() {

  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [hours, setHours] = useState(0);
  const [sex, setSex] = useState('male');
  const [result, setResult] = useState(0);
  const [isOn, setIsOn] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const Style = darkMode ? DarkMode : LightMode;

  function calculate() {

    let litres = Number(bottles) * 0.33
    let grams = litres * 8 * 4.5
    let burning = Number(weight) / 10
    let gramsLeft = grams - burning * Number(hours)

    if ( sex == 'male') {
      let result = gramsLeft / (Number(weight) * 0.7)
      setResult(result) } else {
      let result = gramsLeft / (Number(weight) * 0.6)
      setResult(result)
      }
    
  }

  return (
    <View style={Style.containter}>
      <ScrollView>
        <View style={Style.switchRow}>
          <Switch
            style={{ transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }] }}            
            value={isOn}
            onValueChange={() => {setIsOn(prev => !prev); setDarkMode(prev => !prev)}}
            thumbColor='#18e780'
            trackColor={{ false:'#e25412', true:'#ffffff'}}
    
          />
        </View>
        <Text style={Style.header}>Alcometer</Text>
        <Text style={Style.text}>Weight</Text>
          <TextInput
            style={Style.input} 
            onChangeText={setWeight} 
            value={weight}
            keyboardType="numeric"
          />
        <Text style={Style.text}>Bottles</Text>
            <View style={Style.numeric}>
                <NumericInput
                  onChange={b => setBottles(b)}
                  value={bottles}
                  totalHeight={55}
                  totalWidth={175}
                  rounded
                  minValue={0}
                  borderColor='#18e780'
                  rightButtonBackgroundColor='#18e780'
                  leftButtonBackgroundColor='#18e780'
                  textColor='#e25412'
                  iconStyle={{color:'#ffffff'}}
                />
            </View>
        <Text style={Style.text}>Hours</Text>
            <View style={Style.numeric}>
                <NumericInput
                  onChange={h => setHours(h)}
                  value={hours}
                  totalHeight={55}
                  totalWidth={175}
                  rounded
                  minValue={0}
                  borderColor='#18e780'
                  rightButtonBackgroundColor='#18e780'
                  leftButtonBackgroundColor='#18e780'
                  textColor='#e25412'
                  iconStyle={{ color: '#ffffff' }}
                />
            </View>
        <RadioButton.Group onValueChange={newValue => setSex(newValue)} value={sex}>
          <View style={Style.radio}>
            <RadioButton value='male' color='#18e780'/>
            <Text style={Style.text}>Male</Text>
          </View>
          <View style={Style.radio}>
            <RadioButton value='female' color='#18e780' />
            <Text style={Style.text}>Female</Text>
          </View>
        </RadioButton.Group>
        <Text style={Style.result}>{result.toFixed(2)}</Text>
        <TouchableOpacity style={Style.button}>
          <Text style={Style.buttonText} onPress={calculate}>Calculate</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

