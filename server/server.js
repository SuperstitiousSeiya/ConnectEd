const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

const authenticateToken = require('./src/middleware/authMiddleware');
const User = require("./src/controllers/user.controller");

const announcementsRoutes = require('./src/routes/announcement.routes');
const eventsRoutes = require('./src/routes/event.routes');
const newsRoutes = require('./src/routes/news.routes');
const usersRoutes = require('./src/routes/user.routes');
const studentsRoutes = require('./src/routes/student.routes');
const studentContactInfoRoutes = require('./src/routes/student_contact_info.routes');
const studentEducationalBackgroundRoutes = require('./src/routes/student_educational_background.routes');
const studentPersonalInfoRoutes = require('./src/routes/student_personal_info.routes');
const courseRoutes = require('./src/routes/course.routes')

dotenv.config();

const secretKey = process.env.JWT_SECRET;

if (!secretKey) {
  console.error('JWT_SECRET is not defined in the environment variables.');
  process.exit(1); // Exit the application or handle the error appropriately
}

// Middlewares
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use((req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (authHeader) {
    const accessToken = authHeader.split(' ')[1];
    req.accessToken = accessToken;
  }
  next();
});



// Routes
app.use("/api/v1/announcements", announcementsRoutes);
app.use("/api/v1/events", eventsRoutes);
app.use("/api/v1/news", newsRoutes);
app.use("/api/v1/users", usersRoutes);
app.use("/api/v1/students", studentsRoutes);
app.use("/api/v1/student_contact_info", authenticateToken, studentContactInfoRoutes);
app.use("/api/v1/student_educational_background", authenticateToken, studentEducationalBackgroundRoutes);
app.use("/api/v1/student_personal_info", authenticateToken, studentPersonalInfoRoutes);
app.use("/api/v1/courses", authenticateToken, courseRoutes);
app.post("/api/v1/login", User.login);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
