import logo4 from './logo4.svg'
import logo4_1 from './logo4_1.svg'
import logo_icon from './logo_icon.svg'
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import star_icon from './star_icon.svg'
import rating_star from './rating_star.svg'
import sample_img_1 from './sample_img_1.png'
import sample_img_2 from './sample_img_2.png'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import step_icon_1 from './step_icon_1.svg'
import step_icon_2 from './step_icon_2.svg'
import step_icon_3 from './step_icon_3.svg'
import email_icon from './email_icon.svg'
import lock_icon from './lock_icon.svg'
import cross_icon from './cross_icon.svg'
import star_group from './star_group.png'
import credit_star from './credit_star.svg'
import profile_icon from './profile_icon.png'
import sample_img_3 from './sample_img_3.png'
import sample_img_4 from './sample_img_4.png'
import sample_img_5 from './sample_img_5.png'
import sample_img_6 from './sample_img_6.png'
import sample_img_0 from './sample_img_0.png'

export const assets = {
    logo4,
    logo_icon,
    facebook_icon,
    instagram_icon,
    twitter_icon,
    star_icon,
    rating_star,
    sample_img_1,
    sample_img_2,
    email_icon,
    lock_icon,
    cross_icon,
    star_group,
    credit_star,
    profile_icon,
    sample_img_3,
    sample_img_4,
    sample_img_5,
    sample_img_6,
    sample_img_0,
    logo4_1
}

export const stepsData = [
    {
      title: 'Describe Your Vision',
      description: 'Type a phrase, sentence, or paragraph that describes the image you want to create.',
      icon: step_icon_1,
    },
    {
      title: 'Watch the Magic',
      description: 'Our AI-powered engine will transform your text into a high-quality, unique image in seconds.',
      icon: step_icon_2,
    },
    {
      title: 'Download & Share',
      description: 'Instantly download your creation or share it with the world directly from our platform.',
      icon: step_icon_3,
    },
  ];

export const testimonialsData = [
    {
        image:profile_icon,
        name:'Pragya Tiwari',
        role:'Frontend Developer',
        stars:5,
        text:`I’ve been using PixScribe for nearly two months, primarily for Instagram, and it has been incredibly creative-friendly, making my design much easier.`
    },
    {
        image:profile_icon,
        name:'Saurabh Singh',
        role:'Full Stack Developer',
        stars:4,
        text:`As a full-stack developer, I’ve used PixScribe for nearly two years, and it’s streamlined my workflow by instantly turning concepts into polished visuals.`
    },
    {
        image:profile_icon,
        name:'Nitin Gangwar',
        role:' Content Creator',
        stars:5,
        text:`PixScribe has been my go-to for nearly two years, turning ideas into visuals effortlessly and making my content creation much smoother.`
    },
]

export const plans = [
    {
      id: 'Basic',
      price: 10,
      credits: 150,
      desc: 'Best for personal use.'
    },
    {
      id: 'Advanced',
      price: 50,
      credits: 1000,
      desc: 'Best for business use.'
    },
    {
      id: 'Business',
      price: 250,
      credits: 5000,
      desc: 'Best for enterprise use.'
    },
  ]