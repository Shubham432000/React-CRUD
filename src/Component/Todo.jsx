import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
const Todo = () => {
  const [name, setName] = useState("");

  const [todo, setTodo] = useState([]);
  const [editclick, setEditclick] = useState(false);
  const [editindex, setEditindex] = useState("");
  const submit = (e) => {
    e.preventDefault();
    setTodo([...todo, name]);
    setName("");
  };

  const deleteData = (id) => {
    let removeData = todo.filter((item, index) => {
      return index !== id;
    });
    setTodo(removeData);
  };

  const editData = (id) => {
    setName(todo[id]);

    setEditclick(true);
    setEditindex(id);
  };

  const updateData=()=>{
    let updateValue = todo.map((item,index)=>{
      if(index == editindex){
        return name
      }else{
        return item
      }
    })
    setTodo(updateValue)
    setName("")
    setEditclick(false)
  }
  return (
    <>
      <div className="flex justify-center">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className=" w-1/4 p-3 pl-10 text-sm text-gray-500 border border-gray-500 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Mockups, Logos..."
          required
        />

        {!editclick?<button
          onClick={submit}
          type="submit"
          className="text-white ml-[13px]   bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add
        </button>:<button
          onClick={updateData}
          type="submit"
          className="text-white ml-[10px]  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Update
        </button>}
      </div>

      <div className="flex justify-center mt-[50px]">
        <table className="w-1/2 text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3">Product name</th>
              <th className="px-6 py-3">Edit</th>
              <th className="px-6 py-3">Delete</th>
            </tr>
          </thead>
          <tbody>
            {todo.map((item, id) => {
              return (
                <tr
                  key={id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item}
                  </th>

                  <td className="px-6 py-4">
                    <FiEdit size="25px" onClick={() => editData(id)} />
                  </td>
                  <td className="px-6 py-4">
                    <MdDeleteForever size="25px" onClick={() => deleteData(id)} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Todo;
