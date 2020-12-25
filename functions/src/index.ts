import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
//Set up Express server on a cloud Function
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51I1m2jHKRERovIHLVBShU2MnY0jZSNG8u9MrxLAUBA3NIiLE6nG8XVPfNYIKWBRKCphvl9qCprtn8A8BW9VmFeQ9006rtwFNld');
//API


//App Config
const app = express();
//MidleWares
app.use(cors({origin: true}));
app.use(express.json());

//API Routes
app.get('/', (request: any, response: any) => response.status(200).send(
    app._router.stack
));


app.get("/hello", (request: any, response: any) => response.status(200).send('What Up Hector'));
app.post('/payments/create', async (request: any, response: any) => {
    //stripe sheit
    //Query Params
    const total = request.query.total;
    console.log('payment Request receviebem! fro this', total);

    //generating user Secret and payment intent
    const paymentIntent = await stripe.paymentIntens.create({
        amount: total, //subunits currency
        currency: "usd"//currencu
    });
    //OK -- Created and send clientSecret
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

//Listen Command
//this cloud functions runs the express server! or object function etc
exports.api =  functions.https.onRequest(app);