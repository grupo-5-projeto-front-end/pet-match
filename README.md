# Pet Match

### BaseURL: https://petmatchapi.herokuapp.com

#

## Login/Register requests:

#

- Login

  - Endpoint: /login
  - Método: POST
  - Body:

    {

        "email": "kenzinho@mail.com
        "password": "123456"

    }

  - Response:

    {

        "accessToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJlbWFpbCI6ImtlbnppbmhvQG1haWwutIiwiaWF0IjoxNjY3MjUxMTQxLCJleHAiOjE2NjcyNTQ3NDEsInN1YiI6IjEifQ.6MMPP3Xq-_82WNvU8CtBYw1f4mz_qM-EXIR4WL7Dvos",

    "user": {
    "email": "kenzinho@mail.com",
    "name": "Kenzinhozão",
    "age": 38,
    "id": 1
    }
    }

#

- Register

  - Endpoint: /register
  - Método: POST
  - Body:

    {

        "name": "Testando",
        "city": "city",
        "adress": "adress",
        "email": "email@mail.com",
        "password": "pass",
        "tel": "tel",
        "avatar": "url da imagem",
        "favoritePets": []

    }

  - Response:

    {

        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsQG1haWwuY29tIiwiaWF0IjoxNjY3MjUwNDQyLCJleHAiOjE2NjcyNTQwNDIsInN1YiI6IjMifQ.Hs4j1__sH1_k0D5p5yRwSDEz_HzM00cR6hwF9i-6pmM",

    "user": {
    "email": "email@mail.com",
    "name": "Testando",
    "city": "city",
    "adress": "adress",
    "tel": "tel",
    "avatar": "url",
    "favoritePets": [],
    "id": 3
    }
    }

#

## User requests:

#

- Get all users

  - Endpoint: /users
  - Método: GET
  - Body:

    Sem body.

  - Response:

    {

        [
          {
            "email": "email@mail.com",
            "password": "$2a$10$/vtzlvKPds8dkKUnBQiKK.      PPXXNCOhXoStrLtVw3RXziseR7GHBUK",
            "name": "Testando",
            "city": "city",
            "adress": "adress",
            "tel": "tel",
            "avatar": "url",
            "favoritePets": [],
            "id": 3
          },
          {
            "email": "email@gmail.com",
            "password":         "$2a$10$e7U9VOvwLazd1RQWXTel9OM3UVrHc5p6xhqzPvooqWsy.       1hSx2VyO",
            "name": "name",
            "city": "city",
            "adress": "adress",
            "tel": "tel",
            "avatar": "url",
            "favoritePets": [],
            "id": 2
          },
            ...
        ]

    }

#

- Get user by id

  - Endpoint: /users/${id}
  - Método: GET
  - Body:

    Sem body.

  - Response:

    {

        "email": "kenzinho@mail.com",

    "password": "$2a$10$YQiiz0ANVwIgpOjYXPxc0O9H2XeX3m8OoY1xk7OGgxTnOJnsZU7FO",
    "name": "teste",
    "age": 38,
    "id": 1
    }

#

- Get all user pets

  - Endpoint: /users/${id}/?\_embed=pets
  - Método: GET
  - Body:

    Sem body.

  - Response:

        {
          "email": "kenzinho@mail.com",
          "password": "$2a$10$YQiiz0ANVwIgpOjYXPxc0O9H2XeX3m8OoY1xk7OGgxTnOJnsZU7FO",
          "name": "Kenzinhozão",
          "age": 38,
          "id": 1,
          "pets": [
            {
            	"userId": 1,
            	"name": "Kenzinhozão pet",
            	"sex": "sex",
            	"category": "cat",
            	"breed": "breed",
            	"age": "age",
            	"bio": "bio",
            	"avatar": "url",
            	"image": [
            		"url",
            		"url",
            		"url"
            	],
            	"visible": "true",
            	"id": 1
            },
            {
            	"userId": 1,
            	"name": "testetetetste",
            	"sex": "sex",
            	"category": "cat",
            	"breed": "breed",
            	"age": "age",
            	"bio": "bio",
            	"avatar": "url",
            	"image": [
            		"url",
            		"url",
            		"url"
            	],
            	"visible": "true",
            	"id": 2
            },
            ...

    ]
    }

