

export interface IWorkItem {
  title: string;
  company: {
    name: string;
    link: string;
  };
  time: string;
  detailList: string[];
}

export const WORK_ITEMS: IWorkItem[] = [
  {
    title: 'Senior Frontend Engineer',
    company: {
      name: 'Bybit',
      link: 'https://www.bybit.com',
    },
    time: 'Aug. 2020 - Present',
    detailList: [
      "Key person for Bybit's content delivery platform, revamp and build blog powered by ContentStack, NextJS, AWS Amplify which has auto scaling capability to serve millions of users.",
      'Primarily handle API layers for competition system that can handle at least 30K participants with 5 different cryptocurrencies. Built using gRPC, Protobuf, Golang.',
      'Build an internal admin platform(Client Communication) using ReactJS(NextJS) and Golang. The platform is linked to SendGrid for email delivery which delivers more than 20,000,000 emails every month.',
    ],
  },
  {
    title: 'Frontend Sub Lead',
    company: {
      name: 'TNG Digital (Alipay X TNG)',
      link: 'https://www.tngdigital.com.my/',
    },
    time: 'Sep. 2019 - Jul. 2020',
    detailList: [
      'Mentored a team of 3 local developers and 6 outsource developers.',
      'Accomplish 200,000 newly registered users and 800,000 EKYC users in 1 day after shipping E-tunai program.',
      'Integrated payment page with Lazada that generates 8,000,000 revenue during 11/11 big sale.',
      'Implemented coding standard and review code for every micro frontend projects which improves code readability and reduces redundant code.',
    ],
  },
  {
    title: 'Frontend Specialist',
    company: {
      name: 'TNG Digital (Alipay X TNG)',
      link: 'https://www.tngdigital.com.my/',
    },
    time: 'May 2019 - Jul. 2020',
    detailList: [
      'Deceased development time by half by writing a script to generate template and creating UI component for daily promotions.',
      'Developed Money Back Guaranteed page that double EKYC rate on release.',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: {
      name: 'PhoneSpeak.com',
      link: 'https://www.phonespeak.com/home',
    },
    time: 'Nov. 2018 - Apr. 2019',
    detailList: [
      'Increased BabyShark team’s productivity by coaching the other 3 teammates, including the team lead, on frontend development.',
      'Successfully proposed and implemented a better approach for the message module.',
    ],
  },
  {
    title: 'Web Developer',
    company: {
      name: 'Vilor Berhad',
      link: 'https://vilor.com/en/',
    },
    time: 'Apr. 2017 - Oct. 2018',
    detailList: [
      'Eased the process of submitting issues/tickets for co-working space members and MIS team’s efficiency to resolve them.',
      'Improved the management’s ability to keep track co-working space’s revenue',
    ],
  },
  {
    title: 'System Developer',
    company: {
      name: 'Kintetsu Global I.T., Inc',
      link: 'https://www.kwe.com/',
    },
    time: 'Dec. 2016 - Feb. 2017',
    detailList: [
      'Implemented new functionalities for the freight system which is used by the company operators around the world.',
      'Work on Java server daily. Tasks include source developing, data mapping with Oracle-based database, business logic implementation.',
    ],
  },
];
