INSERT INTO users
  (name,email)
VALUES
  ('Eva Stanley', sebastianguerra@yamil.com),
  ('Octavia Larsen', lorem.ut@maurisut.edu),
  ('Raya Baldwi', suscipit.est.ac@Sed.net),
  ('Alice Valencia', et@Cumsociisnatoque.org),
  ('Quon Carney', ipsum@placerat.ca),
  ('Raya Vazquez', ac.libero.nec@egetipsumSuspendisse.net)



INSERT INTO properties
  (owner_id,title,description,thumbnail_photo_url,cover_photo_url,cost_per_night,parking_spaces,number_of_bathrooms,number_of_bedrooms,country,street,city,province,post_code,active)
VALUES(1, AA, description, 
https:
//www.youtube.com,
https:
//www.youtube.com,1,1,1,1,AAA,AAAA,AAAAA,AAAAAA,AAAAAAA,true),
(2,BB, description,
https:
//www.youtube.com,
https:
//www.youtube.com,2,2,2,2,BBB,BBBB,BBBBB,BBBBBB,BBBBBB,false),
(3,CC, description,
https:
//www.youtube.com,
https:
//www.youtube.com,3,3,3,3,CCC,CC,CC,CCC,CCCCCC,false),

(4,DD, description,
https:
//www.youtube.com,
https:
//www.youtube.com,4,4,4,4,DDD,DDDD,DDDD,DDD,DDDDDD,true),

(5,EE, description,
https:
//www.youtube.com,
https:
//www.youtube.com,5,5,5,5,EEEE,EEE,EEEE,EEEE,EEEEEEE,true),

(6,FFF, description,
https:
//www.youtube.com,
https:
//www.youtube.com,6,6,6,6,FFF,FFF,FFFF,FFF,FFFFFF,false)


INSERT INTO reservations
  (start_date,end_date, property_id,guest_id)
VALUES(2019-06-14, 2019-10-17, 111, 111),
  (2019-01-23, 2020-04-20, 222, 222),
  (2018-11-16, 2018-12-19, 333, 333),
  (2018-11-26, 2019-10-04, 444, 444),
  (2019-05-06, 2019-08-22, 555, 555),
  (2018-09-30, 2019-04-21, 666, 666)


INSERT INTO property_reviews
  (guest_id,property_id,reservation_id ,rating,message)
VALUES(1, 1, 1, 1, message),
  (2, 2, 2, 2, message),
  (3, 3, 3, 3, message),
  (4, 4, 4, 4, message),
  (5, 5, 5, 5, message),
  (6, 6, 6, 5, message)