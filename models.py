from pydantic import BaseModel
from bson import ObjectId
from datetime import datetime
from typing import Optional

class User(BaseModel):
    user_id: str
    user_name: str
    user_email: str
    password: str
    last_update: datetime
    create_on: datetime

class Note(BaseModel):
    note_id: str
    note_title: str
    note_content: str
    last_update: datetime
    created_on: datetime

class UserInDB(User):
    hashed_password: sakashyap2609
