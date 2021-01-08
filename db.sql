create database dbuser;

use dbuser;



create table user(
  id int(11) not null auto_increment primary key,
  name varchar(50) not null ,
  country varchar(50) not null,
  created_at timestamp not null default current_timestamp
);




insert into user (name, country) values ('leonardo pernett','colombia'),('pedro luis','usa');