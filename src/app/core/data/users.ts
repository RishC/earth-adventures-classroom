import { User } from './user';
export const USERS: User[] = [
    {
        id: 1,
        username: 'student',
        password: '123',
        type: 'student',
		courses: [
            {
                id: 1,
                courseNumber: 'CSS 566',
                name: 'Software Management',
                overallGrade: 100.0,
                description: 'Covers theories, principles, and practices that are designed to enable project managers and other related stakeholders as they assess, choose, and use appropriate frameworks, tools, techniques, and metrics to guide software projects toward successful completion or termination.',
				content : [
							{ clas: 'Class1: Use theoretical frameworks to evaluate and assess the applicability of management practices and techniques to different types of software projects.' },
							{ clas: 'Class2: Understand and use a set of tools and techniques for managing a software project,Leverage appropriate quality management theoretical frameworks and practices.' },
							{ clas: 'Class3: Choosing and justify a particular set of metrics to use to assess the quality of a software project.' },
            ],
          assignments: [
                { name: 'CSS 566 Midterm Exam',
                  grade: 95.0,
                  dueDate: '2019-05-16T22:00'
                },
                { name: 'CSS 566 Final Exam',
                  grade: -1,
                  dueDate: '2019-06-06T22:00'
                }
              ]
            },
            {
                id: 2,
                courseNumber: 'CSS 533',
                name: 'Distributed Computing',
                overallGrade: 100.0,
                description: 'Builds on knowledge of advanced programming methodologies in distributed computing. Topics include message passing, indirect communication, remote method invocation, distributed objects, multi-tier server-side programming, peer-to-peer systems, distributed synchronization, distributed check-pointing, and replica management.',
				content: [
							{ clas: 'Class1: Introduction to Distributed Computing.' },
							{ clas: 'Class2: Learn about the MapReduce paradigm, and how it can be used to write distributed programs that analyze data represented as key-value pairs.' },
							{ clas: 'Class3: Learn about client-server programming, and how distributed Java applications can communicate with each other using sockets.' },
				 ],
                 assignments: [
                   { name: 'CSS 533 Midterm Exam',
                     grade: 88.0,
                     dueDate: '2019-05-17T20:00'
                   },
                   { name: 'CSS 533 Final Exam',
                     grade: -1,
                     dueDate: '2019-06-12T20:00'
                   }
                 ]
            },
        ]
    },
    {
        id: 2,
        username: 'teacher',
        password: '123',
        type: 'teacher',
        courses: [
            {
                id: 1,
                courseNumber: 'CSS 566',
                name: 'Software Management',
                overallGrade: -1,
                description: 'Covers theories, principles, and practices that are designed to enable project managers and other related stakeholders as they assess, choose, and use appropriate frameworks, tools, techniques, and metrics to guide software projects toward successful completion or termination.',
				content: [
							{ clas: 'Class1: Use theoretical frameworks to evaluate and assess the applicability of management practices and techniques to different types of software projects' },
							{ clas: 'Class2: Understand and use a set of tools and techniques for managing a software project,Leverage appropriate quality management theoretical frameworks and practices.' },
							{ clas: 'Class3: Choosing and justify a particular set of metrics to use to assess the quality of a software project.' },
				 ],
         assignments: [
               { name: 'Grade CSS 566 Midterm Exam',
                 grade: -1,
                 dueDate: '2019-05-20T24:00'
               },
               { name: 'Grade CSS 566 Final Exam',
                 grade: -1,
                 dueDate: '2019-06-10T24:00'
               }
             ]
            },
            {
                id: 2,
                courseNumber: 'CSS 533',
                name: 'Distributed Computing',
                overallGrade: -1,
                description: 'Builds on knowledge of advanced programming methodologies in distributed computing. Topics include message passing, indirect communication, remote method invocation, distributed objects, multi-tier server-side programming, peer-to-peer systems, distributed synchronization, distributed check-pointing, and replica management.',
				content: [
							{ clas: 'Class1: Introduction to Distributed Computing.' },
							{ clas: 'Class2: Learn about the MapReduce paradigm, and how it can be used to write distributed programs that analyze data represented as key-value pairs.' },
							{ clas: 'Class3: Learn about client-server programming, and how distributed Java applications can communicate with each other using sockets.' },
				 ],
         assignments: [
               { name: 'Grade CSS 533 Midterm Exam',
                 grade: -1,
                 dueDate: '2019-05-21T24:00'
               },
               { name: 'Grade CSS 533 Final Exam',
                 grade: -1,
                 dueDate: '2019-06-16T24:00'
               }
             ]

            },
        ]
    }
]
