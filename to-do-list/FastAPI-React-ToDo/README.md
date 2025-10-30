# Fullstack FastAPI, React, Tailwind & SQLlite ToDO

## Table of content

* [General info](#general-info)
* [Quick look](#quick-look)
    + [Gif presentation](#gif-presentation)
    + [Quick look at the React component structure](#quick-look-at-the-react-component-structure)
    + [Quick look at the endpoints scheme](#quick-look-at-the-endpoints-scheme)
* [Technologies](#technologies)
* [Setup](#setup)
    + [Backend](#backend)
    + [Frontend](#frontend)
* [The project status](#the-project-status)
* [Detailed information](#detailed-information)
    + [Usage](#usage)
    + [Technical details](#technical-details)

## General info

This project is a ToDo application with RESTful asynchronous CRUD based on FastAPI endpoints and handling of HTTP requests via React hooks. The aim of the project is to learn new technologies (mainly FastAPI and React) and gain a better understanding of the frontend from the backend developer's side

## Quick look

### Gif presentation

![Short gif how ToDo works](https://i.imgur.com/sfKfdOd.gif)

### Quick look at the React components structure

![Components schema](https://i.imgur.com/cR0Sj2v.jpg)

### Quick look at the endpoints scheme

![Endpoint schema](https://i.imgur.com/nn0O8hA.png)

## Technologies

- black==22.12.0 
- fastapi==0.88.0 
- Python==3.10.9 
- react-router-dom@6.6.1 
- react@18.2.0 
- SQLAlchemy==1.4.46 
- tailwindcss@3.2.4

## Setup

### Backend

To run setup first create virtual environment

    Windows

    > python -m venv venv

    Linux

    > python3 -m venv venv

Then, after your venv folder is created open it by

    Windows

    > venv\scripts\activate

    Linux

    > source venv/bin/activate

And then install requirements included in file requirements.txt

> pip install -r requirements.txt

After instalation complete you can run server with project. It should be port 4000 (look at the [Technical details](#technical-details))

> uvicorn main:app --host localhost --port 4000 --reload

Now you have to create a user (look at the [Technical details](#technical-details))

### Frontend

You just need install npm and React Router

On Linux:

> sudo apt install nodejs

> sudo apt install npm

> npm install react-router-dom@6

and run in /frontend

> npm start

## The project status 

- [x] CRUD actions
- [ ] Login system
- [ ] Statistics panel 

## Detailed information

### Usage

At the moment, ToDo only consists of the homepage. The form navbar consists of a single input, which has no additional button. To create a task, simply type the content and click Enter. Tasks are arranged in sequence according to the date of creation. Tasks can be edited like form fields by clicking on the content. You can also mark them as completed or not, and delete them from the database. Deselecting a tape makes it impossible to edit it

### Technical details

At the moment, tasks are created for a hardcoded user with id 1. If such a user doesn't exist in the database, one must be created:

    1. Go to localhost:4000/docs
    2. Expand endpoint POST /users/
    3. Click "Try it out"
    4. Send Json {"email": "random_email@xyz.com", "password": "random_password"}

The backend allows endpoints to operate for localhost and port 3000 (this is React's default port). The *origins* array in the *main.py* file is responsible for this. The frontend, on the other hand, only allows the localhost address for port 4000 (see the *proxy* value in *package.json*). Attempting to connect to any other address will result in a CORS error

You can handle endpoints at the address:

> localhost:4000/docs

or just see:

> localhost:4000/redoc
