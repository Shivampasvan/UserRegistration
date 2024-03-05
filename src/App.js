import './App.css';
import Faq from './components/Faq';
import Testimonials from './components/Testimonials';
import Tutors from './components/Tutors';
import UserForm from './components/UserForm';
import { ChakraProvider } from '@chakra-ui/react'
import WhatOffer from './components/WhatOffer';

function App() {
  return (
    <>
    <ChakraProvider>
        <UserForm/>
        <Tutors/>
        <WhatOffer/>
        <Testimonials/>
        <Faq/>
    </ChakraProvider>
    </>
  );
}

export default App;
