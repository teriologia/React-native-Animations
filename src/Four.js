import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Carousel from 'react-native-snap-carousel';

const {width, height} = Dimensions.get('window');

class Four extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      data: ['ITEM', 'ITEM', 'ITEM', 'ITEM', 'ITEM', 'ITEM'],
      content: [
        'content',
        'content',
        'content',
        'content',
        'content',
        'content',
        'content',
        'content',
        'content',
        'content',
        'content',
        'content',
        'content',
        'content',
      ],
    };
  }

  renderContent = (item, index) => {
    return (
      <View style={styles.contentCard} key={index}>
        <Text>{item}</Text>
      </View>
    );
  };

  renderCardItem = ({item, index}) => {
    return (
      <View style={styles.card} key={index}>
        <Text>{`${item} ${index + 1}`}</Text>
      </View>
    );
  };

  /**
   * @event Native coming from ScrollView
   */

  handleHeader = event => {
    if (event.nativeEvent.contentOffset.y > 0 && !this.state.open) {
      this.setState({open: !this.state.open});
    } else if (event.nativeEvent.contentOffset.y == 0) {
      this.setState({open: !this.state.open});
    }
  };
  /**
   * actually not handling anim only creating shadow
   */
  handleAnim = () => {
    if (this.state.open) {
      const style = {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
      };

      return style;
    }
  };

  render() {
    return (
      <>
        <Animated.View style={[styles.header, {...this.handleAnim()}]}>
          <Text style={{color: '#FFF', fontWeight: 'bold', fontSize: 16}}>
            HEADER
          </Text>
        </Animated.View>
        <ScrollView
          ref={e => (this.scrollView = e)}
          onScroll={this.handleHeader}
          style={{marginTop: 60}}
          stickyHeaderIndices={[1]}
          contentOffset={{y: 60}}>
          <View style={styles.head}>
            <Carousel
              ref={e => (this.Carousel = e)}
              data={this.state.data}
              renderItem={this.renderCardItem}
              sliderHeight={height * 0.35}
              itemHeight={height * 0.25}
              sliderWidth={400}
              itemWidth={300}
            />
          </View>
          <View>
            <TouchableOpacity
              style={styles.stickyHeader}
              onPress={() => this.scrollView.scrollTo({y: 0})}>
              <Icon name={'chevron-up'} size={25} color="#FFF" />
            </TouchableOpacity>
          </View>
          {this.state.content.map((el, i) => this.renderContent(el, i))}
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e74c3c',
    width,
    height: 60,
  },
  contentCard: {
    borderBottomWidth: 1,
    paddingVertical: 20,
  },
  card: {
    backgroundColor: '#FFF',
    width: 300,
    height: 200,
    marginTop: height * 0.07,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  head: {
    backgroundColor: '#e74c3c',
    alignItems: 'center',
    justifyContent: 'center',
    height: height * 0.45,
  },
  stickyHeader: {
    height: 60,
    backgroundColor: '#e74c3c',
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{rotate: '180deg'}],
  },
});

export default Four;
