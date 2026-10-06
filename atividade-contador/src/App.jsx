import Contador from "./components/Contador";
import './App.css';

export default function App() {
  return(
    <div className="App-container">
     <header className="App-header"> 
      <h1> Exemplos de Estados do React</h1>
      <p>Aprenda na prática os 4 principais padrões de uso do hook
        <span>useState</span>
      </p>
     </header>

     
     <main className="grid-exemplos">
      <Contador />
     </main>
     <footer className="App-footer">
      <p>Demonstrando o uso do React hook e do useState</p>
      </footer>
      </div>
  )
}