import {Position} from '../../app/model/position.model';

const experience: Array<Position> = [
    {
        company: 'Total Web Services',
        title: 'Web Developer',
        startDate: new Date('Apr. 2013'),
        endDate: new Date('Apr. 2015'),
        experience: [
            'Created data driven pages and controllers for an ASP.net MVC 3 website',
            'Created RDLC reports by querying a SQL Server database and using LINQ to filter data',
            'Optimized SQL Server database tables through normalizing to minimize data redundancy',
            'Wrote algorithms to calculate customer’s cost of service using PHP and MySQL',
            'Created dynamic tables to filter and sort data using JQuery and Ext.js'
        ],
        accomplishments: [],
        isVolunteering: false
    },
    {
        company: 'Pulse Engineering Inc.',
        title: 'Shipping Lead',
        startDate: new Date('Mar. 2007'),
        endDate: new Date('Sept. 2010'),
        experience: [
            'Provided training for shipping, receiving, materials processes, and forklift operation',
            'Created internal shipment database to streamline the internal shipping process using MS Access',
            'Wrote documentation and held training sessions for all staff on how to utilize the internal shipment database',
            'Prepared weekly metric reports for senior management analysis',
            'Automated weekly metrics reports, reducing report compile time by 75%',
            'Created and managed all material handling quality and procedure documentation'
        ],
        accomplishments: [],
        isVolunteering: false
    },
    {
        company: 'Home of God Church',
        title: 'Operator/Technician',
        startDate: new Date('May 2008'),
        endDate: new Date('Present'),
        experience: [
            'Implemented video studio computer, mixer, video distribution and software from live streaming',
            'Maintained and repaired hardware and software of five computer systems',
            'Wrote procedure and settings documentation for video studio hardware and software settings',
            'Administered the live stream Youtube account streaming events, videos, and users',
            'Contributed to translating theological texts from Russian to English',
            'Created announcement and video graphics using Adobe Photoshop and Gimp'
        ],
        accomplishments: [],
        isVolunteering: true
    }
]

// OverView for Jama - PSU Capstone Project
// Mar. 2016 – Sept. 2016

// An open source project giving a visual rendition of a Jama Software project’s status and contents using existing data to highlight what is important.

//     Configured D3 force graph to take in JSON data and display a cyclical graph
//     Created views and routes using Node.js, Express, HTML5, JavaScript, and EJS
//     Tested routes, views, and function code with unit and integration tests using Mocha.js and Chai.js
//     Wrote project plan documentation to outline project schedule, deliverables and other specifics
//     Used Agile and Scrum methodologies to work in weekly sprints to meet deliverables
