import { Trip } from './trip';
import { Traveller } from './traveller';
import { Contact } from './contact';

export class Tour {
	Id: number;
	Name: string;
	ArtistName: string;
	DateStart: Date;
	DateEnd: Date;
	Host: string;
	Trips: Trip[];
	Travellers: Traveller[]
	Contact: Contact
}


