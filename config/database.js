// setting up mongoose library to interact with our MongoDB database
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {
	useNewUrlParser: true,
	// useCreateIndex: true, (Deprcated)
	useUnifiedTopology: true,
	// useFindAndModify: false, (Deprcated)
});

// connecting to our database
const db = mongoose.connection;

// confirming database connection
db.on('connected', function () {
	console.log(`Connected to ${db.name} at ${db.host}: ${db.port}`);
});
