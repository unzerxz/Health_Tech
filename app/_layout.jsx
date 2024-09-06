import { Stack } from 'expo-router/stack';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="Cadastro1" options={{ headerShown: false }} />
      <Stack.Screen name="Cadastro2" options={{ headerShown: false }} />
      <Stack.Screen name="Cadastro3" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
