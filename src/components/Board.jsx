import React, { useReducer, useState } from 'react';
import {
  DragDropContext,
  Droppable,
  Draggable
} from 'react-beautiful-dnd';




function Board({reducer, initialState}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [addText, setAddText] = useState({ Todo: '', Inprogress: '', Done: '' });


  const [editText, setEditText] = useState('');

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const srcCol = source.droppableId;
    const destCol = destination.droppableId;

    if (srcCol === destCol && source.index === destination.index) return;

    dispatch({
      type: 'moveTask',
      payload: {
        source: { column: srcCol, index: source.index },
        destination: { column: destCol, index: destination.index }
      }
    });
  };

  const Column = ({ title, columnKey, color }) => {
    const list = state.columns[columnKey];

    const openAdd = state.addInputOpen[columnKey];

    return (
      <div className="bg-white shadow-lg rounded-lg flex flex-col h-[78vh] min-w-[300px] border">
        <div className={`p-4 rounded-t-lg text-white ${color}`}>
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-lg">{title}</h2>
            <span className="text-sm opacity-80">{list.length} </span>
          </div>
        </div>

        <div className="p-3 flex-1 overflow-auto">
          <Droppable droppableId={columnKey}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className={`min-h-[60px] ${snapshot.isDraggingOver ? 'bg-gray-50' : ''}`}
              >
                {list.length === 0 && (
                  <div className="text-gray-400 italic p-2">No tasks yet</div>
                )}

                {list.map((task, index) => {
                  const isEditing =
                    state.editing &&
                    state.editing.column === columnKey &&
                    state.editing.id === task.id;

                  return (
                    <Draggable key={task.id} draggableId={task.id} index={index}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={`mb-3 p-3 rounded-lg border
                            flex items-start gap-3 bg-white
                            ${snapshot.isDragging ? 'shadow-lg' : 'shadow-sm'}
                          `}
                        >
                          <div className="flex-1">
                            {isEditing ? (
                              <>
                                <input
                                  value={editText}
                                  onChange={(e) => setEditText(e.target.value)}
                                  className="w-full border p-2 rounded mb-2"
                                  onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                      if (editText.trim()) {
                                        dispatch({
                                          type: 'saveEdit',
                                          payload: { column: columnKey, id: task.id, content: editText.trim() }
                                        });
                                      }
                                    } else if (e.key === 'Escape') {
                                      dispatch({ type: 'cancelEdit' });
                                    }
                                  }}
                                />
                                <div className="flex gap-2">
                                  <button
                                    className="bg-green-500 text-white px-3 py-1 rounded text-sm"
                                    onClick={() => {
                                      if (editText.trim()) {
                                        dispatch({
                                          type: 'saveEdit',
                                          payload: { column: columnKey, id: task.id, content: editText.trim() }
                                        });
                                      }
                                    }}
                                  >
                                    Save
                                  </button>
                                  <button
                                    className="bg-gray-300 px-3 py-1 rounded text-sm"
                                    onClick={() => dispatch({ type: 'cancelEdit' })}
                                  >
                                    Cancel
                                  </button>
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="text-sm break-words">{task.content}</div>
                              </>
                            )}
                          </div>

                          {!isEditing && (
                            <div className="flex flex-col gap-2">
                              <button
                                title="Edit"
                                className="text-yellow-500 hover:text-yellow-600"
                                onClick={() => {
                                  dispatch({ type: 'startEdit', payload: { column: columnKey, id: task.id } });
                                  setEditText(task.content);
                                }}
                              >
                                ✎
                              </button>

                              <button
                                title="Delete"
                                className="text-red-500 hover:text-red-600"
                                onClick={() =>
                                  dispatch({
                                    type: 'deleteTask',
                                    payload: { column: columnKey, id: task.id }
                                  })
                                }
                              >
                                🗑
                              </button>
                            </div>
                          )}
                        </div>
                      )}
                    </Draggable>
                  );
                })}

                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>

        <div className="p-3 border-t">
          {openAdd ? (
            <div className="flex gap-2 items-center">
              <input
                autoFocus
                value={addText[columnKey]}
                onChange={(e) => setAddText((s) => ({ ...s, [columnKey]: e.target.value }))}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    const txt = addText[columnKey].trim();
                    if (!txt) return;
                    dispatch({ type: 'addTask', payload: { column: columnKey, content: txt } });
                    setAddText((s) => ({ ...s, [columnKey]: '' }));
                  } else if (e.key === 'Escape') {
                    dispatch({ type: 'toggleAddInput', payload: { column: columnKey, value: false } });
                  }
                }}
                className="flex-1 border p-2 rounded"
                placeholder={`Add a task to ${title}`}
              />
              <button
                onClick={() => {
                  const txt = addText[columnKey].trim();
                  if (!txt) return;
                  dispatch({ type: 'addTask', payload: { column: columnKey, content: txt } });
                  setAddText((s) => ({ ...s, [columnKey]: '' }));
                }}
                className="bg-blue-500 text-white px-3 py-1 rounded"
              >
                Add
              </button>
              <button
                onClick={() => dispatch({ type: 'toggleAddInput', payload: { column: columnKey, value: false } })}
                className="bg-gray-200 px-2 py-1 rounded"
              >
                ✕
              </button>
            </div>
          ) : (
            <button
              onClick={() => dispatch({ type: 'toggleAddInput', payload: { column: columnKey, value: true } })}
              className="w-full text-left bg-gray-50 border rounded p-2 text-gray-700 hover:bg-gray-100"
            >
              <span className="text-lg pr-2">＋</span> Create
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-[1400px] mx-auto p-6">
      <div className="mb-6 rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 text-white p-6 shadow-lg flex items-center justify-between">
        <h1 className="text-2xl font-bold">Kanban Board</h1>
        <p className="text-sm opacity-90">Add, edit, delete and drag tasks between columns</p>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex gap-6">
          <Column title="To Do" columnKey="Todo" color="bg-red-500" />
          <Column title="In Progress" columnKey="Inprogress" color="bg-blue-500" />
          <Column title="Done" columnKey="Done" color="bg-green-500" />
        </div>
      </DragDropContext>

      <div className="mt-6 text-sm text-gray-500">
        Tip: press <kbd className="bg-gray-100 px-1 rounded">Enter</kbd> to save, <kbd className="bg-gray-100 px-1 rounded">Esc</kbd> to cancel.
      </div>
    </div>
  );
}

export default Board;

