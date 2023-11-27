insert into user_details(id , birthday,name)
values(10001 , '2024-10-10' , 'Amir');

insert into user_details(id , birthday,name)
values(10002 , current_date() , 'Ranga');

insert into user_details(id , birthday,name)
values(10003 , current_date() , 'Hasan');

insert into post (id , description , user_id)
values (2001, 'About Eli' , 10001);

insert into post (id , description , user_id)
values (2002, 'About Eliiii' , 10001);

insert into post (id , description , user_id)
values (2003, 'About Family' , 10002);

insert into post (id , description , user_id)
values (2004, 'About Alone' , 10002);

insert into post (id , description , user_id)
values (2005, 'About Nation' , 10003);

insert into post (id , description , user_id)
values (2006, 'About iran' , 10003);