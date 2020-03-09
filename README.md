## Please remember, generating process are very slow, if you can download this [file](https://drive.google.com/file/d/1q6qvfaVcAIbNN_lq9GEP54ksU9rWkgTs/view?usp=sharing).

For launching the project you need:

- Install dependencies in the root and client directory

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### For changing the number of returning books, please go to the index.js in the root directory and change the number in the Array generating code. By default it setted to 10000!

Books array generating rule.

```
[
  '{{repeat(999000, 1000000)}}',
  {
    author: {
      name: '{{firstName()}} {{surname()}}',
      gender: '{{gender()}}'
    },
    name: '{{`The big history of ${faker.company.companyName()} building`}}',
    date: '{{date()}}',
    genre: function (tags) {
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
      return genres[tags.integer(0, genres.length - 1)];
    }
  }
]
```
