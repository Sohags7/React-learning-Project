import React from 'react';
import Board from './components/Board';

const initialState = {
  columns: {
    Todo: [],
    Inprogress: [],
    Done: []
  },
  addInputOpen: { Todo: false, Inprogress: false, Done: false },
  editing: null
};

function makeId() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

function reducer(state, action) {
  switch (action.type) {
    case 'toggleAddInput':
      return {
        ...state,
        addInputOpen: {
          ...state.addInputOpen,
          [action.payload.column]: action.payload.value
        }
      };

    case 'addTask': {
      const { column, content } = action.payload;
      const newTask = { id: makeId(), content };
      return {
        ...state,
        columns: {
          ...state.columns,
          [column]: [...state.columns[column], newTask]
        },
        addInputOpen: { ...state.addInputOpen, [column]: false }
      };
    }

    case 'deleteTask': {
      const { column, id } = action.payload;
      return {
        ...state,
        columns: {
          ...state.columns,
          [column]: state.columns[column].filter((t) => t.id !== id)
        }
      };
    }

    case 'startEdit':
      return { ...state, editing: { column: action.payload.column, id: action.payload.id } };

    case 'saveEdit': {
      const { column, id, content } = action.payload;
      const newColumn = state.columns[column].map((t) =>
        t.id === id ? { ...t, content } : t
      );
      return {
        ...state,
        columns: { ...state.columns, [column]: newColumn },
        editing: null
      };
    }

    case 'cancelEdit':
      return { ...state, editing: null };

    case 'moveTask': {
      const { source, destination } = action.payload;
      const sourceList = Array.from(state.columns[source.column]);
      const [moved] = sourceList.splice(source.index, 1);
      const destList =
        source.column === destination.column
          ? sourceList
          : Array.from(state.columns[destination.column]);
      destList.splice(destination.index, 0, moved);

      return {
        ...state,
        columns: {
          ...state.columns,
          [source.column]: source.column === destination.column ? destList : sourceList,
          [destination.column]: destList
        }
      };
    }

    default:
      return state;
  }
}

function App() {
  return (
    <Board
      reducer={reducer}
      initialState={initialState}  
    />
  );
}

export default App;
