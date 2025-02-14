import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { AppBar, Toolbar } from '@mui/material';


function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed" elevation={0} sx={{ backgroundColor: '#181C14', color: '#ECDFCC' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* <Box sx={{ flex: 1 }} /> */}
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/premium-themes/onepirate/"
            sx={{ fontSize: 24 }}
          >
            {'Tonton Frankfurt - Reservierung'}
          </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;