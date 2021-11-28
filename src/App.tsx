import { useState } from "react";
import ViteLogo from "./vite-logo.svg";
import ReactLogo from "./react-logo.svg";
import TailwindcssLogo from "./tailwindcss-logo.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-800 text-white">
      <div className="fixed inset-0 flex items-center justify-center bg-blend-darken">
        <p className="text-[48rem] font-black text-gray-700 text-opacity-40">
          {count}
        </p>
      </div>
      <header className="flex flex-col items-center justify-center gap-4 z-10">
        <div className="flex flow-row gap-12 items-center justify-center p-8">
          <img src={ViteLogo} className="h-40" alt="logo" />
          <img src={ReactLogo} className="h-48" alt="logo" />
          <img src={TailwindcssLogo} className="h-48" alt="logo" />
        </div>
        <p className="font-bold text-4xl">Hello Vite + React + Tailwindcss!</p>
        <p>
          <button
            type="button"
            onClick={() => setCount((count) => count + 1)}
            className="px-4 py-2 my-4 rounded-lg bg-indigo-500 text-xl font-medium hover:bg-indigo-600 active:ring-4 ring-0 ring-indigo-500 ring-opacity-20"
          >
            Count Is: {count}
          </button>
        </p>
        <p>
          Edit <code className="p-1 bg-gray-700 rounded-md">App.tsx</code> and
          save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://tailwindcss.com/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tailwindcss Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
