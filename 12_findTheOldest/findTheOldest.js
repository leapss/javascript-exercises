const findTheOldest = function(people) {
    const today = new Date().getFullYear();
    return people.reduce((oldest, person) => {
        const age = person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : today - person.yearOfBirth;
        const oldestAge = oldest.yearOfDeath ? oldest.yearOfDeath - oldest.yearOfBirth : today - oldest.yearOfBirth;
        return age > oldestAge ? person : oldest;
        });
            
};

// Do not edit below this line
module.exports = findTheOldest;
