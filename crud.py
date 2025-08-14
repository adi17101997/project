from app.models import User, Note
from app.database import database
from bson import ObjectId
from datetime import datetime

async def create_user(user: User):
    user_dict = user.dict()
    user_dict['hashed_password'] = user_dict.pop('password')
    await database.users.insert_one(user_dict)

async def get_user(user_email: str):
    user = await database.users.find_one({"user_email": user_email})
    return User(**user) if user else None

async def create_note(note: Note):
    note_dict = note.dict()
    await database.notes.insert_one(note_dict)

async def get_notes():
    notes = await database.notes.find().to_list(length=None)
    return [Note(**note) for note in notes]

async def update_note(note_id: str, note: Note):
    await database.notes.update_one({"note_id": note_id}, {"$set": note.dict()})

async def delete_note(note_id: str):
    await database.notes.delete_one({"note_id": note_id})
