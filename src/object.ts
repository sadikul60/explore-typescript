let player: {
    Name: string;
    Age?: number;
    country: string;
    married: boolean;
    clubs: string[];
}

player = {
    Name: 'Messi',
    Age: 35,
    country: 'Argentina',
    married: true,
    clubs: ['Barcelona']
}

player = {
    Name: 'Neymar',
    // Age: 30,
    country: 'Brazil',
    married: false,
    clubs: ['Barcelona']
}

// console.log(player);

player.clubs = player.clubs.map(club => club.toUpperCase());

let {Name, Age, country, married, clubs} = player; // distructuring object

console.log(Name, Age, country, married, clubs);