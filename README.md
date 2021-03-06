## Setup Instructions:

To setup, clone the repository with `git clone https://github.com/ezl/wodeveryday.com.git` then follow the backend setup instructions and then the frontend setup instructions



### Backend
- Copy the .env file into the `back` folder in the repository
- Create a `local_settings.py` file in the `back` folder and add in this script 
```
DEBUG = True
ALLOWED_HOSTS = []
CORS_ORIGIN_WHITELIST = (
    'http://localhost:3000',
    'http://localhost:8000',
    'http://localhost:8080',
)
```
- Open the `back` folder in the command line
- Ensure that you have python 3.7+ installed by running `python --version`
- Ensure that you have pip installed by running `pip --version`
- From that folder run the command `pip install -r requirements.txt`
- Then from the same folder run the command `python manage.py runserver 127.0.0.1:8000` (or `python3 manage.py runserver 127.0.0.1:8000` if you have an earlier version of python)
- If your system has something else running at the `127.0.0.1:8000` address then you can run it at a different address; however, you will need to change the `BACKEND_URL` variable on the frontends copy of the `.env` file to match that different address
- This should start the development server



### Frontend
- Copy the .env file into the `front` folder in the repository
- Open the `front` folder in the command line
- Ensure that you have yarn installed `yarn --version`
- From that folder run `yarn install` and then  `yarn dev`
- This should start up the website at `http://localhost:3000/`

---

## Deployment Instructions:
- Open up the console and ssh into the server with your username and the address `_______@3.86.178.26`
- After you enter in your passphrase type in `cd /opt/webapps/wodeveryday.com` to navigate to the application `root folder`

## Backend
- To redeploy the backend navigate to its folder from the `root folder` with `cd back`
- To trigger the redeploy simply type `sudo supervisorctl restart be`
- To modify the `.env` file type `vim .env`

## Frontend
- To redeploy the frontend drill drown to it from the `root folder` with `cd front`
- Rebuild the application with `yarn build`
- Once that finishes successfully type in `sudo supervisorctl restart fe` to redeploy
- To modify the `.env` file type `vim .env.save`