import { useEffect, useState } from "react";

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        console.error("에러 발생:", err);
      });
  }, []);

  return (
    <div>
      <h2>사용자 목록</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.username}</strong> ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}
