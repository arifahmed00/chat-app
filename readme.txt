
MODULER SYSTEM

arif
├─ server.js
├─ .env
├─ config/
│  └─ db.js
├─ models/
│  ├─ User.js
│  ├─ Conversation.js
│  └─ Message.js
├─ controllers/
│  ├─ userController.js
│  ├─ conversationController.js
│  └─ messageController.js
├─ routes/
│  ├─ users.js
│  ├─ conversations.js
│  └─ messages.js




                            CHAT MECHANISM 

| # | Action             | Method | URL                                                   | Headers                         | Body (JSON)                                                      | Notes                                                  |
| - | ------------------ | ------ | ----------------------------------------------------- | ------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------ |
| 1 | Register User      | POST   | `http://localhost:4000/api/users/register`            | —                               | `{ "username": "alice", "password": "123456", "role": "user" }`  | Role can be `"user"` or `"admin"`                      |
| 2 | Login              | POST   | `http://localhost:4000/api/users/login`               | —                               | `{ "username": "alice", "password": "123456" }`                  | Response includes JWT token                            |
| 3 | List Users         | GET    | `http://localhost:4000/api/users`                     | `Authorization: Bearer <token>` | —                                                                | Only accessible by admin users                         |
| 4 | Start Conversation | POST   | `http://localhost:4000/api/conversations/start`       | `Authorization: Bearer <token>` | `{ "participants": ["alice", "bob"] }`                           | Creates or returns existing conversation               |
| 5 | Send Message       | POST   | `http://localhost:4000/api/messages/send`             | `Authorization: Bearer <token>` | `{ "sender": "alice", "receiver": "bob", "text": "Hello Bob!" }` | Creates a message in the conversation                  |
| 6 | Get Messages       | GET    | `http://localhost:4000/api/messages/<conversationId>` | `Authorization: Bearer <token>` | —                                                                | Replace `<conversationId>` with actual conversation ID |
