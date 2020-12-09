---
title: API Reference

language_tabs:
- bash
- javascript

includes:

search: true

toc_footers:
- <a href='http://github.com/mpociot/documentarian'>Documentation Powered by Documentarian</a>
---
<!-- START_INFO -->
# Info

Welcome to the generated API reference.
[Get Postman Collection](http://localhost/docs/collection.json)

<!-- END_INFO -->

#Authentication


APIs for authentication
<!-- START_7583c69bbb12e80377706f0a40ae5225 -->
## Logout user

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/logout" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"username":"acua"}'

```

```javascript
const url = new URL(
    "http://localhost/logout"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "username": "acua"
}

fetch(url, {
    method: "POST",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /logout`

#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `username` | string |  required  | Username of the user.
    
<!-- END_7583c69bbb12e80377706f0a40ae5225 -->

<!-- START_669c21a0ec50102c5d7a38fdaec7d34e -->
## Register user

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/register" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"username":"acua","email":"aaa@aaa.com","password":"pestillo","password2":"pestillo"}'

```

```javascript
const url = new URL(
    "http://localhost/register"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "username": "acua",
    "email": "aaa@aaa.com",
    "password": "pestillo",
    "password2": "pestillo"
}

fetch(url, {
    method: "POST",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /register`

#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `username` | string |  required  | Username of the user.
        `email` | string |  required  | Email of the user.
        `password` | string |  required  | Password of the user.
        `password2` | string |  required  | Password repeat of the user.
    
<!-- END_669c21a0ec50102c5d7a38fdaec7d34e -->

<!-- START_dd217657c6d30db33bd0158a8815a014 -->
## Login user

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/login" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"email":"aaa@aaa.com","password":"pestillo"}'

```

```javascript
const url = new URL(
    "http://localhost/login"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "email": "aaa@aaa.com",
    "password": "pestillo"
}

fetch(url, {
    method: "POST",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /login`

#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `email` | string |  required  | Email of the user.
        `password` | string |  required  | Password of the user.
    
<!-- END_dd217657c6d30db33bd0158a8815a014 -->

#Card Management


APIs for managing cards
<!-- START_13858f85d5bfee6c6abe6c6d025a3e39 -->
## Get all cards

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/cards" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/cards"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /cards`


<!-- END_13858f85d5bfee6c6abe6c6d025a3e39 -->

<!-- START_f9e892755a248fae21b1ee6d0eb3d12c -->
## Get card by id

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/card_by_id" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"id":1}'

```

```javascript
const url = new URL(
    "http://localhost/card_by_id"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "id": 1
}

fetch(url, {
    method: "POST",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /card_by_id`

#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `id` | integer |  required  | Id of the card.
    
<!-- END_f9e892755a248fae21b1ee6d0eb3d12c -->

<!-- START_abd588476cdf2b31ec5489a89922490d -->
## Insert card

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/insert_card" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"rating":99,"value":500,"pace":99,"shooting":99,"passing":99,"dribbling":99,"defending":99,"physicality":99,"goodLeg":"Derecha","skills":5,"badLeg":5,"idType":1,"idPlayer":1,"idTeam":1,"idCountry":1,"idPosition":1}'

```

```javascript
const url = new URL(
    "http://localhost/insert_card"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "rating": 99,
    "value": 500,
    "pace": 99,
    "shooting": 99,
    "passing": 99,
    "dribbling": 99,
    "defending": 99,
    "physicality": 99,
    "goodLeg": "Derecha",
    "skills": 5,
    "badLeg": 5,
    "idType": 1,
    "idPlayer": 1,
    "idTeam": 1,
    "idCountry": 1,
    "idPosition": 1
}

fetch(url, {
    method: "POST",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /insert_card`

#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `rating` | integer |  required  | Rating of the card.
        `value` | integer |  required  | Value of the card.
        `pace` | integer |  required  | Pace of the card.
        `shooting` | integer |  required  | Shooting of the card.
        `passing` | integer |  required  | Pasing of the card.
        `dribbling` | integer |  required  | Dribbling of the card.
        `defending` | integer |  required  | Defending of the card.
        `physicality` | integer |  required  | Physicality of the card.
        `goodLeg` | string |  required  | Good leg of the card.
        `skills` | integer |  required  | Skills of the card.
        `badLeg` | integer |  required  | Bad leg of the card.
        `idType` | integer |  required  | Id type of the card.
        `idPlayer` | integer |  required  | Id player of the card.
        `idTeam` | integer |  required  | Id team of the card.
        `idCountry` | integer |  required  | Id country of the card.
        `idPosition` | integer |  required  | Id position of the card.
    
<!-- END_abd588476cdf2b31ec5489a89922490d -->

<!-- START_20a084376afa7a501ce0232886f7db1c -->
## Delete card

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/delete_card" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"id":1}'

```

```javascript
const url = new URL(
    "http://localhost/delete_card"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "id": 1
}

fetch(url, {
    method: "POST",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /delete_card`

#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `id` | integer |  required  | Id of the card.
    
<!-- END_20a084376afa7a501ce0232886f7db1c -->

<!-- START_3d5991eefdaab79da3a19f5e8ecf4bd1 -->
## Update card

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/update_card" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"id":1,"rating":99,"value":500,"pace":99,"shooting":99,"passing":99,"dribbling":99,"defending":99,"physicality":99,"goodLeg":"Derecha","skills":5,"badLeg":5,"idType":1,"idPlayer":1,"idTeam":1,"idCountry":1,"idPosition":1}'

```

```javascript
const url = new URL(
    "http://localhost/update_card"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "id": 1,
    "rating": 99,
    "value": 500,
    "pace": 99,
    "shooting": 99,
    "passing": 99,
    "dribbling": 99,
    "defending": 99,
    "physicality": 99,
    "goodLeg": "Derecha",
    "skills": 5,
    "badLeg": 5,
    "idType": 1,
    "idPlayer": 1,
    "idTeam": 1,
    "idCountry": 1,
    "idPosition": 1
}

fetch(url, {
    method: "POST",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /update_card`

#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `id` | integer |  required  | Id of the card.
        `rating` | integer |  required  | Rating of the card.
        `value` | integer |  required  | Value of the card.
        `pace` | integer |  required  | Pace of the card.
        `shooting` | integer |  required  | Shooting of the card.
        `passing` | integer |  required  | Pasing of the card.
        `dribbling` | integer |  required  | Dribbling of the card.
        `defending` | integer |  required  | Defending of the card.
        `physicality` | integer |  required  | Physicality of the card.
        `goodLeg` | string |  required  | Good leg of the card.
        `skills` | integer |  required  | Skills of the card.
        `badLeg` | integer |  required  | Bad leg of the card.
        `idType` | integer |  required  | Id type of the card.
        `idPlayer` | integer |  required  | Id player of the card.
        `idTeam` | integer |  required  | Id team of the card.
        `idCountry` | integer |  required  | Id country of the card.
        `idPosition` | integer |  required  | Id position of the card.
    
<!-- END_3d5991eefdaab79da3a19f5e8ecf4bd1 -->

#Card Type Management


APIs for managing cards types
<!-- START_25da400d9de5baa93b89cc655853253d -->
## Get all cards types

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/cards_types" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/cards_types"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /cards_types`


<!-- END_25da400d9de5baa93b89cc655853253d -->

<!-- START_0c60c5758694e60d89d10aa2c9155dc9 -->
## Get card type by id

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/card_type_by_id" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"id":1}'

```

```javascript
const url = new URL(
    "http://localhost/card_type_by_id"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "id": 1
}

fetch(url, {
    method: "POST",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /card_type_by_id`

#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `id` | integer |  required  | Id of the card type.
    
<!-- END_0c60c5758694e60d89d10aa2c9155dc9 -->

<!-- START_adaedad33618a7bdad77dd0cc559f711 -->
## Insert card type

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/insert_card_type" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"name":"Oro","image":"base64","imageMini":"base64","textColor":"#ffffff","rare":true,"special":true}'

```

```javascript
const url = new URL(
    "http://localhost/insert_card_type"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "name": "Oro",
    "image": "base64",
    "imageMini": "base64",
    "textColor": "#ffffff",
    "rare": true,
    "special": true
}

fetch(url, {
    method: "POST",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /insert_card_type`

#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `name` | string |  required  | Name of the card type.
        `image` | string |  optional  | Base64 image of the card type.
        `imageMini` | string |  optional  | Base64 image mini of the card type.
        `textColor` | string |  optional  | Text color of the card type.
        `rare` | boolean |  optional  | If is rare the card type.
        `special` | boolean |  optional  | If is special the card type.
    
<!-- END_adaedad33618a7bdad77dd0cc559f711 -->

<!-- START_f66869aedd1bce0fc7185a40e610defe -->
## Delete card type

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/delete_card_type" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"id":1}'

```

```javascript
const url = new URL(
    "http://localhost/delete_card_type"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "id": 1
}

fetch(url, {
    method: "POST",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /delete_card_type`

#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `id` | integer |  required  | Id of the card type.
    
<!-- END_f66869aedd1bce0fc7185a40e610defe -->

<!-- START_81f035ba982ab88589a8c24b539042f1 -->
## Update card type

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/update_card_type" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"id":1,"name":"Oro","image":"base64","imageMini":"base64","textColor":"#ffffff","rare":true,"special":true}'

```

```javascript
const url = new URL(
    "http://localhost/update_card_type"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "id": 1,
    "name": "Oro",
    "image": "base64",
    "imageMini": "base64",
    "textColor": "#ffffff",
    "rare": true,
    "special": true
}

fetch(url, {
    method: "POST",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /update_card_type`

#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `id` | integer |  required  | Id of the card type.
        `name` | string |  required  | Name of the card type.
        `image` | string |  optional  | Base64 image of the card type.
        `imageMini` | string |  optional  | Base64 image mini of the card type.
        `textColor` | string |  optional  | Text color of the card type.
        `rare` | boolean |  optional  | If is rare the card type.
        `special` | boolean |  optional  | If is special the card type.
    
<!-- END_81f035ba982ab88589a8c24b539042f1 -->

#Club Management


APIs for managing clubs
<!-- START_781f14d9580680ac571f7566ccebf66a -->
## Insert club

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/create_club" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"name":"Espa\u00f1a","image":"image_name","username":"acua"}'

```

```javascript
const url = new URL(
    "http://localhost/create_club"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "name": "Espa\u00f1a",
    "image": "image_name",
    "username": "acua"
}

fetch(url, {
    method: "POST",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /create_club`

#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `name` | string |  required  | Name of the club.
        `image` | string |  optional  | image of the club.
        `username` | string |  required  | Username of the club.
    
<!-- END_781f14d9580680ac571f7566ccebf66a -->

<!-- START_a217e49e7a1e2159994106f4d008cde0 -->
## Update club

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/update_club" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"name":"Espa\u00f1a","image":"image_name","username":"acua"}'

```

```javascript
const url = new URL(
    "http://localhost/update_club"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "name": "Espa\u00f1a",
    "image": "image_name",
    "username": "acua"
}

fetch(url, {
    method: "POST",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /update_club`

#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `name` | string |  required  | Name of the club.
        `image` | string |  optional  | image of the club.
        `username` | string |  required  | Username of the club.
    
<!-- END_a217e49e7a1e2159994106f4d008cde0 -->

<!-- START_42cc092116414ea8d398eaabcc512fc9 -->
## Delete club

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/delete_club" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"id":1}'

```

```javascript
const url = new URL(
    "http://localhost/delete_club"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "id": 1
}

fetch(url, {
    method: "POST",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /delete_club`

#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `id` | integer |  required  | Id of the club.
    
<!-- END_42cc092116414ea8d398eaabcc512fc9 -->

<!-- START_1a20c087a0b594c589d3dd90f5b8ecbc -->
## Sell Card

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/sell_card" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"idClub":1,"idClubCard":1,"cardValue":500}'

```

```javascript
const url = new URL(
    "http://localhost/sell_card"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "idClub": 1,
    "idClubCard": 1,
    "cardValue": 500
}

fetch(url, {
    method: "POST",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /sell_card`

#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `idClub` | integer |  required  | Id of the club.
        `idClubCard` | integer |  required  | Id of the club card.
        `cardValue` | integer |  required  | Value of the club card.
    
<!-- END_1a20c087a0b594c589d3dd90f5b8ecbc -->

<!-- START_bee3001a087936e5d22ba2b14d3d6175 -->
## Save Cards

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/save_cards" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"idClub":1,"idCards":1}'

```

```javascript
const url = new URL(
    "http://localhost/save_cards"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "idClub": 1,
    "idCards": 1
}

fetch(url, {
    method: "POST",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /save_cards`

#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `idClub` | integer |  required  | Id of the club.
        `idCards` | integer |  required  | Array of id of club cards.
    
<!-- END_bee3001a087936e5d22ba2b14d3d6175 -->

<!-- START_bd5cd316236e8077e0cd3ca51e0e362b -->
## Save Cards

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/update_coins" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"idClub":1,"coins":500}'

```

```javascript
const url = new URL(
    "http://localhost/update_coins"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "idClub": 1,
    "coins": 500
}

fetch(url, {
    method: "POST",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /update_coins`

#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `idClub` | integer |  required  | Id of the club.
        `coins` | integer |  required  | Coins.
    
<!-- END_bd5cd316236e8077e0cd3ca51e0e362b -->

#Country Management


APIs for managing countries
<!-- START_972cabf3b36d76ec0e7a7938d621707c -->
## Get all countries

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/countries" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/countries"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /countries`


<!-- END_972cabf3b36d76ec0e7a7938d621707c -->

<!-- START_4d7f896c2faa83801bfe6ba74ce7561c -->
## Get country by id

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/country_by_id" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"id":1}'

```

```javascript
const url = new URL(
    "http://localhost/country_by_id"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "id": 1
}

fetch(url, {
    method: "POST",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /country_by_id`

#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `id` | integer |  required  | Id of the country.
    
<!-- END_4d7f896c2faa83801bfe6ba74ce7561c -->

<!-- START_0117b8f948eb688b95f64654d138b6a4 -->
## Insert country

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/insert_country" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"name":"Espa\u00f1a","image":"base64"}'

```

```javascript
const url = new URL(
    "http://localhost/insert_country"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "name": "Espa\u00f1a",
    "image": "base64"
}

fetch(url, {
    method: "POST",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /insert_country`

#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `name` | string |  required  | Name of the country.
        `image` | string |  optional  | Base64 image of the country.
    
<!-- END_0117b8f948eb688b95f64654d138b6a4 -->

<!-- START_3fbf8b601e75f06440f9ed5fcfb2fe19 -->
## Delete country

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/delete_country" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"id":1}'

```

```javascript
const url = new URL(
    "http://localhost/delete_country"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "id": 1
}

fetch(url, {
    method: "POST",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /delete_country`

#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `id` | integer |  required  | Id of the country.
    
<!-- END_3fbf8b601e75f06440f9ed5fcfb2fe19 -->

<!-- START_b45ea240a9cf137d6d978035e26e9d9a -->
## Update country

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/update_country" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"id":1,"name":"Espa\u00f1a","image":"base64"}'

```

```javascript
const url = new URL(
    "http://localhost/update_country"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "id": 1,
    "name": "Espa\u00f1a",
    "image": "base64"
}

fetch(url, {
    method: "POST",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /update_country`

#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `id` | integer |  required  | Id of the country.
        `name` | string |  required  | Name of the country.
        `image` | string |  optional  | Base64 image of the country.
    
<!-- END_b45ea240a9cf137d6d978035e26e9d9a -->

#First Load


APIs for first load
<!-- START_3156d52667c29bb0913b88670212e3e0 -->
## Get all info of first load

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/first_load" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"idClub":1}'

```

```javascript
const url = new URL(
    "http://localhost/first_load"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "idClub": 1
}

fetch(url, {
    method: "POST",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /first_load`

#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `idClub` | integer |  required  | Id of the club.
    
<!-- END_3156d52667c29bb0913b88670212e3e0 -->

#League Management


APIs for managing leagues
<!-- START_7a93de16ec84c980948dee3543888b07 -->
## Get league by id

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/league_by_id" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"id":1}'

```

```javascript
const url = new URL(
    "http://localhost/league_by_id"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "id": 1
}

fetch(url, {
    method: "POST",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /league_by_id`

#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `id` | integer |  required  | Id of the league.
    
<!-- END_7a93de16ec84c980948dee3543888b07 -->

<!-- START_e9b839688612934b7a642b59a8cdd0a1 -->
## Insert league

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/insert_league" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"name":"La Liga","image":"base64"}'

```

```javascript
const url = new URL(
    "http://localhost/insert_league"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "name": "La Liga",
    "image": "base64"
}

fetch(url, {
    method: "POST",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /insert_league`

#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `name` | string |  required  | Name of the league.
        `image` | string |  optional  | Base64 image of the league.
    
<!-- END_e9b839688612934b7a642b59a8cdd0a1 -->

<!-- START_84c7a3231c579f587f3fa26d2d94236b -->
## Delete league

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/delete_league" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"id":1}'

```

```javascript
const url = new URL(
    "http://localhost/delete_league"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "id": 1
}

fetch(url, {
    method: "POST",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /delete_league`

#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `id` | integer |  required  | Id of the league.
    
<!-- END_84c7a3231c579f587f3fa26d2d94236b -->

<!-- START_10aaf2245f7dcce7e389be86b9a7cb88 -->
## Update league

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/update_league" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"id":1,"name":"La Liga","image":"base64"}'

```

```javascript
const url = new URL(
    "http://localhost/update_league"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "id": 1,
    "name": "La Liga",
    "image": "base64"
}

fetch(url, {
    method: "POST",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /update_league`

#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `id` | integer |  required  | Id of the league.
        `name` | string |  required  | Name of the league.
        `image` | string |  optional  | Base64 image of the league.
    
<!-- END_10aaf2245f7dcce7e389be86b9a7cb88 -->

<!-- START_aa9f5a7642631a7f2f637aa5ed6ba061 -->
## Get all leagues

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/leagues" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/leagues"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /leagues`


<!-- END_aa9f5a7642631a7f2f637aa5ed6ba061 -->

#Pack Management


APIs for managing packs
<!-- START_3e8f7ace4cd9bb290f3ac8e9661eb16d -->
## Open pack

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/open_pack" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"idClub":1,"numberPlayers":6,"packPrice":5000}'

```

```javascript
const url = new URL(
    "http://localhost/open_pack"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "idClub": 1,
    "numberPlayers": 6,
    "packPrice": 5000
}

fetch(url, {
    method: "POST",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /open_pack`

#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `idClub` | integer |  required  | Id of the club.
        `numberPlayers` | integer |  optional  | Number of players of the pack.
        `packPrice` | integer |  required  | Price of the pack.
    
<!-- END_3e8f7ace4cd9bb290f3ac8e9661eb16d -->

<!-- START_6ce415c19dacfa0e2ea66189f82d00c0 -->
## Get all packs

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/packs" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/packs"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /packs`


<!-- END_6ce415c19dacfa0e2ea66189f82d00c0 -->

<!-- START_977e89b482320f0000bdc0a7b62d23b0 -->
## Get pack by id

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/pack_by_id" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"id":1}'

```

```javascript
const url = new URL(
    "http://localhost/pack_by_id"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "id": 1
}

fetch(url, {
    method: "POST",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /pack_by_id`

#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `id` | integer |  required  | Id of the pack.
    
<!-- END_977e89b482320f0000bdc0a7b62d23b0 -->

<!-- START_3c3b79f8db830ec94df5a66efc6c3a50 -->
## Insert pack

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/insert_pack" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"name":"Sobre premium","description":"Descripcion","numberPlayers":6,"price":5000,"image":"base64"}'

```

```javascript
const url = new URL(
    "http://localhost/insert_pack"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "name": "Sobre premium",
    "description": "Descripcion",
    "numberPlayers": 6,
    "price": 5000,
    "image": "base64"
}

fetch(url, {
    method: "POST",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /insert_pack`

#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `name` | string |  required  | Name of the pack.
        `description` | string |  optional  | Description of the pack.
        `numberPlayers` | integer |  optional  | Number of players of the pack.
        `price` | integer |  required  | Price of players of the pack.
        `image` | string |  optional  | Base64 image of the pack.
    
<!-- END_3c3b79f8db830ec94df5a66efc6c3a50 -->

<!-- START_fde63a885bf4056e640918147d5c3272 -->
## Delete pack

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/delete_pack" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"id":1}'

```

```javascript
const url = new URL(
    "http://localhost/delete_pack"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "id": 1
}

fetch(url, {
    method: "POST",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /delete_pack`

#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `id` | integer |  required  | Id of the pack.
    
<!-- END_fde63a885bf4056e640918147d5c3272 -->

<!-- START_cf4cadbda50f95be2c023b017e0d6e45 -->
## Insert pack

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/update_pack" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"id":1,"name":"Sobre premium","description":"Descripcion","numberPlayers":6,"price":5000,"image":"base64"}'

```

```javascript
const url = new URL(
    "http://localhost/update_pack"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "id": 1,
    "name": "Sobre premium",
    "description": "Descripcion",
    "numberPlayers": 6,
    "price": 5000,
    "image": "base64"
}

fetch(url, {
    method: "POST",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /update_pack`

#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `id` | integer |  required  | Id of the pack.
        `name` | string |  required  | Name of the pack.
        `description` | string |  optional  | Description of the pack.
        `numberPlayers` | integer |  optional  | Number of players of the pack.
        `price` | integer |  required  | Price of the pack.
        `image` | string |  optional  | Base64 image of the pack.
    
<!-- END_cf4cadbda50f95be2c023b017e0d6e45 -->

#Permission Management


APIs for managing permissions
<!-- START_ed0659c05b416e4ae36e791a99cfc3e5 -->
## Get all permissions

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/permissions" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/permissions"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /permissions`


<!-- END_ed0659c05b416e4ae36e791a99cfc3e5 -->

<!-- START_eef87a146d57c2c6f45bfa4309112bc1 -->
## Get permission by id

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/permission_by_id" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"id":1}'

```

```javascript
const url = new URL(
    "http://localhost/permission_by_id"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "id": 1
}

fetch(url, {
    method: "POST",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /permission_by_id`

#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `id` | integer |  required  | Id of the permission.
    
<!-- END_eef87a146d57c2c6f45bfa4309112bc1 -->

<!-- START_e03fc7dd6986055a9ee81f31c298c15d -->
## Insert permission

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/insert_permission" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"name":"Permiso"}'

```

```javascript
const url = new URL(
    "http://localhost/insert_permission"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "name": "Permiso"
}

fetch(url, {
    method: "POST",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /insert_permission`

#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `name` | string |  required  | Name of the permission.
    
<!-- END_e03fc7dd6986055a9ee81f31c298c15d -->

<!-- START_804d4524ef928087333b514710e2d15a -->
## Delete permission

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/delete_permission" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"id":1}'

```

```javascript
const url = new URL(
    "http://localhost/delete_permission"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "id": 1
}

fetch(url, {
    method: "POST",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /delete_permission`

#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `id` | integer |  required  | Id of the permission.
    
<!-- END_804d4524ef928087333b514710e2d15a -->

<!-- START_9873f9cd0d51e11c5799912b700bed68 -->
## Update permission

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/update_permission" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"id":1,"name":"Espa\u00f1a"}'

```

```javascript
const url = new URL(
    "http://localhost/update_permission"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "id": 1,
    "name": "Espa\u00f1a"
}

fetch(url, {
    method: "POST",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /update_permission`

#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `id` | integer |  required  | Id of the permission.
        `name` | string |  required  | Name of the permission.
    
<!-- END_9873f9cd0d51e11c5799912b700bed68 -->

#Player Management


APIs for managing players
<!-- START_ddd8a08cc3821751ee6267c298fcb606 -->
## Get all players

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/players" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/players"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /players`


<!-- END_ddd8a08cc3821751ee6267c298fcb606 -->

<!-- START_91535cd42155126643ed689590a918b8 -->
## Get player by id

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/player_by_id" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"id":1}'

```

```javascript
const url = new URL(
    "http://localhost/player_by_id"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "id": 1
}

fetch(url, {
    method: "POST",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /player_by_id`

#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `id` | integer |  required  | Id of the player.
    
<!-- END_91535cd42155126643ed689590a918b8 -->

<!-- START_fe2d93116bd1e3659bc946fa9d64e5fa -->
## Insert player

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/insert_player" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"name":"El Choco","full_name":"El Choco Lozano","image":"base64","height":175,"birth":"26\/10\/1998"}'

```

```javascript
const url = new URL(
    "http://localhost/insert_player"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "name": "El Choco",
    "full_name": "El Choco Lozano",
    "image": "base64",
    "height": 175,
    "birth": "26\/10\/1998"
}

fetch(url, {
    method: "POST",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /insert_player`

#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `name` | string |  required  | Name of the player.
        `full_name` | string |  required  | Full name of the player.
        `image` | string |  optional  | Base64 image of the player.
        `height` | integer |  required  | Height of the player.
        `birth` | string |  optional  | Birth of the player.
    
<!-- END_fe2d93116bd1e3659bc946fa9d64e5fa -->

<!-- START_b756ca2417dd958a4b07db12b0d74e97 -->
## Delete player

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/delete_player" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"id":1}'

```

```javascript
const url = new URL(
    "http://localhost/delete_player"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "id": 1
}

fetch(url, {
    method: "POST",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /delete_player`

#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `id` | integer |  required  | Id of the player.
    
<!-- END_b756ca2417dd958a4b07db12b0d74e97 -->

<!-- START_9a99415912d7cc1bddc53546c719e39c -->
## Update player

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/update_player" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"id":1,"name":"El Choco","full_name":"El Choco Lozano","image":"base64","height":175,"birth":"26\/10\/1998"}'

```

```javascript
const url = new URL(
    "http://localhost/update_player"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "id": 1,
    "name": "El Choco",
    "full_name": "El Choco Lozano",
    "image": "base64",
    "height": 175,
    "birth": "26\/10\/1998"
}

fetch(url, {
    method: "POST",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /update_player`

#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `id` | integer |  required  | Id of the player.
        `name` | string |  required  | Name of the player.
        `full_name` | string |  required  | Full name of the player.
        `image` | string |  optional  | Base64 image of the player.
        `height` | integer |  required  | Height of the player.
        `birth` | string |  optional  | Birth of the player.
    
<!-- END_9a99415912d7cc1bddc53546c719e39c -->

#Position Management


APIs for managing positions
<!-- START_08284f54528f53a15b93fe57e08a12a4 -->
## Get all positions

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/positions" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/positions"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /positions`


<!-- END_08284f54528f53a15b93fe57e08a12a4 -->

<!-- START_9da7c81f03d517fd812a4f2afca8d6d0 -->
## Get position by id

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/position_by_id" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"id":1}'

```

```javascript
const url = new URL(
    "http://localhost/position_by_id"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "id": 1
}

fetch(url, {
    method: "POST",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /position_by_id`

#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `id` | integer |  required  | Id of the position.
    
<!-- END_9da7c81f03d517fd812a4f2afca8d6d0 -->

#Squad Management


APIs for managing squads
<!-- START_0c8b939137e9ea4578d8d0bd0617d87f -->
## Get all squads by id club

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/squads_by_club" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"idClub":1}'

```

```javascript
const url = new URL(
    "http://localhost/squads_by_club"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "idClub": 1
}

fetch(url, {
    method: "POST",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /squads_by_club`

#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `idClub` | integer |  required  | Id club of the squad.
    
<!-- END_0c8b939137e9ea4578d8d0bd0617d87f -->

<!-- START_29a174d12a30eb89a345c08dd0acda2b -->
## Get squad by id

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/squad_by_id" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"id":1}'

```

```javascript
const url = new URL(
    "http://localhost/squad_by_id"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "id": 1
}

fetch(url, {
    method: "POST",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /squad_by_id`

#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `id` | integer |  required  | Id of the squad.
    
<!-- END_29a174d12a30eb89a345c08dd0acda2b -->

<!-- START_ede361ad5209c24b70b525325556639b -->
## Insert squad

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/create_squad" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"name":"Cadiz","idClub":1}'

```

```javascript
const url = new URL(
    "http://localhost/create_squad"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "name": "Cadiz",
    "idClub": 1
}

fetch(url, {
    method: "POST",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /create_squad`

#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `name` | string |  required  | Name of the squad.
        `idClub` | integer |  required  | Id club of the squad.
    
<!-- END_ede361ad5209c24b70b525325556639b -->

<!-- START_db78e3052c89ab69c676df792ed820a7 -->
## Delete squad

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/delete_squad" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"id":1}'

```

```javascript
const url = new URL(
    "http://localhost/delete_squad"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "id": 1
}

fetch(url, {
    method: "POST",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /delete_squad`

#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `id` | integer |  required  | Id of the squad.
    
<!-- END_db78e3052c89ab69c676df792ed820a7 -->

<!-- START_81f555f37a3866b8d471ed8c58c55158 -->
## Update squad

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/update_squad" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"id":1,"name":"Cadiz","idClub":1,"rating":90,"chemistry":90}'

```

```javascript
const url = new URL(
    "http://localhost/update_squad"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "id": 1,
    "name": "Cadiz",
    "idClub": 1,
    "rating": 90,
    "chemistry": 90
}

fetch(url, {
    method: "POST",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /update_squad`

#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `id` | integer |  required  | Id of the squad.
        `name` | string |  required  | Name of the squad.
        `idClub` | integer |  required  | Id club of the squad.
        `rating` | integer |  required  | Rating of the squad.
        `chemistry` | integer |  required  | Chemistry of the squad.
    
<!-- END_81f555f37a3866b8d471ed8c58c55158 -->

<!-- START_1c8dcb504b5b642e892e1af211e9a55a -->
## Get all squad cards by id squad

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/squad_cards" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"idSquad":1}'

```

```javascript
const url = new URL(
    "http://localhost/squad_cards"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "idSquad": 1
}

fetch(url, {
    method: "POST",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /squad_cards`

#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `idSquad` | integer |  required  | Id squad.
    
<!-- END_1c8dcb504b5b642e892e1af211e9a55a -->

<!-- START_1b3e801cd2626ffd568adef529f27f72 -->
## Update squad card

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/update_squad_card" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"idSquad":1,"positions":"1"}'

```

```javascript
const url = new URL(
    "http://localhost/update_squad_card"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "idSquad": 1,
    "positions": "1"
}

fetch(url, {
    method: "POST",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /update_squad_card`

#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `idSquad` | integer |  required  | Id squad.
        `positions` | array |  required  | Array of positions.
    
<!-- END_1b3e801cd2626ffd568adef529f27f72 -->

#Team Management


APIs for managing teams
<!-- START_c6f35ce681d98f48feec0a8e10e74ecb -->
## Get team by id

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/team_by_id" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"id":1}'

```

```javascript
const url = new URL(
    "http://localhost/team_by_id"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "id": 1
}

fetch(url, {
    method: "POST",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /team_by_id`

#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `id` | integer |  required  | Id of the team.
    
<!-- END_c6f35ce681d98f48feec0a8e10e74ecb -->

<!-- START_353f52220edb37ad966c19c43ded9230 -->
## Insert team

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/insert_team" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"name":"Cadiz","idLeague":"1","image":"base64"}'

```

```javascript
const url = new URL(
    "http://localhost/insert_team"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "name": "Cadiz",
    "idLeague": "1",
    "image": "base64"
}

fetch(url, {
    method: "POST",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /insert_team`

#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `name` | string |  required  | Name of the team.
        `idLeague` | string |  required  | Id of the league.
        `image` | string |  optional  | Base64 image of the team.
    
<!-- END_353f52220edb37ad966c19c43ded9230 -->

<!-- START_65ee071434c83b45e1038b5e918216ee -->
## Delete team

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/delete_team" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"id":1}'

```

```javascript
const url = new URL(
    "http://localhost/delete_team"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "id": 1
}

fetch(url, {
    method: "POST",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /delete_team`

#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `id` | integer |  required  | Id of the team.
    
<!-- END_65ee071434c83b45e1038b5e918216ee -->

<!-- START_3a03d2422bb7b384a2aa2b627865c9aa -->
## Update team

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/update_team" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"id":1,"name":"Cadiz","idLeague":"1","image":"base64"}'

```

```javascript
const url = new URL(
    "http://localhost/update_team"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "id": 1,
    "name": "Cadiz",
    "idLeague": "1",
    "image": "base64"
}

fetch(url, {
    method: "POST",
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /update_team`

#### Body Parameters
Parameter | Type | Status | Description
--------- | ------- | ------- | ------- | -----------
    `id` | integer |  required  | Id of the team.
        `name` | string |  required  | Name of the team.
        `idLeague` | string |  required  | Id of the league.
        `image` | string |  optional  | Base64 image of the team.
    
<!-- END_3a03d2422bb7b384a2aa2b627865c9aa -->

<!-- START_f20db0e60a341f12dc3d3b69febcc163 -->
## Get all teams

<br><small style="padding: 1px 9px 2px;font-weight: bold;white-space: nowrap;color: #ffffff;-webkit-border-radius: 9px;-moz-border-radius: 9px;border-radius: 9px;background-color: #3a87ad;">Requires authentication</small>
> Example request:

```bash
curl -X POST \
    "http://localhost/teams" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/teams"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST /teams`


<!-- END_f20db0e60a341f12dc3d3b69febcc163 -->