#

- Patch User

  - Endpoint: /users/${id}
  - Método: PATCH
  - Body:

    {

        Passar apenas as informaçãoes que serão alteradas

        "name": "Testando",
        "city": "city",
        "adress": "adress",
        "email": "email@mail.com",
        "password": "pass",
        "tel": "tel",
        "avatar": "url",
        "favoritePets": []

    }

  - Response:

        {
          "email": "kenzinho@mail.com",
          "password": "$2a$10$YQiiz0ANVwIgpOjYXPxc0O9H2XeX3m8OoY1xk7OGgxTnOJnsZU7FO",
          "name": "Kenzinhozão",
          "age": 38,
          "id": 1,
          "pets": [
            {
            	"userId": 1,
            	"name": "Kenzinhozão pet",
            	"sex": "sex",
            	"category": "cat",
            	"breed": "breed",
            	"age": "age",
            	"bio": "bio",
            	"avatar": "url",
            	"image": [
            		"url",
            		"url",
            		"url"
            	],
            	"visible": "true",
            	"id": 1
            },
            {
            	"userId": 1,
            	"name": "testetetetste",
            	"sex": "sex",
            	"category": "cat",
            	"breed": "breed",
            	"age": "age",
            	"bio": "bio",
            	"avatar": "url",
            	"image": [
            		"url",
            		"url",
            		"url"
            	],
            	"visible": "true",
            	"id": 2
            },
            ...

    ]
    }

#

- Delete User

  - Endpoint: /users/${id}
  - Método: DELETE
  - Body:

    Sem body.

  - Response:

    Sem response

#

## Pets requests:

#

- Get all pets

  - Endpoint: /pets
  - Método: GET
  - Body:

    Sem body.

  - Response:

    {

        [
          {
          	"userId": 1,
          	"name": "Kenzinhozão pet",
          	"sex": "sex",
          	"category": "cat",
          	"breed": "breed",
          	"age": "age",
          	"bio": "bio",
          	"avatar": "url",
          	"image": [
          		"url",
          		"url",
          		"url"
          	],
          	"visible": "true",
          	"id": 1
          },
          {
          	"userId": 1,
          	"name": "testetetetste",
          	"sex": "sex",
          	"category": "cat",
          	"breed": "breed",
          	"age": "age",
          	"bio": "bio",
          	"avatar": "url",
          	"image": [
          		"url",
          		"url",
          		"url"
          	],
          	"visible": "true",
          	"id": 2
          },
            ...
        ]

    }

#

- Get pet by id

  - Endpoint: /pets/${id}
  - Método: GET
  - Body:

    Sem body.

  - Response:

    {

    "userId": 1,
    "name": "Josefina nome mudado",
    "sex": "sex",
    "category": "cat",
    "breed": "breed",
    "age": "age",
    "bio": "bio",
    "avatar": "url",
    "image": [
    "url",
    "url",
    "url"
    ],
    "visible": "true",
    "id": 1
    }

#

- Patch pet

  - Endpoint: /pets/${id}
  - Método: PATCH
  - Body:

    {

        Passar apenas as informaçãoes que serão alteradas

        "userId": 1,
        "name": "name",
        "sex": "sex",
        "category": "cat",
        "breed": "breed",
        "age": "age",
        "bio": "bio",
        "avatar": "url",
        "image": ["url","url","url"],
        "visible": true

    }

  - Response:

    {

    "userId": 1,
    "name": "Kenzinhozão pet",
    "sex": "sex",
    "category": "cat",
    "breed": "breed",
    "age": "age",
    "bio": "bio",
    "avatar": "url",
    "image": [
    "url",
    "url",
    "url"
    ],
    "visible": "true",
    "id": 1
    }

#

- Delete pet

  - Endpoint: /pets/${id}
  - Método: DELETE
  - Body:

    Sem body.

  - Response:

    Sem response

#
