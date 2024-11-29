"use client";

import { useState, useEffect, createContext } from "react";
import TermInfo from "./TermInfo";
import Output from "./Output";

export const termContext = createContext<{
  arg: string[];
  clearHistory?: () => void;
}>({
  arg: [],
});

const Terminal: React.FC = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>(["welcome"]);
  const [rerender, setRerender] = useState(false);

  const handleCommand = (command: string) => {
    setHistory([...history, command]);
    setInput("");
    setRerender(true);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  useEffect(() => {
    if (rerender) {
      setRerender(false);
    }
  }, [rerender]);

  return (
    <div className="bg-primary text-gray-200 font-mono text-sm sm:text-base rounded-lg w-full h-auto max-h-[90vh] mx-auto p-4 sm:p-6 overflow-y-auto">
      <div className="flex flex-col space-y-4">
        {/* Render Command History */}
        {history.map((cmd, index) => (
          <termContext.Provider
            key={index}
            value={{
              arg: cmd.split(" "),
              clearHistory,
            }}
          >
            <div>
              <TermInfo />
              <Output index={index} cmd={cmd.split(" ")[0]} />
            </div>
          </termContext.Provider>
        ))}

        {/* Input Section */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCommand(input);
          }}
          className="flex items-center space-x-2"
        >
          <TermInfo />
          <input
            type="text"
            className="flex-1 bg-transparent border-none focus:outline-none text-gray-200 placeholder-gray-500"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder=""
            autoFocus
          />
        </form>
      </div>
    </div>
  );
};

export default Terminal;
