import MuseumImage from '../assets/AdviceActivityImage/museumImage.svg';
import ActivityImage from '../assets/activity/image.svg';
import DayImage1 from '../assets/DaysActivity/image1.svg';
import DayImage2 from '../assets/DaysActivity/image2.svg';
import DayImage3 from '../assets/DaysActivity/image3.svg';
import DayImage4 from '../assets/DaysActivity/image4.svg';
// import Video from '../assets/DaysActivity/big_buck_bunny_480p_1mb.mp4'

export const AdviceActivityData = [
  {
    id: 1,
    museum: {
      name: 'Museum',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      image: MuseumImage,
    },
    advice: {
      totalAdvice: 12,
    },
    rating: {
      totalRating: 3,
    },
  },
  {
    id: 2,
    museum: {
      name: 'Museum',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      image: MuseumImage,
    },
    advice: {
      totalAdvice: 12,
    },
    rating: {
      totalRating: 3,
    },
  },
  {
    id: 3,
    museum: {
      name: 'Museum',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      image: MuseumImage,
    },
    advice: {
      totalAdvice: 12,
    },
    rating: {
      totalRating: 3,
    },
  },
];

export const ActivityData = [
  {
    id: 1,
    image: ActivityImage,
    name: 'Lapland, Finland',
    location: 'Anarka, Turkey',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
  },
  {
    id: 2,
    image: ActivityImage,
    name: 'Lapland, Finland',
    location: 'Anarka, Turkey',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
  },
  {
    id: 3,
    image: ActivityImage,
    name: 'Lapland, Finland',
    location: 'Anarka, Turkey',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
  },
  {
    id: 4,
    image: ActivityImage,
    name: 'Lapland, Finland',
    location: 'Anarka, Turkey',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
  },
];

export const ActivityDaysData = [
  {
    id: 1,
    image: ActivityImage,
    name: 'Lapland, Finland',
    location: 'Anarka, Turkey',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
    images: [
      {
        id: 1,
        uri: DayImage1,
      },
      {
        id: 2,
        uri: DayImage2,
      },
      {
        id: 3,
        uri: DayImage3,
      },
      {
        id: 4,
        uri: DayImage4,
      },
    ],
    videos: {
      uri: '../assets/DaysActivity/5_6109534169027579992.mp4',
    },
  },
  {
    id: 2,
    image: ActivityImage,
    name: 'Lapland, Finland',
    location: 'Anarka, Turkey',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
  },
  {
    id: 3,
    image: ActivityImage,
    name: 'Lapland, Finland',
    location: 'Anarka, Turkey',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
  },
  {
    id: 4,
    image: ActivityImage,
    name: 'Lapland, Finland',
    location: 'Anarka, Turkey',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
  },
];
