export const formatPet = (pet,users,authedUser) => {
  const { id,breed, age, gender,imageURL,vaccinationDetails, votes} = pet
  const { name, avatarURL } = users[pet.owner]

  return {
    name : pet.name,//Pet Name
    id,//Pet Id
    breed,//Time posted
    age,//Option One
    gender,//Option Two
    avatar: imageURL,//Author profile image
    ownerDetails: users[authedUser],
    vaccinationDetails,
    votes
  }
}
