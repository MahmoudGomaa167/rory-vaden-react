import './App.css';
import Advertise from './components/advertise/Advertise';
import Blog from './components/blog/Blog';
import Book from './components/book/Book';
import Footer from './components/footer/Footer';
import GetCourses from './components/getCourses/GetCourses';
import Header from './components/header/Header';
import Insights from './components/insights/Insights';
import Learning from './components/learning/Learning';
import Meet from './components/meet/Meet';
import Navbar from './components/navbar/Navbar';
import Podcast from './components/podcast/Podcast';
import Presentation from './components/presentation/Presentation';
import Request from './components/request/Request';

function App() {
  return (
    <div className="App">
      <Advertise />
      <Navbar />
      <Header />
      <GetCourses />
      <Insights />
      <Learning />
      <Podcast />
      <Book />
      <Presentation />
      <Blog />
      <Request />
      <Meet />
      <Footer />
    </div>
  );
}

export default App;
