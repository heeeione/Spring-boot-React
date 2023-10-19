const UserItem = ({ id, email, password, name }) => {
  return (
    <div key={id}>
      <div>{email}</div>
      <div>{password}</div>
      <div>{name}</div>
    </div>
  );
};
export default UserItem;
