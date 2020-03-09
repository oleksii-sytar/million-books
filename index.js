const express = require('express');
const bodyParser = require('body-parser');
const faker = require('faker');
const path = require('path');

const app = express();

const genders = [
  'Male',
  'Female',
];

var genres = [
  'Fantasy',
  'Adventure',
  'Romance',
  'Contemporary',
  'Dystopian',
  'Mystery',
  'Horror',
  'Thriller',
  'Paranormal',
  'Historical fiction',
  'Science Fiction',
  'Memoir',
  'Cooking',
  'Art',
  'Self-help / Personal',
  'Development',
  'Motivational',
  'Health',
  'History',
  'Travel',
  'Guide / How-to',
  'Families & Relationships',
  'Humor',
  'Children’s'
];

const generateBook = () => ({
  _id: faker.random.uuid(),
  author: {
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    gender: genders[faker.random.number({ min: 0, max: 1 })],
  },
  name: `The big history of ${faker.company.companyName()} building`,
  date: faker.date.past(),
  genre: genres[faker.random.number({ min: 0, max: genres.length - 1 })],
})

app.use(bodyParser.json());

app.get('/api/books', (req, res) => {
  const data = new Array(1000000).fill().map(el => generateBook());
  
  res.send(data);
  // res.sendFile(path.resolve(__dirname, 'data.json'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
