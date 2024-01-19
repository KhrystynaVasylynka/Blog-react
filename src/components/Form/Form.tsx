import React, { useState } from 'react'
import { Button, TextField, Typography, Box, Container } from '@mui/material'

type CommentData = {
    fullName: string
    email: string
    comment: string
}

type Errors = {
    fullName: string
    email: string
    comment: string[]
}

type FormProps = {
    addComment: (comment: CommentData) => void
    comments: CommentData[]
}

const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

const Form: React.FC<FormProps> = ({ addComment }) => {
    const [formData, setFormData] = useState<CommentData>({
        fullName: '',
        email: '',
        comment: '',
    })

    const [errors, setErrors] = useState<Errors>({
        fullName: '',
        email: '',
        comment: [],
    })

    const [touched, setTouched] = useState<Record<keyof CommentData, boolean>>({
        fullName: false,
        email: false,
        comment: false,
    })

    const handleChange =
        (field: keyof CommentData) =>
        (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setFormData({ ...formData, [field]: event.target.value })

            if (touched[field]) {
                validateField(field, event.target.value)
            }
        }

    const validateField = (field: keyof CommentData, value: string) => {
        if (field === 'comment' && value.length < 10) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                comment: ['Too short reply, it must be more than 10 symbols'],
            }))
        } else if (field === 'email' && !validateEmail(value)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: 'Use correct email',
            }))
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, [field]: '' }))
        }
    }

    const handleBlur = (field: keyof CommentData) => () => {
        setTouched((prevTouched) => ({ ...prevTouched, [field]: true }))
        validateField(field, formData[field])
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        setTouched({
            fullName: true,
            email: true,
            comment: true,
        })

        const hasErrors = Object.values(errors).some(
            (error) => error.length > 0
        )

        if (!hasErrors) {
            addComment(formData)
            setFormData({
                fullName: '',
                email: '',
                comment: '',
            })
        }
    }

    return (
        <Container
            maxWidth="sm"
            sx={{
                marginBottom: 4,
                backgroundColor: 'rgba(255, 218, 185,0.3)',
                padding: '20px',
            }}
        >
            <Typography variant="h5" sx={{ color: 'brown' }}>
                Leave a comment
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Your name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={formData.fullName}
                    onChange={handleChange('fullName')}
                    onBlur={handleBlur('fullName')}
                    error={touched.fullName && errors.fullName.length > 0}
                    helperText={touched.fullName ? errors.fullName : ''}
                    sx={{ backgroundColor: 'white', marginRight: '10px' }}
                />

                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    type="email"
                    value={formData.email}
                    onChange={handleChange('email')}
                    onBlur={handleBlur('email')}
                    error={touched.email && errors.email.length > 0}
                    helperText={touched.email ? errors.email : ''}
                    sx={{ backgroundColor: 'white' }}
                />

                <TextField
                    label="Message"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={3}
                    margin="normal"
                    value={formData.comment}
                    onChange={handleChange('comment')}
                    onBlur={handleBlur('comment')}
                    error={touched.comment && errors.comment.length > 0}
                    helperText={touched.comment ? errors.comment : ''}
                    sx={{ backgroundColor: 'white' }}
                />

                <Box sx={{ marginTop: 2 }}>
                    <Button
                        type="submit"
                        variant="outlined"
                        sx={{
                            color: 'brown',
                            backgroundColor: 'white',
                            border: '1px solid brown',
                        }}
                    >
                        Post comment
                    </Button>
                </Box>
            </form>
        </Container>
    )
}

export default Form
