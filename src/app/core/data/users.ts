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
                description: 'Covers theories, principles, and practices that are designed to enable project managers and other related stakeholders as they assess, choose, and use appropriate frameworks, tools, techniques, and metrics to guide software projects toward successful completion or termination.',
		content: 'Project planning, including topics such as ideation, market research, feasibility, requirements gathering, risk management, architectural design, budgeting and staffing, and top-level scheduling'
            },
            {
                id: 2,
                courseNumber: 'CSS 533',
                name: 'Distributed Computing',
                description: 'Builds on knowledge of advanced programming methodologies in distributed computing. Topics include message passing, indirect communication, remote method invocation, distributed objects, multi-tier server-side programming, peer-to-peer systems, distributed synchronization, distributed check-pointing, and replica management.',
		content: 'Introduction to distributed computing models; Clock synchronization; Message Ordering and Group Commuication; Termination Detection Algorithms; Reasoning with Knowledge; Distributed Mutual Exclusion Algorithms; Deadlock Detection Algorithms; Global Predicate Detection; Distributed Shared Memory; Checkpointing and Rollback Recovery; Consensus and Agreement; Failure Detectors; Distributed file servers; Distributed programming environments: Communication primitives, selected case studies'
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
                description: 'Covers theories, principles, and practices that are designed to enable project managers and other related stakeholders as they assess, choose, and use appropriate frameworks, tools, techniques, and metrics to guide software projects toward successful completion or termination.',
		content: 'Project planning, including topics such as ideation, market research, feasibility, requirements gathering, risk management, architectural design, budgeting and staffing, and top-level scheduling'
            },
            {
                id: 2,
                courseNumber: 'CSS 533',
                name: 'Distributed Computing',
                description: 'Builds on knowledge of advanced programming methodologies in distributed computing. Topics include message passing, indirect communication, remote method invocation, distributed objects, multi-tier server-side programming, peer-to-peer systems, distributed synchronization, distributed check-pointing, and replica management.',
		content: 'Introduction to distributed computing models; Clock synchronization; Message Ordering and Group Commuication; Termination Detection Algorithms; Reasoning with Knowledge; Distributed Mutual Exclusion Algorithms; Deadlock Detection Algorithms; Global Predicate Detection; Distributed Shared Memory; Checkpointing and Rollback Recovery; Consensus and Agreement; Failure Detectors; Distributed file servers; Distributed programming environments: Communication primitives, selected case studies'
            },
        ]
    }
]