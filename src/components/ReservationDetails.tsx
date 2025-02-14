import  { useState } from "react";
import { useLocation } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import PersonIcon from "@mui/icons-material/Person";
import EventIcon from "@mui/icons-material/Event";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function ReservationDetails() {
  const location = useLocation();
  const reservationData = location.state || {};

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Button is enabled only if name is provided and either email or phone is filled
  const isFormValid = name.trim() !== "" && (email.trim() !== "" || phone.trim() !== "");

  const handleSubmit = () => {
    if (!isFormValid) return;

    const finalReservation = {
      ...reservationData,
      name,
      email,
      phone,
    };

    console.log("Final Reservation:", JSON.stringify(finalReservation, null, 2));
    alert(`Reservation Confirmed:\n${JSON.stringify(finalReservation, null, 2)}`);
  };

  return (
    <Box sx={{ maxWidth: 400, margin: "auto", mt: 5, padding: 3, boxShadow: 3, borderRadius: 2, marginBottom: 5 }}>
      <Typography variant="h6" gutterBottom>📝 Reservierungsübersicht</Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <PersonIcon />
        <Typography>{reservationData.persons} Personen</Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <EventIcon />
        <Typography>Datum: {reservationData.date}</Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <AccessTimeIcon />
        <Typography>Uhrzeit: {reservationData.time}</Typography>
      </Box>

      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>👤 Persönliche Daten</Typography>
      <TextField fullWidth label="Name" value={name} onChange={(e) => setName(e.target.value)} sx={{ mb: 2 }} />
      <TextField fullWidth label="E-Mail (optional)" value={email} onChange={(e) => setEmail(e.target.value)} sx={{ mb: 2 }}
        InputProps={{ startAdornment: <EmailIcon sx={{ mr: 1 }} /> }} />
      <TextField fullWidth label="Telefonnummer (optional)" value={phone} onChange={(e) => setPhone(e.target.value)} sx={{ mb: 2 }}
        InputProps={{ startAdornment: <PhoneIcon sx={{ mr: 1 }} /> }} />
      
      <Button variant="contained" color="primary" fullWidth onClick={handleSubmit} disabled={!isFormValid} >
        Bestätigen ✅
      </Button>
    </Box>
  );
}

export default ReservationDetails;
