exports.seed = function(knex) {
  const posts = [
    {
      user_id: 1,
      photo_url: "https://images.unsplash.com/photo-1601758124331-9410bf99002f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1940&q=80",
      story: "optional"
    },
    {
      user_id: 1,
      photo_url: "https://images.unsplash.com/photo-1603456219070-1aaca0805ec6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      story: ""
    },
    {
      user_id: 1,
      photo_url: "https://images.unsplash.com/photo-1603456771349-07ea0241821f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      story: "optional"
    },
    {
      user_id: 1,
      photo_url: "https://images.unsplash.com/photo-1603396776688-f4c5f2e73ed0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80",
      story: ""
    },
    {
      user_id: 2,
      photo_url: "https://images.unsplash.com/photo-1603458319957-8df73cb52511?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80",
      story: "optional"
    },
    {
      user_id: 3,
      photo_url: "https://images.unsplash.com/photo-1603424122350-70f72c45b72a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1958&q=80",
      story: ""
    },
    {
      user_id: 3,
      photo_url: "https://images.unsplash.com/photo-1603452423896-9dd3802954e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=932&q=80",
      story: "optional"
    },
    {
      user_id: 3,
      photo_url: "https://images.unsplash.com/photo-1603449552874-af04e83d67fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
      story: ""
    },
    {
      user_id: 3,
      photo_url: "https://images.unsplash.com/photo-1603445123186-d03eed75f8cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=958&q=80",
      story: "optional"
    },
    {
      user_id: 3,
      photo_url: "https://images.unsplash.com/photo-1603399880311-c20aa9c29caa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
      story: ""
    },
  ];

  return knex("posts").insert(posts);
};
