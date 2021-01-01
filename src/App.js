import logo from './logo.svg';
import './App.css';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
const arr = [
  {
    name1: "Abid",
    name2: "Tayyab"
  },
  {
    name1: "Adeel",
    name2: "Naveed"
  },
  {
    name1: "Hamza",
    name2: "Gull"
  }
];
function App() {
  return (
    <div>
      {
        arr.slice(1,arr.length).map((arrObj,index) => {
          return <Header name1={arrObj.name1} name2={arrObj.name2} btn={index}/>
        })
      }
      <Footer />
    </div>
  );
}

export default App;
