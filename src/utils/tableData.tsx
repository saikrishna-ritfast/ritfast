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
    { id: 1, name: "Sri Balaji Traders", phone: "+91 98765 11122", email: "balaji@ritfast.com", tag: "Hot", city: "Hyderabad", status: "Active" },
    { id: 2, name: "Venkateswara Distributors", phone: "+91 91234 56788", email: "venkateswara@ritfast.com", tag: "Hot", city: "Vijayawada", status: "Active" },
    { id: 3, name: "Sharma Enterprises", phone: "+91 99887 66550", email: "sharma@ritfast.com", tag: "Cold", city: "Bengaluru", status: "Inactive" },
    { id: 4, name: "Kaveri Agencies", phone: "+91 90909 70707", email: "kaveri@ritfast.com", tag: "Warm", city: "Chennai", status: "Active" },
    { id: 5, name: "Mahadev Stores", phone: "+91 93456 88990", email: "mahadev@ritfast.com", tag: "Warm", city: "Ahmedabad", status: "Active" },

    { id: 6, name: "Sai Ganesh Traders", phone: "+91 98111 22334", email: "ganesh@ritfast.com", tag: "Hot", city: "Warangal", status: "Active" },
    { id: 7, name: "Lakshmi Distributors", phone: "+91 98222 33445", email: "lakshmi@ritfast.com", tag: "Warm", city: "Guntur", status: "Active" },
    { id: 8, name: "Royal Enterprises", phone: "+91 98333 44556", email: "royal@ritfast.com", tag: "Cold", city: "Mumbai", status: "Inactive" },
    { id: 9, name: "Metro Wholesale", phone: "+91 98444 55667", email: "metro@ritfast.com", tag: "Hot", city: "Pune", status: "Active" },
    { id: 10, name: "Sunrise Traders", phone: "+91 98555 66778", email: "sunrise@ritfast.com", tag: "Warm", city: "Nagpur", status: "Active" },

    { id: 11, name: "Greenfield Stores", phone: "+91 98666 77889", email: "greenfield@ritfast.com", tag: "Cold", city: "Indore", status: "Inactive" },
    { id: 12, name: "Global Distributors", phone: "+91 98777 88990", email: "global@ritfast.com", tag: "Hot", city: "Delhi", status: "Active" },
    { id: 13, name: "Capital Traders", phone: "+91 98888 99001", email: "capital@ritfast.com", tag: "Warm", city: "Noida", status: "Active" },
    { id: 14, name: "Prime Agencies", phone: "+91 98999 10112", email: "prime@ritfast.com", tag: "Hot", city: "Gurgaon", status: "Active" },
    { id: 15, name: "Om Sai Enterprises", phone: "+91 99000 21223", email: "omsai@ritfast.com", tag: "Cold", city: "Bhopal", status: "Inactive" },

    { id: 16, name: "Srinivasa Wholesale", phone: "+91 99111 32334", email: "srinivasa@ritfast.com", tag: "Warm", city: "Tirupati", status: "Active" },
    { id: 17, name: "Navya Traders", phone: "+91 99222 43445", email: "navya@ritfast.com", tag: "Hot", city: "Nellore", status: "Active" },
    { id: 18, name: "Everest Agencies", phone: "+91 99333 54556", email: "everest@ritfast.com", tag: "Cold", city: "Shimla", status: "Inactive" },
    { id: 19, name: "Himalaya Stores", phone: "+91 99444 65667", email: "himalaya@ritfast.com", tag: "Warm", city: "Dehradun", status: "Active" },
    { id: 20, name: "Eastern Traders", phone: "+91 99555 76778", email: "eastern@ritfast.com", tag: "Hot", city: "Kolkata", status: "Active" },

    { id: 21, name: "Coastal Distributors", phone: "+91 99666 87889", email: "coastal@ritfast.com", tag: "Warm", city: "Visakhapatnam", status: "Active" },
    { id: 22, name: "Delta Traders", phone: "+91 99777 98990", email: "delta@ritfast.com", tag: "Cold", city: "Rajahmundry", status: "Inactive" },
    { id: 23, name: "City Mart", phone: "+91 99888 09001", email: "citymart@ritfast.com", tag: "Hot", city: "Surat", status: "Active" },
    { id: 24, name: "Unity Agencies", phone: "+91 99999 10112", email: "unity@ritfast.com", tag: "Warm", city: "Vadodara", status: "Active" },
    { id: 25, name: "Western Wholesale", phone: "+91 90000 21223", email: "western@ritfast.com", tag: "Hot", city: "Rajkot", status: "Active" },

    { id: 26, name: "Southern Traders", phone: "+91 90111 32334", email: "southern@ritfast.com", tag: "Warm", city: "Madurai", status: "Active" },
    { id: 27, name: "Lotus Distributors", phone: "+91 90222 43445", email: "lotus@ritfast.com", tag: "Cold", city: "Trichy", status: "Inactive" },
    { id: 28, name: "Golden Stores", phone: "+91 90333 54556", email: "golden@ritfast.com", tag: "Hot", city: "Salem", status: "Active" },
    { id: 29, name: "Diamond Agencies", phone: "+91 90444 65667", email: "diamond@ritfast.com", tag: "Warm", city: "Erode", status: "Active" },
    { id: 30, name: "Unity Wholesale", phone: "+91 90555 76778", email: "unitywh@ritfast.com", tag: "Hot", city: "Coimbatore", status: "Active" },

    { id: 31, name: "Skyline Traders", phone: "+91 90666 87889", email: "skyline@ritfast.com", tag: "Warm", city: "Mysuru", status: "Active" },
    { id: 32, name: "Hilltop Stores", phone: "+91 90777 98990", email: "hilltop@ritfast.com", tag: "Cold", city: "Ooty", status: "Inactive" },
    { id: 33, name: "Green Valley Traders", phone: "+91 90888 09001", email: "greenvalley@ritfast.com", tag: "Warm", city: "Wayanad", status: "Active" },
    { id: 34, name: "Oceanic Agencies", phone: "+91 90999 10112", email: "oceanic@ritfast.com", tag: "Hot", city: "Kochi", status: "Active" },
    { id: 35, name: "Palm Traders", phone: "+91 91000 21223", email: "palm@ritfast.com", tag: "Warm", city: "Trivandrum", status: "Active" },

    { id: 36, name: "North Star Distributors", phone: "+91 91111 32334", email: "northstar@ritfast.com", tag: "Hot", city: "Chandigarh", status: "Active" },
    { id: 37, name: "Rapid Traders", phone: "+91 91222 43445", email: "rapid@ritfast.com", tag: "Warm", city: "Ludhiana", status: "Active" },
    { id: 38, name: "Punjab Stores", phone: "+91 91333 54556", email: "punjab@ritfast.com", tag: "Cold", city: "Amritsar", status: "Inactive" },
    { id: 39, name: "Borderline Agencies", phone: "+91 91444 65667", email: "borderline@ritfast.com", tag: "Warm", city: "Jammu", status: "Active" },
    { id: 40, name: "Valley Traders", phone: "+91 91555 76778", email: "valley@ritfast.com", tag: "Cold", city: "Srinagar", status: "Inactive" },

    { id: 41, name: "Desert Distributors", phone: "+91 91666 87889", email: "desert@ritfast.com", tag: "Warm", city: "Jodhpur", status: "Active" },
    { id: 42, name: "Pink City Stores", phone: "+91 91777 98990", email: "pinkcity@ritfast.com", tag: "Hot", city: "Jaipur", status: "Active" },
    { id: 43, name: "Fortune Traders", phone: "+91 91888 09001", email: "fortune@ritfast.com", tag: "Warm", city: "Udaipur", status: "Active" },
    { id: 44, name: "Heritage Agencies", phone: "+91 91999 10112", email: "heritage@ritfast.com", tag: "Cold", city: "Ajmer", status: "Inactive" },
    { id: 45, name: "Unity Mart", phone: "+91 92000 21223", email: "unitymart@ritfast.com", tag: "Hot", city: "Kota", status: "Active" },
];

