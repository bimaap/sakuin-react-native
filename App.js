
import React from 'react';
import { TailwindProvider } from 'tailwindcss-react-native';
import Home from './src/screens/Home';

export default function App() {
  return (
    <TailwindProvider>
      <Home/>
    </TailwindProvider>
  );
}