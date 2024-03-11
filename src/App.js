import './App.css';
import Faq from './components/Faq';
import Testimonials from './components/Testimonials';
import Tutors from './components/Tutors';
import UserForm from './components/UserForm';
import { ChakraProvider} from '@chakra-ui/react'
import WhatOffer from './components/WhatOffer';
import Testing from './components/Testing';
import Slider from './components/Slider';
import Footer from './components/Footer';
import Certificate from './components/Certificate';

function App() {
  return (
    <>
    <ChakraProvider>
        <UserForm/>
        <Tutors/>
        <WhatOffer/>
        <Testimonials/>
        <Slider/>
        <Certificate/>
        <Faq/>
        <Footer/>
        {/* <Testing/> */}
        
    </ChakraProvider>
    </>
  );
}

export default App;
