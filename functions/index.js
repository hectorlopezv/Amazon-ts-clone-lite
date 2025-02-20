const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51I1m2jHKRERovIHLVBShU2MnY0jZSNG8u9MrxLAUBA3NIiLE6nG8XVPfNYIKWBRKCphvl9qCprtn8A8BW9VmFeQ9006rtwFNld"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({origin: true}));
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//  });
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello baby"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);