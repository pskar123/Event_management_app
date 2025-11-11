import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'

const steps = ['Wähle ein Thema', 'Wähle Paket & Ort', 'Buche & wir organisieren']

export default function HowItWorks() {
  return (
    <Box className="section">
      <Typography variant="h4" align="center" sx={{ mb: 4 }}>So funktioniert's</Typography>
      <Stepper alternativeLabel activeStep={1} sx={{ background: 'transparent' }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box sx={{ mt: 4 }}>
        <Typography variant="body1" align="center" sx={{ maxWidth: 900, mx: 'auto' }}>
          1) Wähle ein Theme (z. B. "Cosy Café", "Rooftop Party" oder "Retro Arcade").
          <br />2) Wähle ein Demo‑Paket (1h / 2h / 3h) und einen Ort aus den vorgeschlagenen Beispielen.
          <br />3) Buche die Demo oder bitte unser Party‑Organiser‑Service um Dekoration & Ablaufplanung.
          <br />Für die Demo sind Preise und Orte beispielhaft; im Live‑Produkt werden Angebote live überprüft und bestätigt.
        </Typography>
      </Box>
    </Box>
  )
}
