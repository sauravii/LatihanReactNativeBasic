import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import SampleComponent from './SampleComponent';
import StylingComponent from './StylingComponent';
import FlexboxLayout from './FlexboxLayouting';
import Cart from './Cart';

// Functional Component
const App = () => {
  // return <SampleComponent />;
  return (
    <View>
      <ScrollView>
        <SampleComponent />
        <StylingComponent />
        <FlexboxLayout />
        <Cart />
      </ScrollView>
    </View>
  );
};

export default App;

{
  /*
Basic Component React Native :
- View
- Text
- Text Input
- Image
- Scroll View
- Stylesheet
*/
}
