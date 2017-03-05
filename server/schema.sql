CREATE DATABASE chat;

USE chat;


-- CREATE TABLE rooms (
--   room_id int not null primary key auto_increment,
--   room varchar(30)
-- );

CREATE TABLE users (
  user_id int not null primary key auto_increment,
  username varchar(30),
  UNIQUE(username)
);

CREATE TABLE messages (
  message_id int not null primary key auto_increment,
  text varchar(30),
  roomname varchar(140),
  user int,
  -- room int,
  -- foreign key(room) references rooms(room_id),
  foreign key(user) references users(user_id)
);

-- CREATE TABLE users_rooms (
--   id int not null primary key auto_increment,
--   room int,
--   user int,
--   foreign key(room) references rooms(room_id),
--   foreign key(user) references users(user_id)
-- );

/* Create other tables and define schemas for them here! */

-- ALTER TABLE `Classes` ADD FOREIGN KEY (Teacher) REFERENCES `Teachers` (`id`);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

