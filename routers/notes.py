from fastapi import APIRouter, Depends
from app.models import Note
from app.crud import create_note, get_notes, update_note, delete_note

router = APIRouter()

@router.post("/notes")
async def add_note(note: Note):
    await create_note(note)
    return {"message": "Note added successfully"}

@router.get("/notes")
async def read_notes():
    return await get_notes()

@router.put("/notes/{note_id}")
async def edit_note(note_id: str, note: Note):
    await update_note(note_id, note)
    return {"message": "Note updated successfully"}

@router.delete("/notes/{note_id}")
async def remove_note(note_id: str):
    await delete_note(note_id)
    return {"message": "Note deleted successfully"}
