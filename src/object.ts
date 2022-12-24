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

// console.log(Name, Age, country, married, clubs);



// explore enum (TypeScript e enum object er moto kaj kore. tobe er extra benifit ache.)

enum Friends {
    Hasan,
    Jamal,
    Rony,
    Nasim,
    Akkas
}

console.log(Friends);
console.log(Friends.Akkas);
console.log(Friends[4]);

enum Configs {
    API_KEY = "ee4werf5wr641cw",
    Domain_Name = "domain_name"
};

console.log(Configs.API_KEY);

// okay