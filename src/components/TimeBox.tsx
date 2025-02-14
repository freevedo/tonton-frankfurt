import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';


export default function TimeBox(props: any) {
  return (
    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: '#007FFF',
            dark: '#CEE0FB',
            selected: '#CEE0FB',
          },
        },
      }}
    >
     <Box
        sx={{
          width: 100,
          height: 35,
          borderRadius: 1,
          border: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderColor: "primary.main",
          bgcolor: props.selected ? "primary.selected" : "transparent",
          "&:hover": {
            bgcolor: "primary.dark",
          },
        }}
      >
        {props.time}
      </Box>
    </ThemeProvider>
  );
}
