import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import SampleComponent from './SampleComponent';
import StylingComponent from './StylingComponent';

// Functional Component
const App = () => {
  // return <SampleComponent />;
  return (
    <ScrollView>
      <View>
        <SampleComponent />
        <StylingComponent />
      </View>
    </ScrollView>
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
