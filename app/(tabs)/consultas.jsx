import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Consultas() {
  const renderConsulta = (doctor, specialty, date, isPast = false) => (
    <View style={[styles.consultaCard, isPast && styles.pastConsulta]}>
      <Image
        source={require('../../assets/images/Ellipse_4-3.png')}
        style={styles.doctorImage}
      />
      <View style={styles.consultaInfo}>
        <Text style={styles.doctorName}>{doctor.name}</Text>
        <Text style={styles.specialty}>{specialty}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <TouchableOpacity style={[styles.button, isPast && styles.pastButton]}>
        <Text style={styles.buttonText}>
          {isPast ? 'Agendar consulta' : 'Cancelar'}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <Text style={styles.title}>Minhas consultas</Text>
        
        <TouchableOpacity style={styles.agendarButton}>
          <Text style={styles.agendarButtonText}>Agendar outra consulta</Text>
        </TouchableOpacity>
        
        <Text style={styles.sectionTitle}>Próximas consultas</Text>
        {renderConsulta(
          { name: 'Dra. Renata Ingrata', image: '../../images/Ellipse_4-1.png' },
          'Angiologista',
          '03/03/2023'
        )}  
        
        <Text style={styles.sectionTitle}>Consultas passadas</Text>
        {renderConsulta(
          { name: 'Dr. Jalim Habei', image: 'https://example.com/ana-lucia.jpg' },
          'Angiologista',
          '01/02/2022',
          true
        )}
        {renderConsulta(
          { name: 'Dr. Elton John', image: 'https://example.com/paulo-matos.jpg' },
          'Otorrinolaringologista',
          '05/05/2022',
          true
        )}
        {renderConsulta(
          { name: 'Dr. Elton John Junior', image: 'https://example.com/mariana-luz.jpg' },
          'Mastologista',
          '07/10/2022',
          true
        )}
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#003366',
  },
  agendarButton: {
    backgroundColor: '#003366',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  agendarButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#003366',
  },
  consultaCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    alignItems: 'center',
  },
  pastConsulta: {
    backgroundColor: '#e6e6e6',
  },
  doctorImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  consultaInfo: {
    flex: 1,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  specialty: {
    fontSize: 14,
    color: '#666',
  },
  date: {
    fontSize: 14,
    color: '#666',
  },
  button: {
    backgroundColor: '#003366',
    padding: 10,
    borderRadius: 5,
  },
  pastButton: {
    backgroundColor: '#4a90e2',
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    marginTop: 5,
    color: '#999',
  },
  activeNavText: {
    color: '#003366',
  },
});