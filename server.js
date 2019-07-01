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

	if (req.url === '/') {
		responseCode = 200;
		content = fs.readFileSync('./index.html');
	}

	res.writeHead(responseCode, {
		'content-type': 'text/html;charset=utf-8',
	});

	res.write(content);
	res.end();
});
	
app.listen(port);

https.createServer(options, app);