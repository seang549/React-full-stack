import express from 'express';
import pg from 'pg';
const {Pool} = pg;
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()

const dbString = process.env.DATABASE_URL
const pool = new Pool ({
    connectionString: dbString,
});

const app = express();
app.use(express.json());

app.use(cors({
    origin: ['http://localhost:5173', 'https://react-fullstack-mvp.onrender.com', 'https://endearing-horse-fba3c4.netlify.app' ]
}))

app.get('/song_tb', async(req, res) => {
    try{
        const result = await pool.query('SELECT * FROM song_tb');
        res.status(200).json(result.rows)
    }
    catch(err) {
        console.error(err.message)
    }
})

app.get('/song_tb/:id', async(req, res) => {
    try{
        let {id} = req.params;
        let result = await pool.query('SELECT * FROM song_tb WHERE id = $1', [id])
        if(result.rowCount === 0) {
            res.type("text/plain").send('Movie not found')
        }
        res.status(200).json(result.rows[0])
    }
    catch(err) {
        console.error(err.message)
    }
})

app.post('/song_tb', async(req, res) => {
    try{
        console.log(req.body)
        let {song, author} = req.body;
        let result = await pool.query('INSERT INTO song_tb (song, author) VALUES ($1, $2) RETURNING *', [song, author])
        res.status(201).json(result.rows[0])
    }
    catch(err) {
        console.error(err.message)
    }
})

app.put('/song_tb/:id', async(req, res) => {
    try{
        let {id} = req.params;
        let {song, author} = req.body;

        let result = await pool.query('SELECT * FROM song_tb WHERE id = $1', [id])
        if(result.rowCount === 0) {
            res.type('text/plain').send('Movie not found')
        }
        let currentSong = result.rows[0]
        let updatedSong = {
            songTitle: song || currentSong.song,
            songAuthor: song || currentSong.author
        }
        await pool.query('UPDATE song_tb SET song = $1, author = $2 WHERE id = $3 RETURNING *', [updatedSong.songTitle, updatedSong.songAuthor, id])
        res.status(201).json(updatedSong)
    }
    catch(err) {
        console.error(err.message)
    }
})

app.delete('/song_tb/:id', async(req, res) => {
    try{
        let {id} = req.params;
        let result = await pool.query('DELETE FROM song_tb WHERE id = $1 RETURNING *', [id])
        res.status(200).json(result.rows[0])
    }
    catch(err) {
        console.error(err.message)
    }
})


app.listen(process.env.PORT, () => {
    console.log(`Working on... ${process.env.PORT}`)
})