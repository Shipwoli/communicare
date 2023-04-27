# Communicare
For this project, you must:

Create a Rails API backend.
Have at least four resources (four or more DB tables).


Project Guidelines
Your project should conform to the following set of guidelines:

Models
You need to create the following relationships:
A user has many reviews and donations

A review belongs_to user

A review belongs to area

Donations belongs to user and area

communicable_disease has many areas

area:
  belongs_to :communicable_disease
  has_many :diseases
  has_many :reviews
  has_many :donations
Start by creating the models and migrations for the following database tables:





### Project setup
In order to use this repository, you need the following:
* Operating System (Windows 10+, ubuntu 20.04, or MacOS X 10.7+)
* An account on Postman API Platform. CLICK HERE TO CREATE ONE
* RAM >= 4GB
* Free Space >= 2GB

1. Fork and clone the repository.
2. Ensure the ruby gems are setup in your machine
```
bundle install
```
3. Perform any pending database migrations and seed data
```
rails db:migrate db:seed
```
4. Make sure no other application is using PORT 3000 and run the application
```
rails s
```
5. Using your preferred API testing platform (Postman, ThunderClient, etc), proceed to test the various routes available to the API. This will be your base URL:
```
http://localhost:3000

```
### Deployment link : https://noncommunica.onrender.com/

### Routes
Set up the following routes. Make sure to return JSON data in the format
specified along with the appropriate HTTP verb.

https://noncommunica.onrender.com/

routes are
https://noncommunica.onrender.com//areas;

   [{"id":1,"name":"New York City","location":"New York, USA","latitude":40.7128,_disease_id":46,"created_at":"2023-04-27T04:56:00.206Z","updated_at":"2023-04-27T04:56:00.2:"2023-04-27T06:51:30.7}]

https://noncommunica.onrender.com//reviews;
   [{"id":1,"comment":"I think we should donate more to this area to help fight COVID-19.","rating":4,"user_id":1,"area_id":1,"created_at":"2023-04-25T14:17:05.809Z",}]

https://noncommunica.onrender.com//users;
  [{"id":1,"first_name":"saviour","last_name":"khalwale","email":"khalwale@gmail.com","password_digest":"$2a$12$OptWB2RiD3nRJTKqTo99quXwZpOk8VEMjMVYUiYr1NteqVFG47Cs.","admin":false},{"id":2,"first_name":"victor","last_name":"mwangi","email":"victor@gmail.com.com","password_digest":"$2a$12$870JI1HZh.4phaUpIBO1eesb.C1YtG.C16EyODCWzJ23kea8MaL.y","admin":true}]

https://noncommunica.onrender.com//communicable_diseases;
  
  [{"id":1,"name":"Malaria","image_url":"https://images.pexels.com/photos/6303643/pexels-photo-6303643.jpeg?auto=compress\u0026cs=tinysrgb\u0026w=600",}]


https://noncommunica.onrender.com//donations/(pluse id)
if id does not exist it shall display this;
   {"message":"failed","data":{"info":"Couldn't find Area with 'id'=id"}}

   
## Authors
Project contributed to and maintained by:
- [Marylucy ](https://github.com/marylucy123450) 
- [Saviour](https://github.com/Shipwoli) 
- [Victor](https://github.com/Vickyprinz) 
- [Lenix](https://github.com/LinexMugambi) 
- [Alex](https://github.com/AlexIrungu) 
- [Keittah](https://github.com/KeittahSewe) 



## License

### ISC License (ISC)

[![License: ICL](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
