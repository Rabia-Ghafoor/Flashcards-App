'use client'

import { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import {db} from '@/firebase'
import {Container,CardActionArea,TextField,Button,Typography,Dialog,DialogTitle,DialogContent,DialogContentText,DialogActions,Grid,Card,CardContent,AppBar,Toolbar,
  Box,
  CircularProgress,
} from '@mui/material'
import { collection, getDoc, addDoc, deleteDoc, updateDoc, doc, writeBatch, setDoc } from "firebase/firestore";

export default function Flashcard() {
    const { user } = useUser();
    const [flashcards, setFlashcards] = useState([])

    useEffect(() => {
        async function getFlashcards() {
          if (!user) return
          const docRef = doc(collection(db, 'users'), user.id)
          const docSnap = await getDoc(docRef)
          if (docSnap.exists()) {
            const collections = docSnap.data().flashcards || []
            setFlashcards(collections)
          } else {
            await setDoc(docRef, { flashcards: [] })
          }
        }
        getFlashcards()
      }, [user])

      const handleCardClick = (id) => {
        router.push(`/flashcard?id=${id}`)
      }

      return (
        <Container maxWidth="md">
          <Grid container spacing={3} sx={{ mt: 4 }}>
            {flashcards.map((flashcard, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <CardActionArea onClick={() => handleCardClick(flashcard.name)}>
                    <CardContent>
                      <Typography variant="h5" component="div">
                        {flashcard.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      )
  
  }