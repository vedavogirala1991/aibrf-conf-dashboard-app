let users = {
  sarahedo: {
    id: 'sarahedo',
    dealer: 'N',
    email: 'sarahedo@gmail.com',
    mobile: '9876543210',
    name: 'Sarah Edo',
    avatarURL: 'https://tylermcginnis.com/would-you-rather/sarah.jpg',
    pets: [
      '8xf0y6ziyjabvozdd253nd',
      '6ni6ok3ym7mf1p33lnez',
      'am8ehyc8byjqgar0jgpub9'
    ]
  },
  tylermcginnis: {
    id: 'tylermcginnis',
    dealer: 'N',
    email: 'tylermcginnis@gmail.com',
    mobile: '9876543211',
    name: 'Tyler McGinnis',
    avatarURL: 'https://tylermcginnis.com/would-you-rather/tyler.jpg',
    pets: [
      'vthrdm985a262al8qx3do',
      'xj352vofupe1dqz9emx13r'
    ]
  },
  johndoe: {
    id: 'johndoe',
    dealer: 'N',
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    mobile: '9876543212',
    avatarURL: 'https://tylermcginnis.com/would-you-rather/dan.jpg',
    pets: []
  },
  jonnyburger: {
    id: 'jonnyburger',
    dealer: 'Y',
    email: 'jonnyburger@gmail.com',
    mobile: '9876543213',
    name: 'Jonny Burger',
    avatarURL: 'https://tylermcginnis.com/would-you-rather/sarah.jpg',
    pets: [
      'jp125vofupe1dqz7emx13r',
      'pdvmrdm985a278al8qx3do',
      '6bkvv6ok3ym7mf1p33lnez',
      'loxhs1bqm25b708cmbf3g'
    ]
  }
}

