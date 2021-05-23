import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface CardProps {
  id: string;
  title: string;
  imageUrl: string;
}

const cardCollections: CardProps[] = [
  {
    id: '1',
    title: 'Surface',
    imageUrl:
      'https://images.unsplash.com/photo-1621570274061-6b0c42c7bd13?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: '2',
    title: 'Beinski',
    imageUrl:
      'https://images.unsplash.com/photo-1615554953780-3f1031b89d32?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: '3',
    title: 'Hugo',
    imageUrl:
      'https://images.unsplash.com/photo-1621716362967-fd1c5281eef9?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  },
];

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content"></StatusBar>
      <SafeAreaView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 16,
            paddingVertical: 8,
          }}
        >
          <MaterialIcons name="menu" size={32} />
          <TouchableOpacity onPress={() => console.log('touch avatar')}>
            <Image
              style={{
                width: 44,
                height: 44,
                borderRadius: 999,
              }}
              source={{
                uri:
                  'https://images.unsplash.com/photo-1599140781147-e9a53c8cdd03?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGF2YXRhciUyMGdpcmx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
              }}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ScrollView>
        <View style={{ marginBottom: 24, backgroundColor: '#fba23d' }}>
          <Text
            style={{
              fontSize: 32,
              fontWeight: '600',
              marginBottom: 16,
              marginHorizontal: 16,
            }}
          >
            Card Section
          </Text>

          <View style={{ marginHorizontal: 16 }}>
            <FlatList
              horizontal
              data={cardCollections}
              keyExtractor={item => item.id}
              renderItem={renderCardView}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        <View style={{ marginBottom: 24, backgroundColor: '#fba23d' }}>
          <Text style={{ fontSize: 32, fontWeight: '600', marginBottom: 16 }}>
            Card Section
          </Text>

          <View style={{ marginHorizontal: 16 }}>
            <FlatList
              horizontal
              data={cardCollections}
              keyExtractor={item => item.id}
              renderItem={renderCardView}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        <View style={{ marginBottom: 24, backgroundColor: '#fba23d' }}>
          <Text style={{ fontSize: 32, fontWeight: '600', marginBottom: 16 }}>
            Card Section
          </Text>

          <View style={{ marginHorizontal: 16 }}>
            <FlatList
              horizontal
              data={cardCollections}
              keyExtractor={item => item.id}
              renderItem={renderCardView}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const renderCardView = ({ item }: { item: CardProps }) => {
  return (
    <View style={{ marginLeft: item.id !== '1' ? 16 : 0 }}>
      <TouchableOpacity onPress={() => console.log('click image')}>
        <Image
          source={{ uri: item.imageUrl }}
          style={{
            width: 200,
            height: 200,
            borderRadius: 8,
            marginBottom: 8,
          }}
        />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: '400' }}>{item.title}</Text>
        <TouchableOpacity onPress={() => console.log('Favorite!')}>
          <MaterialIcons
            style={{ color: '#ffffff' }}
            name="favorite"
            size={28}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
