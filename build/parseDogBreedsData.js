"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function parseDogBreedsData(breeds) {
    const breedsList = [];
    Object.keys(breeds).forEach(breed => {
        const subBreeds = breeds[breed];
        if (subBreeds.length === 0) {
            breedsList.push(breed);
        }
        else {
            breedsList.push(...subBreeds.map(subBreed => subBreed + ' ' + breed));
        }
    });
    return breedsList;
}
exports.default = parseDogBreedsData;
