import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  Animated,
  Easing,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
const FingerPrint = Animated.createAnimatedComponent(Icon);

class Second extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false,
    };
    this.animate = new Animated.Value(0);
  }

  animateFunc = () => {
    this.setState({value: !this.state.value});

    Animated.timing(this.animate, {
      toValue: this.state.value ? 0 : 1,
      duration: 300,
      easing: Easing.linear,
    }).start();
  };

  scaleAnim = () => {
    const scaleInterpolate = this.animate.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 80],
    });

    const incrementBoxTransformStyle = {
      transform: [
        {
          scale: scaleInterpolate,
        },
      ],
    };
    return incrementBoxTransformStyle;
  };

  textAnim = () => {
    const textAnim = this.animate.interpolate({
      inputRange: [0, 1],
      outputRange: ['#000', '#FFF'],
    });

    const color = {
      color: textAnim,
    }
    return color;
  };

  render() {
    const {width} = Dimensions.get('window');
    return (
      <View style={styles.container}>
        <View
          style={{width, height: '25%', backgroundColor: '#FFF', zIndex: 10}}
        />
        <View style={styles.cardContainer}>
          <Animated.Text style={[styles.title, {...this.textAnim()}]}>
            Payment
          </Animated.Text>
          <Animated.Text style={[styles.contentText, {...this.textAnim()}]}>
            Enable fingerPring payment. Make payments using the fingerprint
            sensor
          </Animated.Text>
          <View style={styles.bottomContainer}>
            <FingerPrint
              name="fingerprint"
              size={40}
              color={this.textAnim().color}
            />
            <Switch
              value={this.state.value}
              onValueChange={() => {
                this.animateFunc();
              }}
              trackColor={{true: 'rgb(66, 203, 251)'}}
              thumbColor="rgb(66, 180, 251)"
            />
            <Animated.View style={[styles.mask, {...this.scaleAnim()}]} />
          </View>
        </View>
        <View
          style={{width, height: '25%', backgroundColor: '#FFF', zIndex: 10}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    flex: 1,
    overflow: 'hidden',
    marginVertical: 10,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    padding: 20,
    justifyContent: 'space-around',
  },
  title: {
    alignSelf: 'center',
    fontSize: 20,
    color: '#000',
  },
  contentText: {
    color: '#000',
    fontSize: 14,
    textAlign: 'center',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  mask: {
    zIndex: -1,
    position: 'absolute',
    width: 10,
    height: 10,
    borderRadius: 100,
    backgroundColor: 'rgb(66, 180, 251)',
    alignSelf: 'center',
    right: '26%',
  },
});

export default Second;
