export interface BookingFormData {
    origin: string;
    destination: string;
    date: string;
    time: string;
}

export interface Agent {
    id: string;
    name: string;
    location: string;
    phone: string;
    rating: number;
    experience: string;
    speciality: string;
    image: string;
}

export interface RouteStop {
    id: number;
    city: string;
    description: string;
    image: string;
    isActive: boolean;
}

export interface Achievement {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: any;
    number: string;
    label: string;
}
