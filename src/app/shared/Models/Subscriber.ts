import { Donation } from "./Donation";

export type Subscriber = {
    id:string,
    country: string;
    civilite: string;
    firstName: string;
    lastName: string;
    Email:string;
    phone: string;
    habitation: string;
    saroMember: string;
    donations: Donation[];
}