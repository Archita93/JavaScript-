// Creating a game

// Create three characters with the follwoing attributes: 
// socialSkills, streetSkills, movemnet and health

// Charcters: Assistant Manager, Manager and Employee

// dot notation
var assistantManager = {};
assistantManager.Movement = 4;
assistantManager.socialSkills = 30;
assistantManager.streetSkills = 40;
assistantManager.health = 10;

console.log(assistantManager);
console.log(assistantManager.health);
// Key-Value pair
var Manager = {
    Movement: 56,
    socialSkills: 23,
    streetSkills: 90,
    health: 45
}
console.log(Manager);
console.log(Manager.streetSkills);
// Bracket Notation 
var Employee = {}
Employee["Movement"] = 45;
Employee["socialSkills"] = 57;
Employee["streetSkills"] = 90;
Employee.health = 90;
console.log(Employee);
console.log(Employee.Movement);

// Bracket notation allows creation of space between the property names
// Example:
Manager["Duration of work"] = 60;
console.log(Manager);


// Another advantage of Bracket notation: 
var arr = ["color","speed","engine"];
var car = {
    color: "blue",
    speed: 34,
    engine:"GRX",

}

for(var i = 0;i < arr.length;i++){
    console.log(car[arr[i]]);
}

// car["color"]
// car["speed"]
// car["engine"]