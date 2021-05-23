import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Card = () => {
  return (
    <TouchableOpacity
      style={{
        marginHorizontal: 16,
        marginBottom: 16,
      }}
    >
      <View>
        <Text style={{ fontSize: 32, fontWeight: '600', color: '#333' }}>
          ViewMountains
        </Text>
      </View>

      <View style={styles.card}>
        <Image
          style={styles.cardImage}
          source={require('../assets/canyon.png')}
        />
        <Text style={styles.cardTitle}>Hiking the Grand Canyon </Text>

        <View style={{ marginTop: 16 }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#F35D38',
              padding: 8,
              paddingHorizontal: 16,
              borderRadius: 4,
            }}
            onPress={() => console.log('click')}
          >
            <Text
              style={{
                textAlign: 'center',
                fontSize: 16,
                fontWeight: '600',
                color: '#fff',
              }}
            >
              Buy $10
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
  },
  cardImage: {
    borderRadius: 8,
    width: '100%',
    height: '50%',
  },
});
