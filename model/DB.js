const express = require("express");
const mongoose = require('mongoose')
const url = process.env.DB_CONNECT


export  const DB = async( )=> {
    mongoose.connect(url, {useNewUrlParser : true })
    .then(console.log("DB connected"))
    .catch(e => console.log(e))
}