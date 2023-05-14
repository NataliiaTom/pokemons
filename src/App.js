
import './App.css';
import { useEffect, useState } from 'react'
import { getListOfPokemons, getPokenomData } from './components/PokemonClient';
import Pokemon from './components/Pokemon';
import { Container, Row, Col } from 'react-bootstrap';
import Details from './components/Details'



function App() {

  const [pokemonsList, setPokemonsList] = useState([])
  const [pokemonDetails, setPokemonDetails] = useState([])

  useEffect(() => {
    getListOfPokemons().then(x => setPokemonsList(x.results))
  }, [])

  const PokemonDetailsHandler = (i) => {
    console.log('click')
    getPokenomData(i).then(data => setPokemonDetails(data))
  }

  const loadMoerePokemons = () => {
    getListOfPokemons(12, pokemonsList.length)
      .then(x => setPokemonsList([...pokemonsList, ...x.results]));
  }

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <Container>
        <Row>
          <Col xs={9}>
            <div className=''>
              {pokemonsList.map((pokemon, i) => (<Pokemon key={i} id={i + 1} onClick={() => PokemonDetailsHandler(i + 1)} />))}
            </div>
            <button onClick={loadMoerePokemons} type="button" className="btn btn-primary w-100 Load">Load More</button>
          </Col>
          <Col xs={3}>
            {pokemonDetails.stats ? (<Details data={pokemonDetails} />) : ''}
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
