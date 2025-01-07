import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Intro = ({ navigation }) => {
  useEffect(() => {
    // Tự động chuyển sang HomePage sau 10 giây
    const timer = setTimeout(() => {
      navigation.navigate('Home');
    }, 10000);
    return () => clearTimeout(timer); 
  }, [navigation]);

  return (
    <View style={styles.container}>
      {}
      <Image 
        source={require('./introava.png')}
        style={styles.image}
      />
      <Text style={styles.name}>Tên: Nguyễn Hoàng Nguyên</Text>
      <Text style={styles.info}>Mã số sinh viên: 22110192</Text>
      <Text style={styles.info}>Ngày sinh: 10/03/2004</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default Intro;
