import { createContext, useContext, useState } from 'react';

const BoardContext = createContext();

export const BoardProvider = ({ children }) => {
  const [boards, setBoards] = useState([]);

  return (
    <BoardContext.Provider value={{ boards, setBoards }}>
      {children}
    </BoardContext.Provider>
  );
};

export const useBoard = () => useContext(BoardContext);
