"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"

interface EditableTextProps {
  defaultText: string
  className?: string
  isEditing?: boolean
  multiline?: boolean
}

export default function EditableText({ defaultText, className = "", isEditing = false, multiline = false }: EditableTextProps) {
  const [text, setText] = useState(defaultText)
  const [editedText, setEditedText] = useState(defaultText)
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null)

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isEditing])

  useEffect(() => {
    if (!isEditing) {
      setText(editedText)
    }
  }, [isEditing, editedText])

  if (isEditing) {
    if (multiline) {
      return (
        <Textarea
          ref={inputRef as React.RefObject<HTMLTextAreaElement>}
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          className={`${className} min-h-[100px] p-2 border-pink-300 focus:border-pink-500 focus:ring-pink-500`}
        />
      )
    }

    return (
      <Input
        ref={inputRef as React.RefObject<HTMLInputElement>}
        type="text"
        value={editedText}
        onChange={(e) => setEditedText(e.target.value)}
        className={`${className} p-2 border-pink-300 focus:border-pink-500 focus:ring-pink-500`}
      />
    )
  }

  return <div className={className}>{text}</div>
}
