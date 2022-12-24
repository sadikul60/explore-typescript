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
// console.log(Name, Age, country, married, clubs);
// explore enum (TypeScript e enum object er moto kaj kore. tobe er extra benifit ache.)
var Friends;
(function (Friends) {
    Friends[Friends["Hasan"] = 0] = "Hasan";
    Friends[Friends["Jamal"] = 1] = "Jamal";
    Friends[Friends["Rony"] = 2] = "Rony";
    Friends[Friends["Nasim"] = 3] = "Nasim";
    Friends[Friends["Akkas"] = 4] = "Akkas";
})(Friends || (Friends = {}));
console.log(Friends);
console.log(Friends.Akkas);
console.log(Friends[4]);
var Configs;
(function (Configs) {
    Configs["API_KEY"] = "ee4werf5wr641cw";
    Configs["Domain_Name"] = "domain_name";
})(Configs || (Configs = {}));
;
console.log(Configs.API_KEY);
// okay
