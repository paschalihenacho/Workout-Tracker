const express = require('express');
const morgan = require('morgan');
const path = require('path');
const Workout = require('./models/workout');

const PORT = process.env.PORT || 3000;

const app = express();