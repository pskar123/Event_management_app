import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

export default function Hero() {
  return (
    <Box className="hero-bg section" sx={{ color: 'common.white' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            {/* White card wrapper for better readability; updated to showcase birthday celebration demo content */}
            <div className="hero-card-wrapper">
              <Typography variant="h2" sx={{ fontWeight: 800, mb: 1 }}>
                <span className="hero-highlight">Birthday Celebrations & Events — Demo</span>
              </Typography>

              <Typography variant="h6" sx={{ mb: 1 }}>
                Celebrate in style across Germany — choose a theme, pick a place, and book a package. We show demo venues and handle the planning.
              </Typography>

              <Typography variant="body1" sx={{ mt: 1 }}>
                What you can try on this demo:
                <br />• Themes: Cosy Café, Rooftop Party, Retro Arcade, Elegant Dinner, Family Picnic
                <br />• Demo places: Café Himmel (Berlin), Bar Sonnenschein (Hamburg), Hotel Alte Mühle (Munich)
                <br />• Packages: 1‑hour, 2‑hour, 3‑hour demo packages with fixed example prices
                <br />• Services: Party organiser & décor, gift boxes & celebration bundles
              </Typography>

              <Typography variant="caption" sx={{ display: 'block', mt: 2, color: 'text.secondary' }}>
                All items on this page are demo content to showcase upcoming features of the business.
              </Typography>
            </div>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button variant="contained" size="large">Vorschau anzeigen</Button>
              <Button variant="outlined" size="large">Mehr erfahren</Button>
            </Box>

            <Card sx={{ mt: 4, maxWidth: 520, background: 'rgba(255,255,255,0.92)', color: 'text.primary' }}>
              <CardContent>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Was kommt</Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  • KI-gestützte Ortsempfehlungen nach Stimmung und Animation.
                  <br />• Themenplanung & Dekorations‑Konzept per Team‑Service.
                  <br />• Partnerschaften mit lokalen Locations in Ihrer Stadt.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={5}>
            <Box sx={{ borderRadius: 3, overflow: 'hidden', boxShadow: 6 }}>
              <img src="https://images.unsplash.com/photo-1506806732259-39c2d0268443?q=80&w=1200&auto=format&fit=crop" alt="german cafe" style={{ width: '100%', display: 'block' }} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
