import * as React from 'react';
import { Button, Text, View } from 'react-native';

function B({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>  
        <Text>B B B B B B B B B!</Text>
        <Button
          title="Go to D"
          onPress={() => navigation.navigate('D')}
        />
        
      </View>
    );
  }

  export default B;