import { Link, useRouter } from 'expo-router';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function Login() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/Logo1.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Faça login em sua conta</Text>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira seu endereço de email"
          placeholderTextColor="#999"
        />
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira sua senha"
          placeholderTextColor="#999"
          secureTextEntry
        />
      </View>
      
      <TouchableOpacity style={styles.button} onPress={() => router.push('/(tabs)/inicio')}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      
      <Link href="/forgot-password" style={styles.forgotPassword}>
        Esqueceu sua senha?
      </Link>
      
      <Text style={styles.signupText}>
        Ainda não tem conta? <Text style={styles.signupLink} onPress={() => router.push('/Cadastro1')}>Faça seu cadastro!</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  button: {
    width: '100%',
    backgroundColor: '#003366',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPassword: {
    marginTop: 15,
    color: '#003366',
  },
  signupText: {
    marginTop: 20,
  },
  signupLink: {
    color: '#003366',
    fontWeight: 'bold',
  },
});