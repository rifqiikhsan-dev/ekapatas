import { RouteStop } from "../types";

export const ROUTE_STOPS: RouteStop[] = [
    {
        id: 1,
        city: "Surabaya",
        description: "Kota keberangkatan kota besar dengan kantor admin, toll, terminal Bungurasih.",
        image: "src/assets/images/terminal-surabaya.png",
        isActive: true,
    },
    {
        id: 2,
        city: "Rest Area KM 575",
        description: "Berhenti sebentar bersama keluarga istirahat atau makan.",
        image: "src/assets/images/rest-area.png",
        isActive: false,
    },
    {
        id: 3,
        city: "Sampai Tujuan",
        description: "Sampai tujuan dengan nyaman dan aman sesuai ekspektasi.",
        image: "src/assets/images/terminal-tirtonadi.png",
        isActive: false,
    },
];
