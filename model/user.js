const data = [
  { userId: 1, name: "John" },
  { userId: 2, name: "Jack" },
  { userId: 3, name: "Jill" },
];

exports.addUser = async (userId, name) => {
  data.push({ userId, name });
};

exports.getUsers = async () => {
  return data;
};

exports.queryUser = async (userId) => {
  const user = data.find((user) => user.userId == Number(userId));

  if (!user) {
    return null;
  }

  return user;
};
