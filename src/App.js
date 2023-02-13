import './App.css';
import MyNavbar from './components/navbar/MyNavbar';
import Content from './components/content/Content';
import MyFooter from './components/footer/MyFooter';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselHome from './components/content/CarouselHome';


function App() {
  return (
    <>
      <MyNavbar />
      <CarouselHome/>
      <Content/>
      <MyFooter />
    </>
  );
}

export default App;
