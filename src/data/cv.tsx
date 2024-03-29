

import { CVGroupType } from '../app/components/CVGroup'

const cv: CVGroupType[] = [
  {
    id: 'experiences',
    name: 'Experiences',
    list: [
      { id: 'Data Analyst',
        where: 'Pvcombank',
        url: 'https://www.pvcombank.com.vn/',
        title: 'Data Analyst',
        date: '2023 — current',
        activity: [
          '-Write jobs using AWS Glue to aggregate data from the raw layer to the process and pre-car layers.',
          '-Maintain SAP BI reports about Customer, Finance Accounting, Risk Management, Foreign Trade and Foreign Exchange',
          '-Analyze the customer journey, find out broken events, and suggest ways to improve the journey'
        ],
        tech: ['AWS', 'Athena', 'git', 'Glue', 'SAP BO', 'QuickSigh']
      },
      {
        id: 'Data Analyst',
        where: 'Dagoras',
        url: 'https://www.facebook.com/dagorasjsc/',
        title: 'Data Analyst',
        date: '2022 — 2023',
        activity: [
          '-Creating monthly reports on social listening about an educational event of the Top 1 University in Vietnam',
          '-Responsible for data visualization for requirements on tracking traffic using Power BI, and Google Data Studio'
        ],
        tech: ['SQL', 'Power BI', 'Metabase', 'Powerpoint']
      },
    ]
  },
  {
    id: 'educations',
    name: 'Education',
    list: [
      {
        id: 'self-learning-ds',
        where: 'Self-learning',
        logo: SelfLearnLogo,
        title: 'Data Science',
        date: '2019 — current',
        activity: [
          "I've been learning myself Data Science using online courses (Coursera, deeplearning.ai, Dataquest, Fastai, Oxford) and real projects."
        ]
      },
      {
        id: 'Academy of Finance',
        where: 'Academy of Finance',
        logo: DHSPLogo,
        url: 'https://hvtc.edu.vn/',
        title: 'Bachelor in Accounting',
        date: '2018 — 202',
        activity: [
          'I was taught to become a auditor. I studied a lot in accounting and auditing.'
        ]
      }
    ]
  }
]

export default cv
