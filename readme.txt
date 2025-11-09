
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

