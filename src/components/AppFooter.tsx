import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import InstagramIcon from '@mui/icons-material/Instagram';

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
      {'Copyright © '}
      <Link color="text.secondary" href="https://mui.com/">
        Tonton Frankfurt
      </Link>
      &nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
    return (
      <>
      <Divider/>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: 'auto',
          marginBottom: 0,
          padding: 2,
        }}
      >
        <Stack spacing={2} sx={{ mt: 2 }}>
          <InstagramIcon color="primary" href=""></InstagramIcon>
        </Stack>
        <Box component="footer" sx={{ p: 2, mt: 'auto' }}>
          <Copyright />
        </Box>
      </Box>
      </>
    );
  }
  