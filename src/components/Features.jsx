import React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'

const items = [
  { title: 'Theme-Designs', text: 'Viele Demo-Themen: Cosy Café, Retro, Elegant, Rooftop, Family Picnic — wähle eine Stimmung.', icon: <EmojiObjectsIcon fontSize="large" /> },
  { title: 'Demo-Orte & Partner', text: 'Beispielorte (Cafés, Bars, Hotels) in Berlin, Hamburg, München und mehr — partnerschaften simuliert.', icon: <LocationOnIcon fontSize="large" /> },
  { title: 'Pakete & Preise', text: '1‑Stunde, 2‑Stunden und 3‑Stunden Demo‑Pakete mit Beispielpreisen zur Präsentation.', icon: <SupportAgentIcon fontSize="large" /> },
  { title: 'Party‑Organiser Service', text: 'Unser Demo-Service zeigt, wie ein Organiser Dekor, Catering und Koordination übernehmen würde.', icon: <SupportAgentIcon fontSize="large" /> },
  { title: 'Geschenkboxen & Gutscheine', text: 'Wähle fertige Geschenkboxen oder kaufe Geschenk‑Gutscheine direkt über die Demo.', icon: <EmojiObjectsIcon fontSize="large" /> }
]

export default function Features() {
  return (
    <Box className="section">
      <Typography variant="h4" align="center" sx={{ mb: 4 }}>Hauptfunktionen</Typography>
      <Grid container spacing={3}>
        {items.map((it, idx) => (
          <Grid key={idx} item xs={12} md={4}>
            <Paper sx={{ p: 3, height: '100%', transition: 'transform .25s', cursor: 'default' }} className="card-zoom">
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <Box>{it.icon}</Box>
                <Box>
                  <Typography variant="h6">{it.title}</Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>{it.text}</Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
