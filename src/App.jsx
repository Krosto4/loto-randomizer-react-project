import { useState } from "react";
import "./App.css";

function App() {
  // states

  const [allNums, setAllNums] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
    60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78,
    79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
  ]);

  const [takenNums, setTakenNums] = useState([]);
  const [takenNumShow, setTakenNumShow] = useState(null);

  // funcs

  function randomizeNum() {
    if (allNums.length === 0) {
      alert("All nums are taken!");
      return;
    } else {
      let takenNum = allNums[Math.floor(Math.random() * allNums.length)];
      const newAllNums = allNums.filter((num) => num !== takenNum);
      setAllNums(newAllNums);

      console.log(allNums);
      setTakenNumShow(takenNum);
      console.log(takenNum, takenNumShow);
      setTakenNums([...takenNums, takenNum]);
    }
  }

  function resetGame() {
    setAllNums(Array.from({ length: 90 }, (_, i) => i + 1));
    setTakenNums([]);
    setTakenNumShow();
  }
  return (
    <>
      <section className="container">
        <div>
          <h1>Loto Randomizer</h1>
        </div>
        <div>
          <div>
            <p className="takenNum">{takenNumShow} </p>
            <button onClick={randomizeNum}>Random nums</button>
          </div>

          <div>
            <div className="takenNums">
              <p className=" my-2">Taken numbers:{" "}</p>
              <div className="takenNums">
                {takenNums.map((num) => (
                  <p key={num}>{num}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <button onClick={resetGame}>End of the game / reset</button>
      </section>
    </>
  );
}

export default App;
