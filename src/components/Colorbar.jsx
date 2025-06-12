import { useState } from "react";
import { useContext } from "react";
import TodoContext from "./TodoContext";

export default function Colorbar() {
  const { onColorChange } = useContext(TodoContext);

  return (
    <div>
      <button
        onClick={() => onColorChange("bg-white")}
        className="w-10 h-10 rounded-full bg-white"
      />
      <button
        onClick={() => onColorChange("bg-red-500")}
        className="w-10 h-10 rounded-full bg-red-500"
      />
      <button
        onClick={() => onColorChange("bg-yellow-500")}
        className="w-10 h-10 rounded-full bg-yellow-500"
      />
      <button
        onClick={() => onColorChange("bg-pink-500")}
        className="w-10 h-10 rounded-full bg-pink-500"
      />
    </div>
  );
}
