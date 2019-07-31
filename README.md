# nodejs-with-docker-working-code-sample


Run the code using below commands


docker build -t adnapster/node-web-app .


docker run -p 49160:8080 --name node-web-app -d adnapster/node-web-app


To Access the Application


docker inspect node-web-app

		Copy "Networks": ----->> IPAddress": 
		And Hit http://ipaddress:8080
