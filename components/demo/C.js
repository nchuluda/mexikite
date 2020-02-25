import * as React from 'react';
import { Button, Text, View } from 'react-native';

function C({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>  
        <Text>C C C C C C C C C!</Text>
        
        
        <Button
          title="Go to D"
          onPress={() => navigation.navigate('D')}
        />
      </View>
    );
  }

  export default C;