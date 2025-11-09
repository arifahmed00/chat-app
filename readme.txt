src/
    config/
        db.js
        envConfig.js
    middlewere/
        auth.js
    module/
        conversation/
            conversation.Controller.js
            conversation.model.js 
            conversation.route.js
        message/
            message.Controller.js
            message.model.js
            message.route.js
        user/
            user.Controller.js
            user.model.js
            user.route.js
.env
app.js
server.js


npm init -y 
npm i mongoose express jsonwebtoken bcrypt dotenv
npm i -D nodemon



| Module / Endpoint               | Method | Body / Params                                                     | Headers                               | Protected? | Notes                                                     |
| ------------------------------- | ------ | ----------------------------------------------------------------- | ------------------------------------- | ---------- | --------------------------------------------------------- |
| **User**                        |        |                                                                   |                                       |            |                                                           |
| `/api/users/register`           | POST   | `{ "username": "prottoy", "password": "1234", "role": "user" }`   | None                                  | ❌         | Registers new user                                        |
| `/api/users/login`              | POST   | `{ "username": "prottoy", "password": "1234" }`                   | None                                  | ❌         | Returns `accessToken` & `refreshToken`                    |
| `/api/users/get-uers`           | GET    | None                                                              | `Authorization: Bearer <accessToken>` | ✔          | Admin only; `chackUserToken + chackAdminToken` middleware |
| **Conversation**                |        |                                                                   |                                       |             |                                                           |
| `/api/conversations/start`      | POST   | `{ "participants": ["user1","user2"] }`                           | Optional auth                         | ❌ / ✔     | Creates or returns conversation                           |
| `/api/conversations/:username`  | GET    | {"username":"name"}                                               | Optional auth                         | ❌ / ✔     | Returns all conversations of username                     |
| **Message**                     |        |                                                                   |                                       |             |                                                           |
| `/api/messages/send`            | POST   | `{ "conversationId": "...", "sender": "user1", "text": "Hello" }` | Optional auth                         | ❌ / ✔     | Sends a message                                           |
| `/api/messages/:conversationId` | GET    | `{"conversationId": "conversationid"}                             | Optional auth                         | ❌ / ✔     | Returns all messages in a conversation                    |









