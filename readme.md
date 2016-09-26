# Logyak


Logyak brings users the possibility to organise and promote excursions, as well as to be a sharing point of all information generated.

###Team members:

* Anna Vila

###Technologies:

* JS (ES5)
* Angular JS, HTML5, CSS3.
* Browserify for common.js sintax on client side.
* Express + Node
* Mongo DB & Mongoose for Models and Schemas.
* Git for version control.
* npm for dependencies.
* Deployed on Heroku and Amazon web services S3




# Logyak API

### Domain

**Excursion**: an event. A given route traversed at a given time by a given group of kayakers. The `kayaker`s attending an excursion are referred to as `attendees`

**Kayaker**: a person who paddles on a kayak.

**Attendee**: a `kayaker` that was on a given `excursion`. It's actually a view over the kayaker so only some fields of the `kayaker` are present in the `attendee`. See examples below.

**Pictures**: each `excursion` MAY have an arbitrary number of pictures.



## Excursions

#### GET /api/excursions

Load all `excursion`s on the calendar.

**Response**: 200 OK

**Payload**: an array of `excursion`s

```json 

[
  {
    "id": "2018-08-12-St.Feliu_-_S'Agaró-1473413267.102",
    "name": "St.Feliu - S'Agaró",
    "date": "2018-08-12",
    "distance": 5,
    "time": 2,
    "windForce": "1-2",
    "seaConditions": "Low",
    "links": "www.dropbox.com/pics",
    "notes": null,
    "pictures": [ // an array of pictures
      {
        "url": "https://logyak-production.s3.amazonaws.com/Cabo de gata Junio 2016  031.JPG",
        "_id": "57d29207c08a7d0011a309a3"
      },...
    ],
    "attendees": [ // an array of attendees
      {
        "name": "Ignasi",
        "surname": "Marimon-Clos"
      },...
    ]
  },...
]
```


#### GET /api/excursions/{_excursionId_}

Loads a given `excursion`.

**Response**: 200 OK

**Payload**: an `excursion`

```json 
{
  "_id": "57d28093ea5b76001196b801",
  "id": "2018-08-12-St.Feliu_-_S'Agaró-1473413267.102",
  "name": "St.Feliu - S'Agaró",
  "date": "2018-08-12",
  "distance": 5,
  "time": 2,
  "windForce": "1-2",
  "seaConditions": "Low",
  "__v": 0,
  "links": "www.dropbox.com/pics",
  "notes": null,
  "pictures": [
    {
      "url": "https://logyak-production.s3.amazonaws.com/Cabo de gata Junio 2016  031.JPG",
      "_id": "57d29207c08a7d0011a309a3"
    },...
  ],
  "attendees": [
    {
      "name": "Ignasi",
      "surname": "Marimon-Clos"
    },...
  ]
}
```

### Kayakers

