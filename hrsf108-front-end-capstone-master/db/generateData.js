const randomName = require('node-random-name');
const text = require('lorem-ipsum');
const moment = require('moment');

var randomInArray = (array) => {
  return array[Math.floor(Math.random()*array.length)];
}

//random recipe name generator
const generateRecipeName = () => {
  const adjectives = [
    'Cheesy','Spicy','Smoked','Grilled',
    'Baked', 'Boiled', 'Mom\'s', 'Dad\'s',
    'Grandma\'s', 'Grandpa\'s', 'BBQ', 'Vegetarian',
    'Vegan', 'Healthy', 'Gluten-Free', 'Low-Calorie',
    'Low-Fat', 'Gourment', 'Paleo', 'Keto', 'High-Fiber'
  ];
  const food = [
    'Chicken', 'Beef', 'Pork', 'Spaghetti', 'Chili',
    'Mac And Cheese', 'Ramen', 'Potatoes', 'Lamb',
    'Turkey', 'Lobster', 'Clam Chowder', 'Pot Roast',
    'Shrimp', 'Tuna', 'Curry', 'Steak', 'Lunchable',
    'Pizza', 'Oysters', 'Clams', 'Mussels', 'Pizza'
  ];
  return `${randomInArray(adjectives)} ${randomInArray(food)}`;
}

//random number generator
const RNG = (min,max) => {
  return Math.floor(max-Math.random()*(max-min));
}

//random date generator
const generateLongDate = () => {
  let start = new Date(2016, 0, 1);
  let end = new Date();
  let date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return moment(date).format('LL');
}

const generateShortDate = () => {
  let start = new Date(2016, 0, 1);
  let end = new Date();
  let date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return moment(date).format('L');
}

const createReview = () => {
  let user_id = RNG(1,100);
  let user_name = 'John Doe';
  let recipe_id = 1;
  let recipe_name = 'Mac & Cheese';
  let rating = RNG(1,5);
  let long_submit_date = generateLongDate();
  let short_submit_date = generateShortDate();
  let review_text = text({count: 1, units:'sentence'});
  let likes = RNG(0,500);
  return {
    user_id,
    user_name,
    recipe_id,
    recipe_name,
    rating,
    long_submit_date,
    short_submit_date,
    review_text,
    likes  
  }
}

const createUser = () => {
  let user_name = randomName();
  let image_url = 'https://vignette.wikia.nocookie.net/bojackhorseman/images/d/d2/BoJack_Horsemann.png/revision/latest?cb=20170924222700';
  let is_allstar = randomInArray(['true','false']);
  let followers = RNG(50,200);
  let favorites = RNG(10,50);
  let made = RNG(1,10);
  return {
    user_name,
    image_url,
    is_allstar,
    followers,
    favorites,
    made
  }
}

const createUserRecipeJoin = () => {
  let user_id = RNG(1,100);
  let recipe_id = RNG(1,100);
  return {user_id, recipe_id};
}

const createUserReviewJoin = () => {
  let user_id = 1;
  let review_id = 1;
  return {user_id, review_id};
}

module.exports = {
  createReview,
  createUser,
  createUserRecipeJoin,
  createUserReviewJoin
}

/*
              Data Generator Strategy
------------------------------------------------------

user:

  user_name - random name generator (search for library)
  image_url - random image
  is_allstar - true or false
  followers - RNG

recipe:

  recipe_name - random word generator
  user_id - random selection from user ids

review:

  recipe_id - random selection from recipe ids
  user_id - random selection from user ids
  review_num - RNG
  submitted_date - random date generator
  review_text - Lorel Ipsum random text generator
  likes - RNG


*/