let pets = {
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    name: 'casper',
    adopted: 'Y',
    gender: 'male',
    owner: 'sarahedo',
    dealer: '',
    age: '1.8 years',
    imageURL: 'https://images.dog.ceo/breeds/labrador/n02099712_3364.jpg',
    breed: 'labrador',
    postedOnTales: 'Y',
    puppy: 'N',
    votes: 1,
    vaccinationDetails: [
      {
        vaccination: 'rabies',
        type: 'core',
        date: '15-06-2021',
      },
      {
        vaccination: 'lyme',
        type: 'noncore',
        date: '15-06-2021',
      }
    ],
    previousOwners: '',
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    name: 'joey',
    adopted: 'Y',
    gender: 'male',
    owner: 'sarahedo',
    dealer: '',
    age: '6 weeks',
    imageURL: 'https://images.dog.ceo/breeds/husky/n02110185_2593.jpg',
    breed: 'husky',
    postedOnTales: 'N',
    puppy: 'Y',
    votes: 0,
    vaccinationDetails: [
      {
        vaccination: 'dap',
        type: 'core',
        date: '09-08-2021',
      },
      {
        vaccination: 'lyme',
        type: 'noncore',
        date: '02-02-2022',
      }
    ],
    previousOwners: '',
  },
  "am8ehyc8byjqgar0jgpub9": {
    id: 'am8ehyc8byjqgar0jgpub9',
    name: 'pumpkin',
    adopted: 'Y',
    gender: 'female',
    owner: 'sarahedo',
    dealer: '',
    age: '4 years',
    imageURL: 'https://images.dog.ceo/breeds/germanshepherd/n02106662_27251.jpg',
    breed: 'germanshepherd',
    postedOnTales: 'Y',
    puppy: 'N',
    votes: 3,
    vaccinationDetails: [
      {
        vaccination: 'rabies',
        type: 'core',
        date: '21-01-2022',
      },
      {
        vaccination: 'lyme',
        type: 'noncore',
        date: '31-12-2021',
      }
    ],
    previousOwners: 'tylermcginnis',
  },
  "vthrdm985a262al8qx3do": {
    id: 'vthrdm985a262al8qx3do',
    name: 'cooper',
    adopted: 'Y',
    gender: 'male',
    owner: 'tylermcginnis',
    dealer: '',
    age: '2.4 years',
    imageURL: 'https://images.dog.ceo/breeds/dalmatian/cooper1.jpg',
    breed: 'dalmatian',
    postedOnTales: 'Y',
    puppy: 'N',
    votes: 2,
    vaccinationDetails: [
      {
        vaccination: 'rabies',
        type: 'core',
        date: '21-01-2022',
      }
    ],
    previousOwners: '',
  },
  "xj352vofupe1dqz9emx13r": {
    id: 'xj352vofupe1dqz9emx13r',
    name: 'bruno',
    adopted: 'Y',
    gender: 'female',
    owner: 'tylermcginnis',
    dealer: '',
    age: '5 years',
    imageURL: 'https://images.dog.ceo/breeds/beagle/n02088364_16695.jpg',
    breed: 'beagle',
    postedOnTales: 'N',
    puppy: 'N',
    votes: 2,
    vaccinationDetails: [
      {
        vaccination: 'rabies',
        type: 'core',
        date: '21-01-2022',
      },
      {
        vaccination: 'lyme',
        type: 'noncore',
        date: '31-12-2021',
      }
    ],
    previousOwners: '',
  },
  "jp125vofupe1dqz7emx13r": {
    id: 'jp125vofupe1dqz7emx13r',
    name: 'leo',
    adopted: 'N',
    gender: 'male',
    owner: '',
    dealer: 'jonnyburger',
    age: '2 years',
    imageURL: 'https://images.dog.ceo/breeds/beagle/n02088364_161.jpg',
    breed: 'beagle',
    postedOnTales: 'Y',
    puppy: 'N',
    votes: 2,
    vaccinationDetails: [
      {
        vaccination: 'rabies',
        type: 'core',
        date: '21-01-2022',
      },
      {
        vaccination: 'lyme',
        type: 'noncore',
        date: '31-12-2021',
      }
    ],
    previousOwners: 'sarahedo',
  },
  "pdvmrdm985a278al8qx3do": {
    id: 'pdvmrdm985a278al8qx3do',
    name: 'cookie',
    adopted: 'N',
    gender: 'male',
    owner: '',
    dealer: 'jonnyburger',
    age: '3 years',
    imageURL: 'https://images.dog.ceo/breeds/germanshepherd/n02106662_18065.jpg',
    breed: 'germanshepherd',
    postedOnTales: 'N',
    puppy: 'N',
    votes: 0,
    vaccinationDetails: [
      {
        vaccination: 'rabies',
        type: 'core',
        date: '21-01-2022',
      },
    ],
    previousOwners: 'tylermcginnis',
  },
  "6bkvv6ok3ym7mf1p33lnez": {
    id: '6bkvv6ok3ym7mf1p33lnez',
    name: 'pearl',
    adopted: 'N',
    gender: 'female',
    owner: '',
    dealer: 'jonnyburger',
    age: '4 weeks',
    imageURL: 'https://images.dog.ceo/breeds/shihtzu/n02086240_11539.jpg',
    breed: 'shihtzu',
    postedOnTales: 'N',
    puppy: 'Y',
    votes: 0,
    vaccinationDetails: [],
    previousOwners: '',
  },
  "loxhs1bqm25b708cmbf3g": {
    id: 'loxhs1bqm25b708cmbf3g',
    name: 'tommy',
    adopted: 'N',
    gender: 'female',
    owner: '',
    dealer: 'jonnyburger',
    age: '1.2 years',
    imageURL: 'https://images.dog.ceo/breeds/labrador/n02099712_3273.jpg',
    breed: 'labrador',
    postedOnTales: 'Y',
    puppy: 'N',
    votes: 1,
    vaccinationDetails: [
      {
        vaccination: 'rabies',
        type: 'core',
        date: '21-01-2022',
      },
    ],
    previousOwners: '',
  },
}

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function _getUsers () {
  console.log('_getUsers', users);
  return new Promise((res, rej) => {
    setTimeout(() => res({...users}), 1000)
  })
}

export function _getPets () {
  console.log('_getPets', pets);
  return new Promise((res, rej) => {
    setTimeout(() => res({...pets}), 1000)
  })
}
