const app = express()

app.use(express.json())
app.get('/',(req,res)=>{
app.get('/', (req, res) => {
    res.send("Hello World")
})
})

app.post("/signup",(req,res)=>{
app.post("/signup", (req, res) => {

    // const {name, age} = req.body
    fs.appendFile('./user.txt', JSON.stringify(req.body),(err)=>{
    const newUser = req.body;

    fs.readFile("./users.txt", "utf-8", (err, data) => {
        if (err) console.log(err);

        let users = [];
        if (data) users = JSON.parse(data);

        users.push(newUser);

        fs.writeFile("./users.txt", JSON.stringify(users), (err) => {
            if (err) console.log(err);
            console.log("Successfully written in file");
        });
    });
});

        if(err) console.log(err)
        console.log(`Users successfully written in the file`)
        console.log()
    })
    res.send("Done")
})

app.listen(3000,()=>{
app.listen(3000, () => {
    console.log("Server is running at port 3000")
})
})