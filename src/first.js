/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated, Easing, TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

class First extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price: 29,
            count: 0,
            open: false,
        };
        this.plus = new Animated.Value(0),
        this.increment = new Animated.Value(0);
        this.decrementAnim = new Animated.Value(0);
    }

    Animate = () => {
        if (!this.state.open) {
            Animated.timing(this.plus, {
                toValue: 1,
                duration: 200,
                easing: Easing.linear,
            }).start(() => {
                this.setState({ open: true });
            });
        }
        else {
            Animated.timing(this.increment, {
                toValue: 1,
                duration: 200,
                easing: Easing.linear,
            }).start(() => {
                this.increment.setValue(0);
            });
        }
    }

    decrementFontAnim = () => {
        Animated.timing(this.decrementAnim, {
            toValue: 1,
            duration: 400,
            easing: Easing.linear,
        }).start(this.decrementAnim.setValue(0));
    }

    decrementFont = () => {
        const decrementFontSize = this.decrementAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [18, 22],
        });
        const fontStyle = {
            fontSize: decrementFontSize
        };
        return fontStyle
    }

    decrement = () => {
        this.decrementFontAnim();
        const decrementBoxScaleX = this.plus.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0.7],
        });

        const decrementBoxtranslateX = this.plus.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -100],
        });

        const decrementBoxTransformStyle = {
            transform: [
                {
                    scale: decrementBoxScaleX,
                },
                {
                    translateX: decrementBoxtranslateX,
                },
            ],
        };
        return decrementBoxTransformStyle;
    }

    iconAnimation = () => {
        const spin = this.plus.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '90deg'],
        });
        return spin;
    };

    incrementBoxanim = () => {
        this.decrementFontAnim();
        const incrementBoxScaleX = this.plus.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0.7],
        });

        const incrementBoxtranslateX = this.plus.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 30],
        });

        const incrementBoxRotate = this.plus.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '90deg'],
        });

        if (this.state.open) {
            const incrementBoxRotate = this.increment.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '90deg'],
            });
            return {
                transform: [
                    {
                        scale: incrementBoxScaleX,
                    },
                    {
                        translateX: incrementBoxtranslateX,
                    },
                    {
                        rotate: incrementBoxRotate,
                    },
                ],
            };
        }

        const incrementBoxTransformStyle = {
            transform: [
                {
                    scale: incrementBoxScaleX,
                },
                {
                    translateX: incrementBoxtranslateX,
                },
                {
                    rotate: incrementBoxRotate,
                },
            ],
        };
        return incrementBoxTransformStyle;
    }

    CounterAnim = () => {
        const counterBoxScale = this.plus.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 1.2],
        });
        const counterBoxTranslateX = this.plus.interpolate({
            inputRange: [0, 1],
            outputRange: [1, -20],
        });

        const incrementBoxTransformStyle = {
            transform: [
                {
                    scale: counterBoxScale,
                },
                {
                    translateX: counterBoxTranslateX,
                },
            ],
        };
        return incrementBoxTransformStyle;
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden />
                <View style={styles.mainCard}>
                    <View style={styles.placeHolderOne} />
                    <View style={styles.secondPlaceHolderContainer}>
                        <View style={styles.placeHolderSecond} />
                        <View style={[styles.placeHolderSecond, { width: 85 }]} />
                    </View>
                    <View style={styles.bottomContainer}>
                        <View><Text style={styles.price}>{`$${this.state.count <= 1 ? (this.state.price) : (this.state.price * this.state.count)}`}</Text></View>
                        <View style={{ paddingTop: 50 }}>
                            <Animated.View style={[styles.plus, { ...this.incrementBoxanim() }]}>
                                <TouchableOpacity style={styles.touch} onPress={() => {
                                    this.Animate();
                                    this.setState({ count: this.state.count + 1 });
                                }}>
                                    <Icon name='plus' size={40} color='#FFF' />
                                </TouchableOpacity>
                            </Animated.View>
                            <Animated.View style={[styles.counterView, { ...this.CounterAnim() }]}>
                                <Animated.Text style={{ ...this.decrementFont() }}>{this.state.count}</Animated.Text>
                            </Animated.View>
                            <Animated.View style={[styles.decrement, { ...this.decrement() }]}>
                                <TouchableOpacity style={styles.touch} onPress={() => this.state.count !== 1 ? (this.setState({ count: this.state.count - 1 })) : null}>
                                    <Icon name='minus' size={30} />
                                </TouchableOpacity>
                            </Animated.View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    touch: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainCard: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        width: '100%',
        height: 260,
        backgroundColor: '#FFF',
        padding: 25,
    },
    placeHolderOne: {
        backgroundColor: '#cbd0d6',
        borderRadius: 10,
        width: '100%',
        height: 50,
    },
    secondPlaceHolderContainer: {
        marginTop: 15,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    placeHolderSecond: {
        backgroundColor: '#cbd0d6',
        borderRadius: 5,
        height: 20,
        width: 150,
        marginRight: 20,
    },
    bottomContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    price: {
        color: '#7a797c',
        fontSize: 52,
    },
    plus: {
        backgroundColor: '#38cde5',
        width: 80,
        height: 80,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 4,
    },
    counterView: {
        position: 'absolute',
        top: '65%',
        // backgroundColor: 'red',
        backgroundColor: '#f3f6f7',
        width: 80,
        height: 80,
        borderRadius: 100,
        zIndex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    decrement: {
        position: 'absolute',
        top: '65%',
        width: 80,
        height: 80,
        borderRadius: 100,
        borderWidth: 4,
        borderColor: '#cbd0d6',
        backgroundColor: '#FFF',
        zIndex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default First;
