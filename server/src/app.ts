require('dotenv').config();
import express from 'express'
import cors from "cors"



const app = express();
app.use(cors());
app.use(express.json());

app.get('/courses', (req: express.Request, res: express.Response) => {
    res.status(200).json({
        "courses": [
            {
                "course": "cse",
                "banner": "https://thumbs.dreamstime.com/b/line-web-concept-computer-science-vector-banner-education-open-path-76284593.jpg"
            },
            {
                "course": "ece",
                "banner": "https://sjbit.edu.in/wp-content/uploads/2021/08/Dept_ECE.jpeg"
            },
            {
                "course": "mba",
                "banner": "https://as2.ftcdn.net/v2/jpg/01/31/80/41/1000_F_131804181_4EVyKKkqKzHuGTjRaObUMOogDewFSvTN.jpg"
            }
        ]
    }
    );
})

app.get('/semesters', (req: express.Request, res: express.Response) => {
    const course: string = req.query.course as string;

    if (course === "cse" || course === "ece") {
        res.status(200).json({
            "semesters": [
                { "sem": "1" },
                { "sem": "2" },
                { "sem": "3" },
                { "sem": "4" },
                { "sem": "5" },
                { "sem": "6" },
                { "sem": "7" },
                { "sem": "8" }
            ]
        }
        )
    }
    if (course == "mba") {
        res.status(200).json({
            "semesters": [
                { "sem": "1" },
                { "sem": "2" },
                { "sem": "3" },
                { "sem": "4" }
            ]
        }
        )
    }
})

app.get('/subjects', (req: express.Request, res: express.Response) => {
    res.status(200).json({
        "subjects": [
            { "subject": "Python Programming" },
            { "sub": "DBMS" },
            { "sub": "" },
            { "sub": "Biology" },
            { "sub": "English" },
            { "sub": "Hindi" },
            { "sub": "Sanskrit" },
            { "sub": "History" }
        ]
    }
    );
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})