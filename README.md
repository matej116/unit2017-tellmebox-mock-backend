# unit2017-tellmebox-mock-backend
Mock backend for unIT 20167 student contest

## REST API end-point

### Category

* Supports: GET, POST, DELETE


#### GET
Response payload:
```
{
  "categories": [
    {
      "name": "Benefits"
    },
    {
      "name": "Management"
    },
    {
      "name": "Offices"
    },
    {
      "name": "People"
    },
    {
      "name": "Other"
    }
  ]
}
```

#### POST
Request payload:
```
{
  "name": "Fresh Category"
  }
```

#### DELETE
Request payload:
```
{
  "name": "Fresh Category"
}
```

### SuggestionBox

Supports: GET, POST, PUT, DELETE

#### GET
Response payload:
```
{
  "boxes": [
    {
      "guid": "ABCD",
      "name": "unIT 2017",
      "url": "unit-2017",
      "type": "SUGGESTION",
      "category": "Other"
    },
    {
      "guid": "DEFG",
      "name": "Ghost in the shell 2017",
      "url": "ghost-in-the-shell-2017",
      "type": "RATING",
      "ratingText": "How do you like the movie?",
      "category": "Movies"
    },
    {
      "guid": "HIJK",
      "name": "New coffee machine",
      "url": "new-coffee-machine",
      "type": "SUGGESTION",
      "category": "Offices",
      "password": "123456"
    }
  ]
}
```

#### POST

- GUID is generated automatically

Request payload:
```
{
	"box": {
      "guid": "ABCD-1234",
      "name": "unIT 2016",
      "url": "unit-2016",
      "type": "SUGGESTION",
      "category": "Other"
    }
}
```

#### PUT
Request payload:
```
{
	"box": {
      "guid": "HIJK",
      "name": "New coffee machine 222",
      "url": "new-coffee-machine-222",
      "type": "SUGGESTION",
      "category": "Offices",
      "password": "123456"
    }
}
```

#### DELETE
Request payload:
```
{
	"box": {
		"guid": "ABCD"
	}
}
```

### SuggestionItem
Supports: GET, POST, PUT, DELETE

#### GET
Response payload:
```
{
  "items": [
    {
      "guid": "GBNK",
      "text": "Great coffee",
      "starred": false,
      "suggestionBox": "HIJK",
      "dateTime": "2017-04-11T08:23:45+01",
      "tags": [
        "coffee",
        "latte"
      ]
    },
    {
      "guid": "QWER",
      "text": "Great lattee",
      "starred": false,
      "suggestionBox": "HIJK",
      "dateTime": "2017-04-11T08:33:21+01",
      "tags": [
        "latte"
      ]
    }
  ]
}
```

#### POST

- GUID is generated automatically

Request payload:
```
{
	"item": {
      "guid": "ABCD",
      "text": "Great lattee 222",
      "starred": false,
      "suggestionBox": "HIJK",
      "dateTime": "2017-04-11T08:57:11+01",
      "tags": [
        "coffee",
        "latte"
      ]
    }
}
```

#### PUT
Request payload:
```
{
	"item": {
      "guid": "GBNK",
      "text": "Great coffee 222",
      "starred": false,
      "suggestionBox": "HIJK",
      "dateTime": "2017-04-11T08:23:45+01",
      "tags": [
        "coffee",
        "latte"
      ]
    }
}
```

#### DELETE
Request payload:
```
{
	"item": {
      "guid": "QWER"
    }
}
```
