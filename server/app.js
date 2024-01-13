const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();

const indexRouter = require('./src/routes/index');
const loginRouter = require('./src/routes/login.routes');
const signupRouter = require('./src/routes/signup.routes');
const securityRouter = require('./src/routes/security.routes');
const userRouter = require('./src/routes/user.routes');

const app = express();

app.set('trust proxy', 1) // TODO: Find out if this is needed
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/v1/', indexRouter);
app.use('/v1/login', loginRouter);
app.use('/v1/signup', signupRouter);
app.use('/v1/security', securityRouter);
app.use('/v1/users', userRouter);

module.exports = app;
