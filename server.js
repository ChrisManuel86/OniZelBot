const https = require('https');
const fs = require('fs');
const port = 8080;

const options = {
	key: fs.readFileSync('key here'),
	cert: fs.readFileSync('cert here')
};

const app = express();

app.use((req, res) => {
	let responseCode = 404;
	let content = '404 Error';

	switch (req.url) {
		case '/':
			responseCode = 200;
			content = fs.readFileSync('./index.html');
			break;
		case '/authenticate.js':
			responseCode = 200;
			content = fs.readFileSync('./authenticate.js');
			break;
		default:
			break;
	}

	res.writeHead(responseCode, {
		'content-type': 'text/html;charset=utf-8',
	});

	res.write(content);
	res.end();
});
	
app.listen(port);

https.createServer(options, app);