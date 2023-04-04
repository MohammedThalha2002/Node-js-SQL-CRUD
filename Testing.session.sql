-- @block
-- get all posts
SELECT *
FROM posts;
-- @block
-- add post
insert into posts(title, body, date)
values(
        "post 4",
        "post four body",
        "2023-09-22"
    );
-- @block
-- get post by id
select *
from posts
where id = 2;


-- @block
-- update post by id
update posts
set title = "updated title",
body = "updated body",
date = "2050-09-20"
where id = 3 ;


-- @block
-- delete post by id
delete from posts
where id = 2;