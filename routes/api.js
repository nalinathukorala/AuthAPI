const express = require("express");
const router = express.Router();
const User = require("../models/user");
const jwt = require('jsonwebtoken');

const mongoose = require("mongoose");
const db = "mongodb://nalin:1993nalin@ds239055.mlab.com:39055/eventsdb";

mongoose.connect(db, err => {
	if (err) {
		console.log("Error!" + err);
	} else {
		console.log("Connected");
	}
});

router.get("/", (req, res) => {
	res.send("From API routes");
});

router.post("/register", (req, res) => {
	let userData = req.body;
	let user = new User(userData);
	user.save((error, registerdUser) => {
		if (error) {
			console.log(error);
		} else {
            let payload = { subject: registerdUser._id }
            let token = jwt.sign(payload, 'secretKey')
			res.status(200).send({token});
		}
	});
});

router.post("/login", (req, res) => {
	let userData = req.body;

	User.findOne({
			email: userData.email
		},
		(error, user) => {
			if (error) {
				console.log(error);
			} else {
				if (!user) {
					res.status(401).send("Invalied email");
				} else if (user.password != userData.password) {
					res.status(401).send("Invalid password");
				} else {
                    let payload = { subject: user._id }
                    let token = jwt.sign(payload, 'secretKey')
					res.status(200).send({token});
				}
			}
		}
	);
});

router.get('/events', (req,res) => {
    let events = [
        {
            "_id":"1",
            "name":"Auto Expo",
            "description":"lorem",
            "date":"2012-04-23"
        },
        {
            "_id":"2",
            "name":"Auto Expo",
            "description":"lorem",
            "date":"2012-04-23"
        },
        {
            "_id":"3",
            "name":"Auto Expo",
            "description":"lorem",
            "date":"2012-04-23"
        },
        {
            "_id":"4",
            "name":"Auto Expo",
            "description":"lorem",
            "date":"2012-04-23"
        },
        {
            "_id":"5",
            "name":"Auto Expo",
            "description":"lorem",
            "date":"2012-04-23"
        }
    ]
    res.json(events)
})

router.get('/special', (req,res) => {
    let events = [
        {
            "_id":"1",
            "name":"Auto Expo",
            "description":"lorem",
            "date":"2012-04-23"
        },
        {
            "_id":"2",
            "name":"Auto Expo",
            "description":"lorem",
            "date":"2012-04-23"
        },
        {
            "_id":"3",
            "name":"Auto Expo",
            "description":"lorem",
            "date":"2012-04-23"
        }
    ]
    res.json(events)
})

module.exports = router;