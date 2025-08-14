from fastapi import APIRouter, Depends, HTTPException
from app.models import User
from app.crud import create_user, get_user
from app.auth import get_password_hash, create_access_token
from datetime import timedelta

router = APIRouter()

@router.post("/register")
async def register(user: User):
    user.password = get_password_hash(user.password)
    await create_user(user)
    return {"message": "User  created successfully"}

@router.post("/token")
async def login(user: User):
    db_user = await get_user(user.user_email)
    if not db_user or not verify_password(user.password, db_user.hashed_password):
        raise HTTPException(status_code=400, detail="Incorrect username or password")
    
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(data={"sub": db_user.user_email}, expires_delta=access_token_expires)
    return {"access_token": access_token, "token_type": "bearer"}
