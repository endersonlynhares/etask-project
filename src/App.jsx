import Header from "./components/Header"
import ContentTask from "./components/ContentTask"
import styles from "./App.module.css"
import "./global.css"

function App() {

  return (
   <div className='app'>
    <Header/>
    <main>
        <ContentTask/>
    </main>
   </div>
  )
}

export default App
