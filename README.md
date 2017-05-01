# Even/Odd

#### Installation

```
  $ npm install
  $ npm start
```

#### Routes

`POST localhost:3000/which-child-process`

Param expecations:

`{ "number": [value] }`

Response expectations:

If even:

`{ "response": "even" }`

If odd:

`{ "response": "odd" }`

If anything else:

`400 - Bad Request`

##### Non-existing routes

`404 - Not Found`
