import * as React from 'react';
import { Button, Text, View } from 'react-native';

function A({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
        <Text>A A A A A A A A A!</Text>
        <Button
          title="Go to B"
          onPress={() => navigation.navigate('B')}
        />
      </View>
    );
  }

  export default A;