import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Perfil() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Meu perfil</Text>
        <Image
          source={require('../../assets/images/Ellipse_4-2.png')}
          style={styles.profileImage}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Informações pessoais</Text>
        <Text style={styles.infoText}>Albino Feliz de óculos</Text>
        <Text style={styles.infoText}>28/05/1947</Text>
        <Text style={styles.infoText}>São Paulo-SP</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Histórico médico</Text>
        <View style={styles.medicalItem}>
          <Ionicons name="medical-outline" size={24} color="#003366" />
          <Text style={styles.medicalText}>Asma</Text>
        </View>
        <View style={styles.medicalItem}>
          <Ionicons name="medical-outline" size={24} color="#003366" />
          <Text style={styles.medicalText}>Sinusite</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  section: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 15,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 5,
  },
  medicalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  medicalText: {
    fontSize: 16,
    marginLeft: 10,
  },
});
