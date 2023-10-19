import { useEffect, useState } from "react";
import { getUsers } from "./axios/user/User";
import UserItem from "./component/UserItem";
import UserForm from "./component/UserForm";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUser();
  }, []);
  const getUser = () => {
    getUsers().then((res) => {
      const prevData = res.data;
      setUsers(prevData);
    });
  };
  return (
    <div>
      <UserForm getUser={getUser} />
      {users?.map((user) => {
        return (
          <UserItem
            key={user.id}
            email={user.email}
            password={user.password}
            name={user.name}
          />
        );
      })}
    </div>
  );
};

export default App;
