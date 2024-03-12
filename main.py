from fastapi import FastAPI, Query, Depends, Path
from fastapi.staticfiles import StaticFiles
# from fastapi.responses import HTMLResponse
# from fastapi.templating import Jinja2Templates

# from fastapi.middleware.cors import CORSMiddleware

# from bs4 import BeautifulSoup
# import markdown
# import os, jinja2, json

# templates = Jinja2Templates(directory="templates")

app = FastAPI()

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["http://localhost:5173","http://localhost:5174"],
#     # allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

app.mount("/", StaticFiles(directory='./'), name="testing_files")

