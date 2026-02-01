import { faInfo } from "@fortawesome/free-solid-svg-icons";

// Tables info
interface Column<T> {
    key: keyof T;
    header: string;
}

export interface CommonTableProps<T> {
    columns: Column<T>[];
    data: T[];
}

// Users table info
interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    location: string;
    tag: string;
    status: string;
}

export const columns: Column<User>[] = [
    { key: "name", header: "Name" },
    { key: "email", header: "Email" },
    { key: "phone", header: "Phone" },
    { key: "tag", header: "Tag" },
    { key: "location", header: "Location" },
    { key: "status", header: "Status" }
];


export const users: User[] = [
    {
        id: 1,
        name: "Sai Krishna",
        email: "sai@ritfast.com",
        phone: "+91 98765 43210",
        location: "Hyderabad",
        tag: "Hot",
        status: "Active"
    },
    {
        id: 2,
        name: "Ravi Teja",
        email: "ravi@ritfast.com",
        phone: "+91 91234 56789",
        location: "Vijayawada",
        tag: "Hot",
        status: "Active"
    },
    {
        id: 3,
        name: "Anjali Sharma",
        email: "anjali@ritfast.com",
        phone: "+91 99887 66554",
        location: "Bengaluru",
        tag: "Cold",
        status: "Inactive"
    },
    {
        id: 4,
        name: "Mohammed Irfan",
        email: "irfan@ritfast.com",
        phone: "+91 90909 80808",
        location: "Chennai",
        tag: "Warm",
        status: "Active"
    },
    {
        id: 5,
        name: "Pooja Reddy",
        email: "pooja@ritfast.com",
        phone: "+91 93456 77889",
        location: "Hyderabad",
        tag: "Warm",
        status: "Active"
    }
];

// for dealers table
export interface Dealer {
    id: number;
    name: string;
    phone: string;
    email: string;
    tag: string;
    city: string;
    status: "Active" | "Inactive";
}

export const dealerColumns: Column<Dealer>[] = [
    { key: "name", header: "Name" },
    { key: "email", header: "Email" },
    { key: "phone", header: "Phone" },
    { key: "tag", header: "Tag" },
    { key: "city", header: "City" },
    { key: "status", header: "Status" }
];

export const dealers: Dealer[] = [
    {
        id: 1,
        name: "Sri Balaji Traders",
        phone: "+91 98765 11122",
        email: "balaji@ritfast.com",
        tag: "Hot",
        city: "Hyderabad",
        status: "Active",
    },
    {
        id: 2,
        name: "Venkateswara Distributors",
        phone: "+91 91234 56788",
        email: "venkateswara@ritfast.com",
        tag: "Hot",
        city: "Vijayawada",
        status: "Active",
    },
    {
        id: 3,
        name: "Sharma Enterprises",
        phone: "+91 99887 66550",
        email: "sharma@ritfast.com",
        tag: "Cold",
        city: "Bengaluru",
        status: "Inactive",
    },
    {
        id: 4,
        name: "Kaveri Agencies",
        phone: "+91 90909 70707",
        email: "kaveri@ritfast.com",
        tag: "Warm",
        city: "Chennai",
        status: "Active",
    },
    {
        id: 5,
        name: "Mahadev Stores",
        phone: "+91 93456 88990",
        email: "mahadev@ritfast.com",
        tag: "Warm",
        city: "Ahmedabad",
        status: "Active",
    },
];
