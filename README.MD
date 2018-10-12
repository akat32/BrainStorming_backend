## API Document

* POST /issue : Get Room's code ( 룸 코드 발급받기 )

> Params

> Response

    HTTP 200 : { code : Room's code }

    HTTP 500 : { message : "ERR!" }

* POST /abrogate : Abrogate Room ( 룸 폐기하기 )

> Params

    code : Room's code ( 룸 코드 )

> Response

    HTTP 200 : { message : "success!" }

    HTTP 500 : { message : "ERR!" }

* POST /idea : Push Idea ( 아이디어 넣기 )

> Params

    idea : Your Idea ( [String] )

> Response

    HTTP 200 : { message : "success!" }

    HTTP 500 : { message : "ERR!" }

* POST /delIdea : Pull Idea ( 아이디어 빼기 )

> Params

    idea : Your Idea ( [String] )

> Response

    HTTP 200 : { message : "success!" }

    HTTP 500 : { message : "ERR!" }


* POST /getIdea : Get Idea ( 아이디어 리스트 불러오기 )

> Params

    code : Room's code

> Response

    HTTP 200 : { list : Idea List } ( 배열 반환 )

    HTTP 404 : { message : "Rooms Not Found!" }

## SOCKET EVENT

* 'join room' : 방 들어가기.

> Params

    name : User's name ( 닉네임 )

    room : Room's code ( 룸 코드 )
