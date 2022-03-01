/*

input: breeds object

create breedsList = []
iterate over keys (breeds) and value (sub-breeds)
  if subBreeds is empty
    push breed to breedLIst
  else
    iterate over subBreeds
      concat breed with subBreed and push to breedLIst
return breedsList

*/

function parseDogBreedsData(breeds) {
  const breedsList = []
  Object.keys(breeds).forEach(breed => {
    const subBreeds = breeds[breed]
    if (subBreeds.length === 0) {
      breedsList.push(breed)
    } else {
      breedsList.push(...subBreeds.map(subBreed => subBreed + ' ' + breed))
    }
  })
  return breedsList
}

module.exports = parseDogBreedsData