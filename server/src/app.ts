require('dotenv').config();

// import modules
import express from 'express'
import cors from "cors"
import mongoose from 'mongoose';

// import models
import { coursesModel } from './models/courses.model';
import { partnersModel } from './models/partners.model';
import { projectsModel } from './models/projects.model';
import { tagsModel } from './models/tags.model';
import { usersModel } from './models/users.model';
import { announcementModel } from './models/announcement.model';

// import middlewares

// import routes
import courseRoutes from './routes/courses.routes';
import projectRoutes from './routes/projects.routes';
import tagRoutes from './routes/tags.routes';

// env variables
const PORT = process.env.PORT || 3000;
const MONGODB_URL = process.env.MONGODB_URL as string
const JWT_SECRET = process.env.JWT_SECRET as string

export const STATUS_CODES = {
    OK: 200,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500
}

// initialize app
const app = express();

app.use(cors());
app.use(express.json());
// app.use(LogUserActivity);

try {
    mongoose.connect(MONGODB_URL)
        .then((res) => {
            console.log('MongoDB connection successful');
        })
        .catch((err) => {
            console.log(err)
        })
}
catch (err) {
    console.log("Failed to connect to MongoDB: ", err)
    throw new Error("Failed to connect to MongoDB")
}

const courses = coursesModel
const partners = partnersModel
const projects = projectsModel
const tags = tagsModel
const users = usersModel
const announcements = announcementModel


app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).json({
        msg: "Server up and running! ✅"
    })
})

// custom routes

app.use("/course", courseRoutes)
app.use("/project", projectRoutes)
app.use("/tag", tagRoutes)


// test admin routes
app.get('/admin/announcements', async (req: express.Request, res: express.Response) => {
    const announcements = await announcementModel.find()
    res.status(200).json({
        "type": announcements[0].type,
        "message": announcements[0].message
    })
})
app.post('/admin/announcements', async (req: express.Request, res: express.Response) => {
    const { type, message } = req.body
    const newAnnouncement = new announcementModel({ type, message })
    await newAnnouncement.save()
    res.status(200).json({
        msg: "Announcement created successfully"
    })
})

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
})




// app.get('/courses', (req: express.Request, res: express.Response) => {
//     res.status(200).json({
//         "courses": [
//             {
//                 "course": "cse",
//                 "banner": "https://thumbs.dreamstime.com/b/line-web-concept-computer-science-vector-banner-education-open-path-76284593.jpg"
//             },
//             {
//                 "course": "ece",
//                 "banner": "https://sjbit.edu.in/wp-content/uploads/2021/08/Dept_ECE.jpeg"
//             },
//             {
//                 "course": "mba",
//                 "banner": "https://as2.ftcdn.net/v2/jpg/01/31/80/41/1000_F_131804181_4EVyKKkqKzHuGTjRaObUMOogDewFSvTN.jpg"
//             }
//         ]
//     }
//     );
// })

// app.get('/semesters', (req: express.Request, res: express.Response) => {
//     const course: string = req.query.course as string;

//     if (course === "cse" || course === "ece") {
//         res.status(200).json({
//             "semesters": [
//                 { "sem": "1" },
//                 { "sem": "2" },
//                 { "sem": "3" },
//                 { "sem": "4" },
//                 { "sem": "5" },
//                 { "sem": "6" },
//                 { "sem": "7" },
//                 { "sem": "8" }
//             ]
//         }
//         )
//     }
//     if (course == "mba") {
//         res.status(200).json({
//             "semesters": [
//                 { "sem": "1" },
//                 { "sem": "2" },
//                 { "sem": "3" },
//                 { "sem": "4" }
//             ]
//         }
//         )
//     }
// })

// app.get('/subjects', (req: express.Request, res: express.Response) => {
//     res.status(200).json({
//         "subjects": [
//             { "subject": "Python Programming" },
//             { "sub": "DBMS" },
//             { "sub": "" },
//             { "sub": "Biology" },
//             { "sub": "English" },
//             { "sub": "Hindi" },
//             { "sub": "Sanskrit" },
//             { "sub": "History" }
//         ]
//     }
//     );
// })