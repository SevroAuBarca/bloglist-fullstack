import React from 'react'
import { Button } from '@mantine/core'

export const ButtonToggle = ({ setOpenModal }) => {
  return (
    <Button color={'green'} onClick={() => setOpenModal(true)}>
      Create Blog
    </Button>
  )
}
