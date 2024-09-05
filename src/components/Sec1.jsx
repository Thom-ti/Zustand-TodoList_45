import React, { useState } from "react";
import useDataStore from "../store/data-store";
import { toast } from "react-toastify";
import List from "./List";

const Sec1 = () => {
  const [txt, setTxt] = useState("");
  const { arr, addArr, delArr, editArr } = useDataStore((state) => ({
    arr: state.arr,
    addArr: state.addArr,
    delArr: state.delArr,
    editArr: state.editArrA
  }));
  const hdlOnChange = (e) => {
    setTxt(e.target.value);
  };

  const hdlClickAdd = () => {
    addArr(txt);
    toast.success("Finish Adding!");
  };

  const hdlClickDel = (id) => {
    delArr(id);
    toast.success("Successfully Delete!");
  };

  return (
    <div>
      <h1 className="text-4xl text-center font-bold p-8">Todo List</h1>
      <div className="flex flex-col items-center gap-2">
        <div className="flex gap-4">
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            onChange={hdlOnChange}
          />
          <button className="btn btn-primary" onClick={hdlClickAdd}>
            Add
          </button>
        </div>
        <div className="flex flex-col gap-2 mx-auto w-11/12 max-w-md">
          {arr.map((item, index) => (
            <List
              key={index}
              item={item}
              index={index}
              hdlClickDel={hdlClickDel}
              editArr={editArr}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sec1;
