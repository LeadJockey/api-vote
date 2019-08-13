# mma.singers

## Base URL

> - protocol : http
> - ip : 172.28.31.239
> - port : 3000
> - domain : http://172.28.31.239:3000
> - root : api
> - version : v1
> - path : singers
> - format : {domain}/{root}/{version}/{path}

## Request Types

### get singers

- method : GET
- request : http://172.28.31.239:3000/api/v1/singers
- response

```json
[
  {
    "id": "1f1c7492-45b4-4d44-b0e3-91827e4b7df3",
    "careatedAt": "Tue Aug 13 2019 10:40:45",
    "updatedAt": null,
    "hit": 0,
    "name": "AYLER",
    "img": "https://cdnimg.melon.co.kr/cm...",
    "song": "LYL (Live Your Life)"
  },
  {...},
  {...},
  {...}
]
```

### get singer

- method : GET
- requst : http://172.28.31.239:3000/api/v1/singers/{id}
- response

```json
{
  "id": "1f1c7492-45b4-4d44-b0e3-91827e4b7df3",
  "careatedAt": "Tue Aug 13 2019 10:40:45",
  "updatedAt": null,
  "hit": 0,
  "name": "AYLER",
  "img": "https://cdnimg.melon.co.kr/cm...",
  "song": "LYL (Live Your Life)"
}
```

### create singer

- method : POST
- request : http://172.28.31.239:3000/api/v1/singers
- request-body :

```json
{
  "name": "AYLER",
  "img": "https://cdnimg.melon.co.kr/cm...",
  "song": "LYL (Live Your Life)"
}
```

- response

```json
{
  "msg": "create success"
}
```

### update singer

- method : PATCH
- request : http://172.28.31.239:3000/api/v1/singers/{id}
- request-body :

```json
{
  "name": "AYLER",
  "img": "https://cdnimg.melon.co.kr/cm...",
  "song": "LYL (Live Your Life)"
}
```

- response

```json
{
  "msg": "update success"
}
```

### delete singer

- method : DELETE
- request : http://172.28.31.239:3000/api/v1/singers/{id}
- response

```json
{
  "msg": "delete success"
}
```

## Model Specs

### id

> - desc : 가수 아이디
> - type : String
> - required : true
> - default : 자동생성 uuid4
> - format : uuid4

### createdAt

> - desc : 생성 날짜
> - type : String (Date format)
> - required : true
> - default : 자동생성 Date format
> - format : Date format

### updatedAt

> - desc : 마지막 수정 날짜
> - type : String (Date format)
> - required : false
> - default : null / 업데이트시 자동 업데이트 Date format
> - format : Date format

### hit

> - desc : 투표 점수
> - type : Number (int: 정수)
> - required : false
> - default : 0
> - format : Number (int: 정수)

### name

> - desc : 가수 이름
> - type : String
> - required : false
> - default : ""
> - format : String

### img

> - desc : 가수/노래 사진
> - type : String (img src)
> - required : false
> - default : ""
> - format : String

### song

> - desc : 노래 이름
> - type : String
> - required : false
> - default : ""
> - format : String
