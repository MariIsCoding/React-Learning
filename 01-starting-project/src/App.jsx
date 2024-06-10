import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header.jsx';


function CoreConcept({img, title, description}){
  return (
  <li>
    <img src={img} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
  </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
