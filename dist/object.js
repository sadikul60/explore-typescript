"use strict";
var player;
player = {
    Name: 'Messi',
    Age: 35,
    country: 'Argentina',
    married: true,
    clubs: ['Barcelona']
};
player = {
    Name: 'Neymar',
    // Age: 30,
    country: 'Brazil',
    married: false,
    clubs: ['Barcelona']
};
// console.log(player);
player.clubs = player.clubs.map(function (club) { return club.toUpperCase(); });
var Name = player.Name, Age = player.Age, country = player.country, married = player.married, clubs = player.clubs; // distructuring object
console.log(Name, Age, country, married, clubs);
