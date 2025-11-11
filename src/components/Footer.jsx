import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

export default function Footer() {
  return (
    <Box sx={{ background: '#0f1724', color: '#e6eef8', mt: 8, py: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 800 }}>Celebrate.DE</Typography>
            <Typography variant="body2" sx={{ mt: 1, color: 'rgba(230,238,248,0.9)' }}>Demo site — showcasing upcoming event planning features for birthday celebrations across Germany.</Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2">Phone: +49 30 1234 567</Typography>
              <Typography variant="body2">Email: hello@celebrate-demo.de</Typography>
              <Typography variant="body2">Address: Demo Street 12, 10115 Berlin</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={2}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Company</Typography>
            <Box sx={{ mt: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
              <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>About Us</a>
              <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Careers</a>
              <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Press</a>
            </Box>
          </Grid>

          <Grid item xs={12} md={2}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Products</Typography>
            <Box sx={{ mt: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
              <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Packages</a>
              <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Gift Cards</a>
              <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Organiser Service</a>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Subscribe for updates</Typography>
            <Typography variant="body2" sx={{ mt: 1, color: 'rgba(230,238,248,0.9)' }}>Get product updates, new demo venues and special launch offers.</Typography>
            <Box component="form" sx={{ display: 'flex', gap: 1, mt: 2 }} onSubmit={(e) => e.preventDefault()}>
              <TextField placeholder="Email address" size="small" sx={{ background: '#fff', borderRadius: 1, flex: 1 }} />
              <Button variant="contained">Subscribe</Button>
            </Box>

            <Box sx={{ mt: 3, display: 'flex', gap: 1 }}>
              <IconButton sx={{ color: '#e6eef8' }}><FacebookIcon /></IconButton>
              <IconButton sx={{ color: '#e6eef8' }}><InstagramIcon /></IconButton>
              <IconButton sx={{ color: '#e6eef8' }}><LinkedInIcon /></IconButton>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.06)', mt: 4, pt: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
          <Typography variant="caption">© {new Date().getFullYear()} Celebrate.DE — Demo. All demo content and example prices are illustrative only.</Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy</a>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
