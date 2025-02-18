import { Booking } from "./interface";
const baseUrl = "https://tonton.yamlabburkina.com"
const fetchBookings = async () => {
    try {
        const response = await fetch(baseUrl + "/bookings"); // Replace with your API URL
        if (!response.ok) {
            throw new Error("Failed to fetch bookings");
        }
        const data = await response.json();
        console.log("Bookings:", data);
    } catch (error) {
        console.error("Error fetching bookings:", error);
    }
};

const createBooking = async (booking : Booking ) => {
    try {
        const response = await fetch(baseUrl + "/book", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(booking),
        });
        if (!response.ok) {
            throw new Error("Failed to create booking");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error creating booking:", error);
        return error;
    }
};

const bookings = await fetchBookings();
console.log("Bookings", bookings);

export { fetchBookings, createBooking };