# Subscription REST app
A basic REST app that can store and return subscriptions, built using 
node Express.

## Starting up the server

Make sure you have node Express installed:

```
npm install express
```

Run the service on port 3000:

```
node app.js
```

Insert a subscription:

```
curl -X POST http://localhost:3000/subscription \
--data-binary "@test-data/netflix-sub.json" -H "Content-Type: application/json"
```

Retrieve a subscription by id:

```
curl http://localhost:3000/subscription/1
```

Retrieve all subscriptions:

```
curl http://localhost:3000/subscription
```
