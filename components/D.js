import * as React from 'react';
import { Button, Text, View } from 'react-native';

function D({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>  
        <Text>D D D D D D D D D!</Text>
        <Button
          title="Go to A"
          onPress={() => navigation.navigate('A')}
          />
          <Button
          title="Go to B"
          onPress={() => navigation.navigate('B')}
        />
        <Button
          title="Go to C"
          onPress={() => navigation.navigate('C')}
        />
        <Button
          title="Go to D"
          onPress={() => navigation.navigate('D')}
        />
        
      </View>
    );
  }

  export default D;