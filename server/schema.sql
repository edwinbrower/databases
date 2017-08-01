CREATE DATABASE chat;

USE chat;

-- CREATE TABLE rooms (
--   room_id int not null primary key auto_increment,
--   room varchar(30)
-- );

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(30) NOT NULL,
  PRIMARY KEY (ID)
  -- UNIQUE(username)
);

CREATE TABLE messages (
  id int NOT NULL AUTO_INCREMENT,
  text varchar(140),
  roomname varchar(30) NOT NULL,
  userid int NOT NULL,
  PRIMARY KEY (ID)
  -- room int,
  -- foreign key(room) references rooms(room_id),
  -- foreign key(user) references users(user_id)
);

-- CREATE TABLE users_rooms (
--   id int not null primary key auto_increment,
--   room int,
--   user int,
--   foreign key(room) references rooms(room_id),
--   foreign key(user) references users(user_id)
-- );

 --  Execute this file from the command line by typing:
 --     mysql -u root < server/schema.sql
 --   to create the database and the tables.
