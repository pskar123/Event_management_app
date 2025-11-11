import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const demos = [
  { city: 'Berlin — Café Himmel', price: '€49 / hr', desc: 'Cozy café with private corner for small celebrations.', img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop' },
  { city: 'Hamburg — Bar Sonnenschein', price: '€59 / hr', desc: 'Stylish bar with rooftop vibe and DJ Corner.', img: 'https://images.unsplash.com/photo-1522120698184-4f0f2a3c6b0b?q=80&w=1200&auto=format&fit=crop' },
  { city: 'Munich — Hotel Alte Mühle', price: '€79 / hr', desc: 'Classic hotel ballroom for elegant gatherings.', img: 'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=1200&auto=format&fit=crop' },
]

export default function Destinations() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h4" align="center" sx={{ mb: 4 }}>Demo destinations & venues</Typography>
      <Grid container spacing={3}>
        {demos.map((d, i) => (
          <Grid item key={i} xs={12} md={4}>
            <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }} className="card-zoom">
              <CardMedia component="img" height="180" image={d.img} alt={d.city} />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6">{d.city}</Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>{d.desc}</Typography>
                <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: 700 }}>{d.price}</Typography>
                <Button variant="outlined" sx={{ mt: 2 }}>View details</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
