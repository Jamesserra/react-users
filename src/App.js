import { useState } from "react";
import AddUser from "./Users/AddUser";
import UsersList from "./Users/UsersList";

function App() {
  const [users, addUsers] = useState([]);

  const addUserHandler = (userName, userAge) => {
    addUsers((prevUsers) => {
      return [
        ...prevUsers,
        { name: userName, age: userAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={users} key={users.age} />
    </div>
  );
}

export default App;
