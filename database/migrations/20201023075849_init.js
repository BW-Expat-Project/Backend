exports.up = function (knex) {
    return knex.schema
        .createTable("users", tbl => {
            tbl.increments();
            tbl.string("username", 32)
                .notNullable()
                .unique();
            tbl.string("password", 32)
                .notNullable();
            tbl.string("first_name");
            tbl.string("last_name");
            tbl.string("email");
    })
    
    .createTable("posts", tbl => {
        tbl.increments();
        tbl.integer("user_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("users")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
        tbl.string("photo_url")
            .notNullable();
        tbl.string("story");
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("posts")
    .dropTableIfExists("users");
};
