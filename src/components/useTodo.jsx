import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function useTodo() {
  const [inputValue, setInputValue] = useState("");
  const [editUuid, setEditUuid] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [color, setColor] = useState("bg-white");
  const [list, setList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [visible, setVisible] = useState(false);
  const [banwords, setBanwords] = useState([]);

  const handleAdd = () => {
    setList([...list, { uuid: uuidv4(), color, inputValue }]);
    setInputValue("");
  };

  const onColorChange = (color) => {
    setColor(color);
  };

  const deleteList = (uuid) => {
    setList((prev) => prev.filter((item) => item.uuid !== uuid));
  };

  useEffect(() => {
    sessionStorage.setItem("todoList", JSON.stringify(list));
  }, [list]);

  useEffect(() => {
    const saved = sessionStorage.getItem("todoList");
    if (saved) {
      setList(JSON.parse(saved));
    }
  }, []);

  return {
    inputValue,
    editUuid,
    editValue,
    color,
    list,
    searchValue,
    visible,
    banwords,
    setList,
    setInputValue,
    setColor,
    setEditUuid,
    setEditValue,
    setSearchValue,
    setVisible,
    setBanwords,
    handleAdd,
    onColorChange,
    deleteList,
  };
}
