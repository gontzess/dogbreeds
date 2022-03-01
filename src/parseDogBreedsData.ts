// @ts-ignore
function parseDogBreedsData(breeds) {
  // @ts-ignore
  const breedsList = []
  Object.keys(breeds).forEach(breed => {
    const subBreeds = breeds[breed]
    if (subBreeds.length === 0) {
      breedsList.push(breed)
    } else {
      // @ts-ignore
      breedsList.push(...subBreeds.map(subBreed => subBreed + ' ' + breed))
    }
  })
  // @ts-ignore
  return breedsList
}

export default parseDogBreedsData