import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);

  const addText = () => {
    const newList = [...list];
    newList.push(inputValue);
    setList(newList);
    setInputValue("");
  };
  const deleteText = (i) => {
    const newList = [...list];
    newList.splice(i, 1);
    setList(newList);
  };

  return (
    <>
      <main className="flex justify-center items-center bg-black w-screen h-screen">
        <section className="flex flex-col bg-[#222] h-2/3 w-2/3">
          <h1 className="w-full text-white font-bold text-4xl text-center">
            PRUEBA TECNICA
          </h1>
          <div>
            <label>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                }}
              />
            </label>
            <button
              className="text-white"
              onClick={() => {
                addText();
              }}
            >
              Agregar
            </button>
          </div>
          <ul>
            {list.map((e, i) => (
              <li
                className="text-white"
                key={i}
                onClick={() => {
                  deleteText(i);
                }}
              >
                {e}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
