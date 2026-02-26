import Header from './components/header'
import './App.css'
import Statist from './components/statists'
import Footer from './components/footer'

function App() {

  return (
    <>
      <Header></Header>
      
      <Statist Users = {1.9} Subscribes={2.5} Downloads={300} Products={4} ></Statist>

      <Footer></Footer>
    </>

  )
}

export default App
