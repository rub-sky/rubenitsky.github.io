import {Education, Classes} from '../../app/model/education.model';

const education: Array<Education> = [
    {
        institution: 'Portland State University',
        state: 'OR',
        yearFinished: new Date('2016'),
        degrees: ['B.S. in Computer Science']
    },
    {
        institution: 'Clark College',
        state: 'WA',
        yearFinished: new Date('2012'),
        degrees: ['AAS Transfer Degree']
    },
    {
        institution: 'Renton Technical College',
        state: 'WA',
        yearFinished: new Date('2003'),
        degrees: ['AAS Degree in Computer Science']
    }
]

const classes: Array<Classes> = [
    { title: 'Discrete Data Structures', skills: ['C++'], category: 'Computer Science' },
    { title: 'Programming Systems', skills: ['C++'], category: 'Computer Science' },
    { title: 'Algorithms', category: 'Computer Science' }, { title: 'Compiler Design', skills: ['Java'], category: 'Computer Science' },
    { title: 'Parallel Programming', skills: ['C++', 'Chapel'], category: 'Computer Science' },
    { title: 'Computer Vision', skills: ['C++'], category: 'Computer Science' },
    { title: 'Calculus Series', category: 'Science / Mathematics' },
    { title: 'Applied Linear Algebra', category: 'Science / Mathematics' },
    { title: 'Physics Series (Calculus)', category: 'Science / Mathematics' },
    { title: 'Chemistry', category: 'Science / Mathematics' },
    { title: 'Computational Theory', category: 'Science / Mathematics' },
    { title: 'Digital Circuits', category: 'Science / Mathematics' },
    { title: 'Computer Networks', category: 'Other' },
    { title: 'Operating Systems', category: 'Other' },
    { title: 'Open Source (Java)', category: 'Other' },
    { title: 'Ethics', category: 'Other' },
    { title: 'Philosophy', category: 'Other' }
]
