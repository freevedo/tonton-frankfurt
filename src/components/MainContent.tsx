import * as React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Divider from "@mui/material/Divider";
import dayjs, { Dayjs } from "dayjs";
import { Button, MenuItem } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

function MainContent() {
  const [persons, setPersons] = React.useState("2");
  const [timeValue, setTimeValue] = React.useState<Dayjs | null>(dayjs("2025-03-01T12:00"));
  const [dateValue, setDateValue] = React.useState<Dayjs | null>(dayjs("2025-03-01"));
  const [selectedTime, setSelectedTime] = React.useState<string | null>(null);
  const navigate = useNavigate();
  const handleChange = (event: SelectChangeEvent) => {
    setPersons(event.target.value as string);
  };

  const handleTimeChange = (time: string) => {
    setSelectedTime(time);
  };

  const handleReservation = () => {
    if (!selectedTime) {
      alert("Bitte wählen Sie eine Uhrzeit aus!");
      return;
    }

    const reservationData = {
      persons,
      date: dateValue ? dateValue.format("YYYY-MM-DD") : null,
      time: selectedTime,
    };

    navigate("/reservation-details", { state: reservationData });
  };
  return (
    <div>
      <Box
        sx={{
          marginTop: 5,
          minWidth: 120,
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          gap: 2,
          marginBottom: 2,
        }}
      >
        <FormControl fullWidth>
          <InputLabel id="persons-label">Personen</InputLabel>
          <Select labelId="persons-label" id="persons" value={persons} onChange={handleChange} label="Personen">
            {[1, 2, 3, 4, 5].map((num) => (
              <MenuItem key={num} value={num}>{num}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="Datum" value={dateValue} onChange={setDateValue} />
          </LocalizationProvider>
        </FormControl>
        <FormControl fullWidth>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
              label="Uhrzeit"
              value={timeValue}
              onChange={setTimeValue}
            />
          </LocalizationProvider>
        </FormControl>
      </Box>
      <Divider sx={{ marginTop: 5 }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: 5,
          marginBottom: 0,
          padding: 2,
          gap: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          {["12:00", "13:00", "14:00"].map((time) => (
            <Button
              key={time}
              variant={selectedTime === time ? "contained" : "outlined"}
              onClick={() => handleTimeChange(time)}
            >
              {time}
            </Button>
          ))}
        </Box>
        <Button
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          disabled={!selectedTime} // Disable if no time is selected
          onClick={handleReservation}
        >
          Reservieren
        </Button>
      </Box>
    </div>
  );
}

export default MainContent;
