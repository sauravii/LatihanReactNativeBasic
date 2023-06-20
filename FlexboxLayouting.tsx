import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const FlexboxLayout = () => {
  return (
    <View>
      {/* Header */}
      <View style={styles.kotakHeader}>
        <Text style={styles.text}>Flexbox Layout</Text>
      </View>
      {/* Body */}
      <View style={{marginHorizontal: 20, marginBottom: 50}}>
        {/* Kotak */}
        <View style={styles.boxKotak}>
          <View
            style={{
              backgroundColor: '#f64747',
              width: 50,
              height: 50,
            }}></View>
          <View
            style={{
              backgroundColor: '#ffff9f',
              width: 50,
              height: 100,
            }}></View>
          <View
            style={{
              backgroundColor: '#66cc99',
              width: 50,
              height: 150,
            }}></View>
          <View
            style={{
              backgroundColor: '#bae4e5',
              width: 50,
              height: 200,
            }}></View>
        </View>
        {/* Profile */}
        <View
          style={{marginTop: 15, flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('./src/images/gambar.jpg')}
            style={styles.imgProfile}
          />
          <View>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Sheren Aura</Text>
            <Text>Purwokerto</Text>
          </View>
        </View>
        {/* Slider */}
        {/* <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <Text style={styles.textSlider}>Beranda</Text>
          <View>
            <Text style={styles.textOn}>Reels</Text>
            <View
              style={{
                backgroundColor: 'powderblue',
                width: '100%',
                height: 4,
              }}
            />
          </View>
          <Text style={styles.textSlider}>Saved</Text>
          <Text style={styles.textSlider}>Liked</Text>
        </View> */}
        {/* Highlight */}
        <View>
          <Text style={{marginTop: 12, fontSize: 16, fontWeight: 'bold'}}>
            Penggunaan Props
          </Text>
          <ScrollView horizontal>
            <View style={{marginTop: 12, flexDirection: 'row'}}>
              <Highlight judul="sheren" />
              <Highlight judul="sekolah" />
              <Highlight judul="telkom" />
              <Highlight judul="bb" />
              <Highlight judul="febi" />
              <Highlight judul="azra" />
              <Highlight judul="adit" />
            </View>
          </ScrollView>
        </View>
        {/* Counter */}
        <Counter />
      </View>
    </View>
  );
};

type HighlightProps = {
  judul: string;
};

const Highlight = (Props: HighlightProps) => {
  return (
    <View style={{alignItems: 'center', marginRight: 15}}>
      <Image
        source={require('./src/images/hl1.jpg')}
        style={styles.imgHighlight}
      />
      <Text style={styles.textHighlight}>{Props.judul}</Text>
    </View>
  );
};

const Counter = () => {
  const [number, setNumber] = useState(0);
  return (
    <View>
      <View>
        <Text
          style={{
            marginTop: 20,
            marginBottom: 15,
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          Penggunaan State
        </Text>
      </View>
      <View>
        <TouchableOpacity>
          <View>
            <Text
              onPress={() => setNumber(number + 1)}
              style={styles.textCounter}>
              Tambah
            </Text>
          </View>
        </TouchableOpacity>
        <View>
          <Text style={{fontSize: 18, fontWeight: '800'}}>{number}</Text>
        </View>
        <View>
          <Text
            onPress={() => setNumber(number - 1)}
            style={styles.textCounter}>
            Kurang
          </Text>
        </View>
        <View>
          <Text onPress={() => setNumber(0)} style={styles.textCounter}>
            Reset
          </Text>
        </View>
      </View>
    </View>
  );
};

export default FlexboxLayout;

// StyleSheet
const styles = StyleSheet.create({
  kotakHeader: {
    height: 50,
    backgroundColor: '#392e4a',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: '200',
    color: 'white',
    marginTop: 10,
    marginLeft: 20,
    opacity: 0.85,
  },
  boxKotak: {
    backgroundColor: '#ede7e1',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  imgProfile: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
  },
  textSlider: {
    fontSize: 15,
  },
  textOn: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  imgHighlight: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
  },
  textHighlight: {
    marginTop: 4,
  },
  textCounter: {
    color: 'cyan',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 8,
  },
});
