/*
numericos

enteros
--------
tinyint -128/127 ----> no se puede guardar mas de esos numeros
smallint -32768/32767
mediumint
int  		-2.147.483.648/2.147.483
bigint

decimales
-----------

decimal
double
float

date
-------
date
datetime
time
timespam
year

caracter
-------
char maximo 255
varchar maximo 255 pero siempre guarda 40 caracteres aun que esten vacios
tinytext 
mediumtext 16 millones
text 65,535
longtext 4.294.967.295



otros tipos
------
blob
boolean
enum
set

*/


create table cliente
(
id int not null auto_increment,
nombre varchar(40),
apellido varchar(40),
dni int,
mail varchar(40) unique,
fecha_alta date,
estado boolean,
primary key(id)

)
use base23;
select * from cliente

create table provincias(
id int not null auto_increment,
descripcion varchar(40),
primary key(id)
);

insert into provincias value(1,'Salta');
insert into provincias value(2,'Cordoba');
insert into provincias value(3,'Mendoza');
insert into provincias value(4,'Santa Cruz');

select * from provincias

create database eje23066
use eje23066

create table clientes(
id int not null auto_increment,
nombre varchar(40) COLLATE latin1_swedish_ci,
apellido varchar(40)COLLATE latin1_swedish_ci,
edad tinyint(2),
fecha timestamp default current_timestamp,
provincia varchar(30)COLLATE latin1_swedish_ci,
primary key(id)



)
select * from clientesclientesclientes

INSERT INTO clientes (nombre, apellido, edad, fecha, provincia)
VALUES
  ('Juan', 'perez', 30, CURRENT_TIMESTAMP, 'San Juan'),
  ('Andres', 'Lopez', 25, CURRENT_TIMESTAMP, 'Santa Fe'),
  ('Rosario', 'Parodi', 35, CURRENT_TIMESTAMP, 'Misiones'),
  ('Laura', 'Melgarejo', 25, CURRENT_TIMESTAMP, 'Cordoba'),
  ('Miguel', 'Lopez', 35, CURRENT_TIMESTAMP, 'Misiones');
