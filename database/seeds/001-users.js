exports.seed = function(knex) {
  const users = [
    {
      username: "test1",
      password: "123"
    },
    {
      username: "test2",
      password: "123"
    },
    {
      username: "test3",
      password: "123"
    }
  ];

  return knex('users').insert(users);
};