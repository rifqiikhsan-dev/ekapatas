import { useState } from "react";
import { BookingFormData } from "../../types";

export const useBookingForm = () => {
    const [formData, setFormData] = useState<BookingFormData>({
        origin: "",
        destination: "",
        date: "",
        time: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Handle form submission logic here
    };

    const resetForm = () => {
        setFormData({
            origin: "",
            destination: "",
            date: "",
            time: "",
        });
    };

    return {
        formData,
        handleInputChange,
        handleSubmit,
        resetForm,
    };
};
