import  { useState } from "react";
import { useLocation } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import PersonIcon from "@mui/icons-material/Person";
import EventIcon from "@mui/icons-material/Event";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { createBooking } from "./Api";
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import LinearProgress from '@mui/material/LinearProgress';
function ReservationDetails() {
  const location = useLocation();
  const reservationData = location.state || {};

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Button is enabled only if name is provided and either email or phone is filled
  const isFormValid = name.trim() !== "" && (email.trim() !== "" || phone.trim() !== "");

  const handleSubmit = async() => {
    if (!isFormValid) return;

    const finalReservation = {
      ...reservationData,
      name,
      email,
      phone,
    };
    try {
      setLoading(true);
      const response = await createBooking(finalReservation);
      if (response.success){
        setSuccess(true);
        setLoading(false);
        setError(false);
      }
      else{
        setSuccess(false);
        setLoading(false);
        setError(true);
      }
      console.log("Booking created:", response);
    }catch(error){
      console.error("Error creating booking:", error);
      setSuccess(false);
      setLoading(false);
      setError(true);
    }
  
    
    // Reset form fields
    setName("");
    setEmail("");
    setPhone("");
  
    // redirect to home page after 3 seconds
    if(success){
      setTimeout(() => {
        window.location.href = "/";
      }, 3000);
    }
  };

  return (
    // add a success message after the form is submitted
    <>
    {/* while waiting show linear progress */}

    {loading && <LinearProgress sx={{ width: '100%', marginTop: 5 }} />}

    {!success && error &&
    <Alert severity="info" sx={{ maxWidth: 400, margin: "auto", mt: 5, padding: 3, boxShadow: 3, borderRadius: 2, marginBottom: 5 }}>
      Bitte überprüfen Sie Ihre Reservierungsdaten und geben Sie Ihre persönlichen Daten ein.
    </Alert>
    }

    {success && <Alert severity="success" sx={{ maxWidth: 400, margin: "auto", mt: 5, padding: 3, boxShadow: 3, borderRadius: 2, marginBottom: 5 }}>
      <CheckIcon sx={{ mr: 1 }} />
      Vielen Dank! Ihre Reservierung wurde erfolgreich abgeschlossen.
    </Alert>}
    
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
    </>
  );
}

export default ReservationDetails;
