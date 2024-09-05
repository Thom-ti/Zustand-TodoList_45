import React, { useState } from "react";

export default function List(props) {
  const { item, index, hdlClickDel, editArr } = props;

  const [isEdit, setIsEdit] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [input, setInput] = useState(item.title);

  const edit = () => {
    if (isEdit) {
      editArr(input, item.id);
    }
    setIsEdit(!isEdit);
  };
  const done = () => {
    setIsDone(!isDone);
  };

  return (
    <div key={index} className="flex mx-auto w-full justify-between gap-2">
      <div>
        {isEdit ? (
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="cursor-pointer border rounded-md p-4 "
          />
        ) : isDone ? (
          <li
            onClick={done}
            className="list-none line-through cursor-pointer border rounded-md p-4 bg-green-300"
          >
            {index + 1} . {item.title}{" "}
          </li>
        ) : (
          <li
            onClick={done}
            className="list-none cursor-pointer border rounded-md p-4 "
          >
            {index + 1} . {item.title}{" "}
          </li>
        )}
      </div>

      <div className="flex gap-2">
        {isEdit ? (
          <button className="btn bg-green-200 h-auto" onClick={edit}>
            Confirm
          </button>
        ) : (
          <button
            className="btn bg-green-200 h-auto"
            onClick={edit}
            disabled={isDone ? true : false}
          >
            Edit
          </button>
        )}

        <button
          className="btn bg-red-200 h-auto"
          onClick={() => hdlClickDel(item.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
