import Image1 from '../assets/HomeImage/image1.png';
import Image2 from '../assets/HomeImage/image2.png';
import Image3 from '../assets/HomeImage/image3.png';
import {useTranslation} from 'react-i18next';

const {t, i18n} = useTranslation();

export const HomeImage = [
  {
    id: 1,
    title: 'Imagine to live in this place',
    url: Image3,
  },
  {
    id: 2,
    title: 'Imagine to live in this place',
    url: Image1,
  },
  {
    id: 3,
    title: 'Imagine to live in this place',
    url: Image2,
  },
  {
    id: 4,
    title: 'Imagine to live in this place',
    url: Image1,
  },
  {
    id: 5,
    title: 'Imagine to live in this place',
    url: Image2,
  },
];

import profileImage1 from '../assets/PostImage/profile.png';
import postImage1 from '../assets/PostImage/Image.png';
import postImage2 from '../assets/PostImage/Image2.png';
import spaceImage1 from '../assets/SpacingImage/profile1.png';
import BackImage from '../assets/SpacingImage/imageBack1.png';
export const PostData = [
  {
    id: 1,
    profileImage: profileImage1,
    Name: 'John Doe',
    country: 'London, United KingDom',
    postTime: '18 hours ago',
    postDesc:
      'Embarking on a journey of discovery, where every path leads to a new adventure. The world is a canvas, and each destination adds a vibrant stroke to the tapestry of memories. Travel far, wander wide, and let the stories unfold in every corner of the globe.',
    postImage: postImage1,
    spaceDesc:
      'Embarking on a journey of discovery, where every path leads to a new adventure. The world is a canvas, and each destination adds a vibrant stroke to the tapestry of memories.',
    spaceName: 'Esther Howard',
    spaceCity: 'New York, United States',
    spaceTime: '12 Days ago',
    spaceImage: spaceImage1,
    spaceBack: BackImage,
  },
  {
    id: 2,
    profileImage: profileImage1,
    Name: 'John Doe',
    country: 'London, United KingDom',
    postTime: '18 hours ago',
    postDesc:
      'Embarking on a journey of discovery, where every path leads to a new adventure. The world is a canvas, and each destination adds a vibrant stroke to the tapestry of memories. Travel far, wander wide, and let the stories unfold in every corner of the globe.',
    postImage: postImage2,
    spaceDesc:
      'Embarking on a journey of discovery, where every path leads to a new adventure. The world is a canvas, and each destination adds a vibrant stroke to the tapestry of memories.',
    spaceName: 'Esther Howard',
    spaceCity: 'New York, United States',
    spaceTime: '12 Days ago',
    spaceImage: spaceImage1,
    spaceBack: BackImage,
  },
];

export const TravelData = [
  {
    key: 'adventures',
    label: 'Adventures',
    placeholder: 'Choose Adventures',
    options: ['Cycling', 'Canoe', 'Biking', 'Skiing'],
  },
  {
    key: 'activities',
    label: 'Activities',
    placeholder: 'Choose Activities',
    options: ['Activity 1', 'Activity 2', 'Activity 3', 'Activity 4'],
  },
  {
    key: 'typeOfTravel',
    label: 'Type of Travel',
    placeholder: 'Choose Type of Travel',
    options: ['Local', 'Global'],
  },
  {
    key: 'travelPrivacy',
    label: 'Travel Privacy',
    placeholder: 'Who can see your travel?',
    options: ['Only me', 'Others'],
  },
];

import CommentICon from '../assets/Icons/commenticon.svg';
import TrendingIcon from '../assets/Icons/trending_icon.svg';
import LikedIcon from '../assets/Icons/liked_icon.svg';
import AdviceIcon from '../assets/Icons/advice_icon.svg';
import NewFollowIcon from '../assets/Icons/newfollow_icon.svg';
export const notifications = [
  {
    id: 1,
    image: CommentICon,
    title: 'Comment On Post',
    des: 'canaking_dis and 87 others comment on your post',
    time: '34m ago',
    timeTitle: 'New',
  },
  {
    id: 2,
    image: TrendingIcon,
    title: 'Trending Post',
    des: 'Your post about Canada trip is on trend.',
    time: '2 days ago',
    timeTitle: 'New',
  },
  {
    id: 3,
    image: LikedIcon,
    title: 'Liked Post',
    des: 'canaking_dis and 87 others liked your post',
    time: '1m ago',
    timeTitle: 'New',
  },
  {
    id: 4,
    image: AdviceIcon,
    title: 'Advice',
    des: 'canaking_dis and 87 others gave an advice on your post',
    time: '20 hours ago',
    timeTitle: 'New',
  },
  {
    id: 5,
    image: NewFollowIcon,
    title: 'New Follower',
    des: 'canaking_dis and 87 others followed you',
    time: '34m ago',
    timeTitle: 'New',
  },
  {
    id: 6,
    image: CommentICon,
    title: 'Comment On Post',
    des: 'canaking_dis and 87 others comment on your post',
    time: '34m ago',
    timeTitle: 'Yesterday',
  },
  {
    id: 7,
    image: TrendingIcon,
    title: 'Trending Post',
    des: 'Your post about Canada trip is on trend.',
    time: '2 days ago',
    timeTitle: 'Yesterday',
  },
  {
    id: 8,
    image: LikedIcon,
    title: 'Liked Post',
    des: 'canaking_dis and 87 others liked your post',
    time: '1m ago',
    timeTitle: 'Yesterday',
  },
  {
    id: 9,
    image: AdviceIcon,
    title: 'Advice',
    des: 'canaking_dis and 87 others gave an advice on your post',
    time: '20 hours ago',
    timeTitle: 'Yesterday',
  },
  {
    id: 10,
    image: NewFollowIcon,
    title: 'New Follower',
    des: 'canaking_dis and 87 others followed you',
    time: '34m ago',
    timeTitle: 'Yesterday',
  },
];

export const categories = [
  {
    id: 1,
    title: 'Spa',
  },
  {
    id: 2,
    title: 'Hiking',
  },
  {
    id: 3,
    title: 'Swimming',
  },
  {
    id: 4,
    title: 'Museums',
  },
  {
    id: 5,
    title: 'Restaurants',
  },
  {
    id: 6,
    title: 'Spa',
  },
  {
    id: 7,
    title: 'Hiking',
  },
  {
    id: 8,
    title: 'Swimming',
  },
  {
    id: 9,
    title: 'Museums',
  },
  {
    id: 10,
    title: 'Restaurants',
  },
  {
    id: 11,
    title: 'Spa',
  },
  {
    id: 12,
    title: 'Hiking',
  },
  {
    id: 13,
    title: 'Swimming',
  },
  {
    id: 14,
    title: 'Museums',
  },
  {
    id: 15,
    title: 'Hiking',
  },
  {
    id: 16,
    title: 'Spa',
  },
  {
    id: 17,
    title: 'Hiking',
  },
  {
    id: 18,
    title: 'Swimming',
  },
  {
    id: 19,
    title: 'Museums',
  },
  {
    id: 20,
    title: 'Spa',
  },
];
