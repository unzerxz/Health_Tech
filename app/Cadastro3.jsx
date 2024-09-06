import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { Checkbox } from 'react-native-paper';

export default function Cadastro3() {
  const [selectedPlan, setSelectedPlan] = useState('');
  const router = useRouter();

  const plans = [
    'Sulamerica', 'Unimed', 'Bradesco', 'Amil', 'Biosaude', 'Biovida', 'Outros', 'Não tenho plano'
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../assets/images/Logo1.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Para finalizar, qual seu plano de saúde?</Text>
      
      <Text style={styles.subtitle}>Selecione os planos :</Text>
      
      {plans.map((plan) => (
        <TouchableOpacity 
          key={plan} 
          style={styles.checkboxContainer}
          onPress={() => setSelectedPlan(plan)}
        >
          <Checkbox
            status={selectedPlan === plan ? 'checked' : 'unchecked'}
            color="#003366"
          />
          <Text style={styles.checkboxLabel}>{plan}</Text>
        </TouchableOpacity>
      ))}
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonSecondary} onPress={() => router.push('/Cadastro2')}>
          <Text style={styles.buttonSecondaryText}>Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonPrimary} onPress={() => router.push('/inicio')}>
          <Text style={styles.buttonPrimaryText}>Cadastrar!</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginBottom: 10,
    color: '#003366',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  buttonPrimary: {
    flex: 1,
    backgroundColor: '#003366',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginLeft: 5,
  },
  buttonSecondary: {
    flex: 1,
    backgroundColor: '#ccc',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginRight: 5,
  },
  buttonPrimaryText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonSecondaryText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
