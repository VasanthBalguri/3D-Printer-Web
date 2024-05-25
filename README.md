 # **3D Printer Web**
 
 ## **Introduction**
 
 Project work for Bits Wilp 2021 Digital Manufacturing Course
 
 ## **Project structure**
 
 1. 3d-printer-web-frontend has source code for webapplication written in React
 2. 3d-printer-web-backend has source code for nodejs backend service
 3. 3d-printer-web-microservices contains list of microservices
    1. slicing-serevice is to slice the stl file, written in python runs on flask web server
    2. iiot-server to connect to 3D printer, written in python runs on flask web server

## **3d-printer-web-frontend**

Read README.md inside 3d-printer-web-frontend

## **3d-printer-web-backend**

> node app.js

## **3d-printer-web-microservices**

iiot-server -> requires printcore libraries
slicing-service -> requires sic3r-python bindings

For above both run
> python3 client.py

### **Create python venv**
> pip install virtualenv -> install venv
> virtualenv /path/to/folder -> create venv
> source /path/to/folder/bin/activate -> use venv

> to exit venv -> exit venv
