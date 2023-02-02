import {StyleSheet, Text, Image, View} from 'react-native';
import React, {useCallback} from 'react';
import Animated, {Value} from 'react-native-reanimated';
import Choice from './Choice';

// interface ICard {
//   name: string;
//   age: number;
//   uri: string;
//   isFirst: boolean;
//   swipe: any;
// }

const Card = ({name, age, uri, isFirst, swipe, ...rest}) => {
  const renderChoice = useCallback(() => {
    return (
      <>
        <View style={styles.likeContainer}>
          <Choice color="#00eda6" type="LIKE" />
        </View>
        <View style={styles.nopeContainer}>
          <Choice color="#ff006f" type="NOPE" />
        </View>
      </>
    );
  }, []);

  const animatedCardStyle = {
    transform: [...swipe],
  };
  console.log(swipe);

  return (
    <Animated.View style={[styles.card]} {...rest}>
      <Image
        style={styles.image}
        source={{
          uri: uri,
        }}
      />
      <Text style={styles.header}>{name + '    ' + age}</Text>
      <Text style={styles.pa20}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis,
        consequatur? Eaque molestiae dignissimos laudantium porro illum.
        Suscipit similique blanditiis culpa ab, totam excepturi ad porro
        voluptates dolorum? Rem, dolor aliquid.
      </Text>
      {isFirst && renderChoice()}
    </Animated.View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#fc035e',
    alignItems: 'center',
    borderRadius: 20,
  },
  image: {
    width: '100%',
    height: '70%',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#000',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  header: {
    fontSize: 44,
    marginTop: -25,
    marginLeft: -75,
    fontWeight: 'bold',
    color: '#fc035e',
  },
  pa20: {padding: 20},
  likeContainer: {
    position: 'absolute',
    transform: [{rotate: '30deg'}],
    right: 50,
    top: -60,
  },
  nopeContainer: {
    position: 'absolute',
    transform: [{rotate: '-30deg'}],
    left: -50,
  },
});
