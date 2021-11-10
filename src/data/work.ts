

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
    time: 'August 2020 - Present',
    detailList: [
      "Key person for Bybit's content delivery platform.",
      'Revamp and build blog powered by ContentStack, NextJS, AWS Amplify which has auto scaling capability to serve millions of users.',
      'Build an internal admin platform(Client Communication) using ReactJS(NextJS) and Golang. The platform is linked to SendGrid for email delivery which delivers more than 20,000,000 emails every month.',
    ],
  },
  {
    title: 'Frontend Sub Lead',
    company: {
      name: 'TNG Digital (Alipay X TNG)',
      link: 'https://www.tngdigital.com.my/',
    },
    time: 'May 2019 - July 2020',
    detailList: [
      'Mentored a team of 3 local developers and 6 outsource developers.',
      'Accomplish 200,000 newly registered users and 800,000 EKYC users in 1 day after shipping E-tunai program.',
      'Integrate payment page with Lazada that generates 8,000,000 revenue during 11/11 big sale.',
      'Deceased development time by 50% by writing a script to generate template and creating UI component for daily promotions.',
    ],
  },
];
