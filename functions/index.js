require('dotenv').config();
const functions = require("firebase-functions");
const plivo = require('plivo')
const client = new plivo.Client(process.env.AUTH_ID, process.env.AUTH_TOKEN)
exports.sendInvite = functions.firestore.document('invites/{phoneNumber}').onCreate(async (doc) => {
 const from = "+1 205-927-7405"
 const to = doc.data().phoneNumber;
 const text = "You are one of the cool kids now"

 client.messages.create(from, to, text)
})
