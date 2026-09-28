import './App.css'
import "bootstrap/dist/css/bootstrap.css";
import ShoeTable from './components/ShoeTable';

function Fejlec() {
  return <><h1>Ikonikus Cipők</h1></>
}

function Lablec () {
  const maiDatum = new Date().toISOString().split("T")[0];
  return <><p>Az oldalt készítette: <b>Körmöndi Tamás</b>, készítés dátuma: <b>{maiDatum}</b></p></>
}

function App() {
 
  return (
    <>
      <div className="container">
        <Fejlec/>
        <main>
          <table className="table table-hover">
            <thead>
                <th>Modell</th>
                <th>Márka</th>
                <th>Limitált</th>
                <th>Megjelenés éve</th>
                <th>Kapcsolódó sportok</th>
            </thead>
            <tbody>
              <ShoeTable model='Air Jordan 1' brand='Nike' isLimitedEdition={false} releaseYear={2013} sports={["running", "something"]}></ShoeTable>
            </tbody>
        </table>
        </main>
        <Lablec/>
      </div>
    </>
  )
}

export default App
