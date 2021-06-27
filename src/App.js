import Navbar from './components/Navbar'
import './App.css';
import ContactUs from './components/ContactUs';
import Login from './components/Form';
import Banner from './components/Banner';
import WhyChooseUs from './components/WhyChooseUs';
import AboutUs from './components/AboutUs'
import {DemoCarousel} from './components/Reviews'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Login />
      <AboutUs />
      <WhyChooseUs/>
      <DemoCarousel />
      <Banner />
      <ContactUs/>
    </div>
  );
}

export default App;
