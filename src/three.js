// import React, {Component} from 'react';
// import {View, Text, StyleSheet, Dimensions, Animated} from 'react-native';
// import {PanGestureHandler, State} from 'react-native-gesture-handler';

// const {width, height} = Dimensions.get('window');

// class Three extends Component {
//   constructor(props) {
//     super(props);
//     this.translateY = new Animated.Value(0);
//     this.translateX = new Animated.Value(0);
//     this.lastOffset = 0;
//     this.lastOffsetX = 0;
//     this.state = {};
//   }

//   onGesture = () => {
//     this.anim = Animated.event(
//       [
//         {
//           nativeEvent: {
//             translationY: this.translateY,
//             translationX: this.translateX,
//           },
//         },
//       ],
//       {useNativeDriver: true},
//     );
//     return this.anim;
//   };

//   handleState = event => {
//     if (event.nativeEvent.oldState == State.ACTIVE) {
//       if (event.nativeEvent.absoluteY < 50) {
//         this.lastOffset = 20;
//       } else if (event.nativeEvent.absoluteY >= height - 75) {
//         this.lastOffset = height - 100;
//       } else {
//         this.lastOffset += event.nativeEvent.translationY;
//       }
//       this.translateY.setOffset(this.lastOffset);
//       this.translateY.setValue(0);
//     }
//     if (event.nativeEvent.absoluteX) {
//       this.translateX.setValue(1);
//     }
//     this.translateX.setOffset(this.lastOffsetX);
//     this.translateX.setValue(0);
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.firstPage}>
//           <Text>first</Text>
//           <Text>first</Text>
//           <Text>first</Text>
//           <Text>first</Text>
//           <Text>first</Text>
//         </View>
//         <View style={styles.secondPage}>
//           <PanGestureHandler
//             hitSlop={{vertical: 150, width: 150}}
//             onGestureEvent={this.onGesture()}
//             onHandlerStateChange={this.handleState}>
//             <Animated.View
//               style={[
//                 styles.menuView,
//                 {
//                   transform: [
//                     {translateY: this.translateY, translateX: this.translateX},
//                   ],
//                 },
//               ]}>
//               <View style={styles.menuIcon} />
//               <View style={styles.menuIcon} />
//               <View style={{backgroundColor: '#FFF', width: 10, height: 2}} />
//             </Animated.View>
//           </PanGestureHandler>
//           <Text> second </Text>
//           <Text> second </Text>
//           <Text> second </Text>
//           <Text> second </Text>
//           <Text> second </Text>
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     backgroundColor: '#FFF',
//   },
//   firstPage: {
//     width: width - 40,
//     height,
//     paddingRight: 20,
//   },
//   secondPage: {
//     backgroundColor: '#f9ca24',
//     width: width - 20,
//     height,
//     paddingLeft: 20,
//   },
//   menuView: {
//     position: 'absolute',
//     width: 40,
//     height: 40,
//     backgroundColor: '#f9ca24',
//     borderRadius: 50,
//     left: -25,
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 99,
//     top: 20,
//   },
//   menuIcon: {
//     backgroundColor: '#FFF',
//     width: 10,
//     height: 2,
//     marginBottom: 2,
//   },
// });

// export default Three;

//in progress
