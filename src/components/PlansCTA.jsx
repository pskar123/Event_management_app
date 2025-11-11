import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'

export default function PlansCTA() {
  return (
    <Box className="section" sx={{ mb: 6 }}>
      <Typography variant="h4" align="center" sx={{ mb: 2 }}>Demo‑Pakete & Angebote</Typography>
      <Typography align="center" variant="body1" sx={{ mb: 3 }}>Wähle ein Demo‑Paket, sieh Beispielpreise und probiere die Buchungs‑Experience.</Typography>

      <Grid container justifyContent="center" spacing={3}>
        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 3, textAlign: 'center' }} className="package-card">
            <Typography variant="h6">1‑Hour Demo</Typography>
            <Typography variant="h4" sx={{ my: 1 }}>€49</Typography>
            <Typography variant="body2">Quick celebration — venue selection and basic setup (demo).</Typography>
            <Button variant="contained" sx={{ mt: 2 }}>Book 1h</Button>
          </Paper>
        </Grid>

        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 3, textAlign: 'center', border: '2px solid var(--accent)' }} className="package-card">
            <Typography variant="h6">2‑Hour Demo</Typography>
            <Typography variant="h4" sx={{ my: 1 }}>€89</Typography>
            <Typography variant="body2">Popular — fuller experience with decorations and photo moment (demo).</Typography>
            <Button variant="contained" sx={{ mt: 2 }}>Book 2h</Button>
          </Paper>
        </Grid>

        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 3, textAlign: 'center' }} className="package-card">
            <Typography variant="h6">3‑Hour Demo</Typography>
            <Typography variant="h4" sx={{ my: 1 }}>€129</Typography>
            <Typography variant="body2">Full organiser demo — decor, coordination and extended time.</Typography>
            <Button variant="contained" sx={{ mt: 2 }}>Book 3h</Button>
          </Paper>
        </Grid>
      </Grid>

      <Box sx={{ mt: 4, display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Paper sx={{ p: 2, minWidth: 260 }}>
          <Typography variant="subtitle1">Party Organiser Service</Typography>
          <Typography variant="body2">Our partner organisers will handle decor, vendors and on‑site coordination to bring your theme to life.</Typography>
          <Button sx={{ mt: 2 }} variant="outlined">Request Organiser</Button>
        </Paper>

        <Paper sx={{ p: 2, minWidth: 260 }}>
          <Typography variant="subtitle1">Gift Box & Gift Card</Typography>
          <Typography variant="body2">Choose a celebration gift box or buy a gift card to give the experience to someone else.</Typography>
          <Button sx={{ mt: 2 }} variant="outlined">Buy Gift Card</Button>
        </Paper>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Paper sx={{ p: 2, mt: 2 }}>
          <Typography variant="caption">Note: Prices and venues are for demo purposes only and will be confirmed in the live product.</Typography>
        </Paper>
      </Box>
    </Box>
  )
}
