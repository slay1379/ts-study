import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function useBoard() {
  const [data, setData] = useState([]);
  const [listBody, setListBody] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [list, setList] = useState("");
  const [isOn, setIsOn] = useState(false);
  const [increase, setIncrease] = useState(1);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      ).then((res) => res.json());

      const initData = res.map((it) => ({
        userId: it.userid,
        id: it.id,
        title: it.title,
        body: it.body,
      }));
      setData(initData);
    };
    getData();
  }, []);

  useEffect(() => {
    console.log("찍어", data);
  }, [data]);

  const deleteList = (id) => {
    setData((prev) => prev.filter((item) => id !== item.id));
  };

  const updateList = (inputValue) => {
    setListBody(inputValue);
  };

  const addList = (inputValue) => {
    if (!inputValue.trim()) return;
    setData((prev) => [
      ...prev,
      {
        userId: 10,
        id: 10 + increase,
        title: `Post #${increase}`,
        body: inputValue,
      },
    ]);
    setIncrease((prev) => prev + 1);
  };

  return {
    data,
    listBody,
    editId,
    editValue,
    list,
    deleteList,
    updateList,
    setEditValue,
    setList,
    setEditId,
    setData,
    inputValue,
    setInputValue,
    isOn,
    setIsOn,
    addList,
  };
}
