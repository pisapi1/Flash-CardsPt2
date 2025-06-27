import { useState } from 'react'
import './App.css'
import Page from '../components/Flashcard';

// have array of objects here



const App = () => {
  let flashcard_deck = [
  {term: "Diffusion", definition: "The passive movement of particles from an area of high concentration to low concentration. This happens along a concentration gradient"},
  {term: "Osmosis", definition: "A passive movement of water molecules through a semi permeable membrane. Water moves from an area of low solute concentration to high solute concentration"},
  {term: "Active Transport", definition: "An active movement where an input of energy is required. Particles move from low concentration to high concentration"},
  {term: "Facilitated Diffusion", definition: "A passive movement of particles from high to low concentration through a protein channel in a cell."},
  {term: "Isotonic Solution", definition: "The same concentration of dissolved substances. Water in = water out."}
  ];

  
  let [pageCounter, setPage] = useState(0);
  console.log(`Flashcard length: ${flashcard_deck.length}`);
  const increasePageCount = () => {
    if (pageCounter < flashcard_deck.length - 1) {
      setPage(pageCounter + 1);
    }
    onPageChange();
  }

  const decreasePageCount = () => {
    if (pageCounter > 0) {
      setPage(pageCounter - 1);
    }
    onPageChange();
  }

  // state variable for guess
  const [guess, setGuess] = useState("");

  // result variable
  const [result, setResult] = useState("");
  // check if answer was right or wrong
  const checkAnswer = () => {
    if(flashcard_deck[pageCounter].definition.includes(guess) && guess !== "") {
      console.log(flashcard_deck[pageCounter].definition);
      setResult("correct");
    }
    else {
      console.log(flashcard_deck[pageCounter].definition);
      setResult("incorrect");
    }
  }

  const onPageChange = () => {
    // clear out the the text box
    setGuess("");
    setResult("");
  }

  // prevents page reset
  const handleSubmit = () => {
    event.preventDefault();
  }
  console.log(`Counter: ${pageCounter}`);
  return (
    <div className="App">
      <h1>Bio101 Quizlet Review</h1>
      <h2>Study material for Exam 1: Processes</h2>
      <Page flashcardInfo = {flashcard_deck[pageCounter]} />
      {/* input field text box*/}
      <form onSubmit={handleSubmit} id={result}>
        <label>Answer:
          <input type="text" 
          placeholder="Type your answer here..." 
          value = {guess}
          onChange={(e) => setGuess(e.target.value)} />
        </label>
        <button type='submit' onClick={checkAnswer}>Submit</button>
      </form>
      <div id='button-layout'>
        <button onClick={decreasePageCount} disabled={pageCounter === 0}>←</button>
        <button onClick={increasePageCount} disabled={pageCounter === flashcard_deck.length - 1}>→</button>
      </div>
      <h2>{pageCounter + 1} of {flashcard_deck.length}</h2>
    </div>
  )
}

export default App;
