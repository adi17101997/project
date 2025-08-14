from fastapi import FastAPI
from app.routers import user, notes

app = FastAPI()

app.include_router(user.router)
app.include_router(notes.router)

@app.get("/")
async def root():
    return {"message": "Welcome to the Notes API"}
