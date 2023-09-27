import { StatusBar } from 'expo-status-bar';
import { Switch, ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { LightMode, DarkMode } from './styles/Styles';
import { useState } from 'react';
import { RadioButton } from 'react-native-paper';
import NumericInput from 'react-native-numeric-input';

export default function App() {

  const [isOn, setIsOn] = useState(false);
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [hours, setHours] = useState(0);
  const [sex, setSex] = useState('male');
  const [result, setResult] = useState(0);

  const toggleSwitch = () => setIsOn(isOn => !isOn);

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
    <View style={LightMode.containter}>
      <ScrollView>
        <View style={LightMode.switchRow}>
          <Switch
            style={{ transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }] }}            
            value={isOn}
            onValueChange={toggleSwitch}
            thumbColor='#18e780'
            trackColor={{ false:'#e25412', true:'#ffffff'}}
    
          />
        </View>
        <Text style={LightMode.header}>Alcometer</Text>
        <Text style={LightMode.text}>Weight</Text>
          <TextInput
            style={LightMode.input} 
            onChangeText={setWeight} 
            value={weight}
            keyboardType="numeric"
          />
        <Text style={LightMode.text}>Bottles</Text>
            <View style={LightMode.numeric}>
                <NumericInput
                  onChange={b => setBottles(b)}
                  value={bottles}
                  totalHeight={55}
                  totalWidth={175}
                  rounded
                  minValue={0}
                  borderColor='#ffffff'
                  rightButtonBackgroundColor='#18e780'
                  leftButtonBackgroundColor='#18e780'
                  textColor='#e25412'
                  iconStyle={{color:'#ffffff'}}
                />
            </View>
        <Text style={LightMode.text}>Hours</Text>
            <View style={LightMode.numeric}>
                <NumericInput
                  onChange={h => setHours(h)}
                  value={hours}
                  totalHeight={55}
                  totalWidth={175}
                  rounded
                  minValue={0}
                  borderColor='#ffffff'
                  rightButtonBackgroundColor='#18e780'
                  leftButtonBackgroundColor='#18e780'
                  textColor='#e25412'
                  iconStyle={{ color: '#ffffff' }}
                />
            </View>
        <RadioButton.Group onValueChange={newValue => setSex(newValue)} value={sex}>
          <View style={LightMode.radio}>
            <RadioButton value='male' color='#18e780'/>
            <Text style={LightMode.text}>Male</Text>
          </View>
          <View style={LightMode.radio}>
            <RadioButton value='female' color='#18e780' />
            <Text style={LightMode.text}>Female</Text>
          </View>
        </RadioButton.Group>
        <Text style={LightMode.result}>{result.toFixed(2)}</Text>
        <TouchableOpacity style={LightMode.button}>
          <Text style={LightMode.buttonText} onPress={calculate}>Calculate</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

