import React from 'react'
import Fab from '@mui/material/Fab'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Zoom from '@mui/material/Zoom'
import useScrollTrigger from '@mui/material/useScrollTrigger'

export default function ScrollTopFab() {
  const trigger = useScrollTrigger({ threshold: 300 })

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Zoom in={trigger}>
      <Fab color="secondary" onClick={handleClick} aria-label="scroll back to top" sx={{ position: 'fixed', bottom: 24, right: 24 }}>
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  )
}
