
# 🚀CHAT-APP

A simple **Express.js** server that connects to **MongoDB** and handles user-related routes efficiently.

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

### 1. Clone the repository
```bash
git clone https://github.com/arifahmed00/CHAT-APP.git
```

### 2. Navigate to the project directory
```bash
cd CHAT-APP
```

### 3. Create a `.env` file in the root directory
```env
PORT=3000
MONGO_URI=your_mongodb_connection_string_here
```

> Replace `your_mongodb_connection_string_here` with your actual MongoDB connection string (e.g., from MongoDB Atlas).

### 4. Install dependencies
```bash
npm install mongoose jsonwebtoken express dotenv bcrypt
npm install -D nodemon
```

### 5. Start the development server
```bash
npm run dev
```

The server will start on `http://localhost:4000` (or your specified `PORT`).

---

## 🛠️ Scripts

| Script       | Description                  |
|--------------|------------------------------|
| `npm run dev`| Start server with nodemon (auto-restart on changes) |

---

## 📂 Project Structure

```

File Structure
CHAT-APP
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

```

---

**Ready to push data to your MongoDB collections!** 🚀

postman
| **Module**       | **Endpoint**                   | **Method** | **Body / Params**                                                        | **Auth**    | **Description**                            |
| ---------------- | ------------------------------ | ---------- | ------------------------------------------------------------------------ | ----------- | ------------------------------------------ |
| **User**         | `/api/user/create`             | POST       | `{ "username": "string", "password": "string" }`                         | None        | Create a new user                          |
| **User**         | `/api/user/login`              | POST       | `{ "username": "string", "password": "string" }`                         | None        | Login user, returns access & refresh token |
| **User**         | `/api/user/refresh-token`      | POST       | `{ "refreshToken": "string" }`                                           | None        | Get new access token using refresh token   |
| **User**         | `/api/user/get-users`          | GET        | None                                                                     | Admin token | Get all users (Admin only)                 |
| **User**         | `/api/user/me`                 | GET        | None                                                                     | User token  | Get current logged-in user info            |
| **Conversation** | `/api/conversations/start`     | POST       | `{ "participants": ["user1", "user2"] }`                                 | None        | Start a new conversation                   |
| **Conversation** | `/api/conversations/:username` | GET        | `username` in URL                                                        | None        | Get all conversations for a user           |
| **Message**      | `/api/messages/send`           | POST       | `{ "conversationId": "string", "sender": "username", "text": "string" }` | None        | Send a message in a conversation           |
| **Message**      | `/api/messages/get-message`    | GET        | `{ "conversationId": "string" }`                                         | None        | Get all messages of a conversation         |
