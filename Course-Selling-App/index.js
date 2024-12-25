const { express,
    bodyParser,
    app,
    Router,
    jwtSecret,
    port } = require("./config");

const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

app.use(bodyParser.json());
app.use('/admin', adminRouter);
app.use('/user', userRouter);

app.listen(port, () => {
    console.log("Server is running on port 3000");
});

