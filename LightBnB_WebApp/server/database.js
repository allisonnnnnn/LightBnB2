const properties = require("./json/properties.json");
const users = require("./json/users.json");
const { Pool } = require("pg");

const pool = new Pool({
  user: "mengting",
  password: "123",
  host: "localhost",
  database: "lightbnb"
});

/// Users

/**
 * Get a single user from the database given their email.
 * @param {String} email The email of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithEmail = function(email) {
  const values = [email];
  return pool
    .query(
      `SELECT users.* 
    FROM users
    WHERE users.email = $1
    `,
      values
    )
    .then(res => {
      // console.log(res.rows);
      return res.rows[0];
    });
};
exports.getUserWithEmail = getUserWithEmail;

/**
 * Get a single user from the database given their id.
 * @param {string} id The id of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithId = function(id) {
  const text = `
  SELECT users.*
  FROM users
  WHERE users.id = $1

  `;
  const values = [id];
  return pool.query(text, values).then(res => {
    return res.rows[0];
  });
  // return Promise.resolve(users[id]);
};
exports.getUserWithId = getUserWithId;

/**
 * Add a new user to the database.
 * @param {{name: string, password: string, email: string}} user
 * @return {Promise<{}>} A promise to the user.
 */
const addUser = function(user) {
  const text = `
  INSERT INTO users (name, email,password) 
  VALUES($1,$2,$3)
  RETURNING *
  `;
  const values = [user.name, user.email, user.password];

  return pool.query(text, values).then(res => {
    // console.log(res.rows);
    return Promise.resolve(res.rows[0]);
  });
};
exports.addUser = addUser;

/// Reservations

/**
 * Get all reservations for a single user.
 * @param {string} guest_id The id of the user.
 * @return {Promise<[{}]>} A promise to the reservations.
 */
const getAllReservations = function(guest_id, limit = 10) {
  const text = `
  SELECT reservations.id, reservations.start_date, reservations.end_date, reservations.property_id, reservations.guest_id, properties.id, properties.title, properties.owner_id, properties.description, properties.thumbnail_photo_url, properties.cover_photo_url, properties.cost_per_night, properties.parking_spaces, properties.number_of_bathrooms, properties.number_of_bedrooms, properties.country, properties.street, properties.city, properties.province, properties.post_code, properties.active, AVG(property_reviews.rating) as average_rating
  FROM reservations
  JOIN properties ON reservations.property_id = properties.id
  JOIN property_reviews ON properties.id = property_reviews.property_id
  WHERE reservations.guest_id = $1
  AND reservations.end_date < now()::date
  GROUP BY properties.id, reservations.id
  ORDER BY reservations.start_date
  LIMIT $2;
  `;
  const values = [guest_id, limit];
  return pool.query(text, values).then(res => {
    console.log(res.rows);

    return res.rows;
  });

  // return getAllProperties(null, 2);
};
exports.getAllReservations = getAllReservations;

/// Properties

/**
 * Get all properties.
 * @param {{}} options An object containing query options.
 * @param {*} limit The number of results to return.
 * @return {Promise<[{}]>}  A promise to the properties.
 */
const getAllProperties = function(options, limit = 10) {
  const text = `
  SELECT properties.*, avg(property_reviews.rating) as average_rating 
  FROM properties 
  JOIN property_reviews ON  properties.id = property_reviews.property_id
  GROUP BY properties.id
  LIMIT $1`;

  const values = [limit];
  return pool.query(text, values).then(res => {
    // console.log(res.rows);
    return Promise.resolve(res.rows);
    // Rendering
  });
};
exports.getAllProperties = getAllProperties;

/**
 * Add a property to the database
 * @param {{}} property An object containing all of the property details.
 * @return {Promise<{}>} A promise to the property.
 */
const addProperty = function(property) {
  const propertyId = Object.keys(properties).length + 1;
  property.id = propertyId;
  properties[propertyId] = property;
  return Promise.resolve(property);
};
exports.addProperty = addProperty;
