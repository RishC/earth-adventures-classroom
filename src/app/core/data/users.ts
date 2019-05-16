import { User } from './user';
export const USERS: User[] = [
    {
        id: 1,
        username: 'student',
        password: '123',
        courses: [
            {
                id: 1,
                courseNumber: 'CSS 566',
                name: 'Software Management',
                description: 'Covers theories, principles, and practices that are designed to enable project managers and other related stakeholders as they assess, choose, and use appropriate frameworks, tools, techniques, and metrics to guide software projects toward successful completion or termination.'
            },
            {
                id: 2,
                courseNumber: 'CSS 533',
                name: 'Distributed Computing',
                description: 'Builds on knowledge of advanced programming methodologies in distributed computing. Topics include message passing, indirect communication, remote method invocation, distributed objects, multi-tier server-side programming, peer-to-peer systems, distributed synchronization, distributed check-pointing, and replica management.'
            },
        ]
    },
    {
        id: 2,
        username: 'teacher',
        password: '123',
        courses: [
            {
                id: 1,
                courseNumber: 'CSS 566',
                name: 'Software Management',
                description: 'Covers theories, principles, and practices that are designed to enable project managers and other related stakeholders as they assess, choose, and use appropriate frameworks, tools, techniques, and metrics to guide software projects toward successful completion or termination.'
            },
            {
                id: 2,
                courseNumber: 'CSS 533',
                name: 'Distributed Computing',
                description: 'Builds on knowledge of advanced programming methodologies in distributed computing. Topics include message passing, indirect communication, remote method invocation, distributed objects, multi-tier server-side programming, peer-to-peer systems, distributed synchronization, distributed check-pointing, and replica management.'
            },
        ]
    }
]