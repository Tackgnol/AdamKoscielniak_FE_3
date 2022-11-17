export interface ApiResponse<T> {
    Value: T
}

export interface Job {
    Id: number
    time: string
    Employer: string
    Position: string
    Responsibilities: string[]
    Skills: string[]
    Projects: Project[]
}

export interface School {
    Course: string
    Time: string
    Faculty: string
    GradeEu: number
    GradeUs: string
    Id: number
    Level: string
    Photos: string[]
    School: string
    Thesis: string
}

export interface Project {
    Title: string
    Role: string
    Description: string
    Result: string
}

export interface SkillGroup {
    Name: string
    Skills: Skill[]
}

export interface Skill {
    id: string
    Name: string
    Proficiency: number
}

export interface Hobby {
    Name: string
    Description: string
    FAIcon: string
}

export interface Count {
    faIcon: string
    name: string
    count: number
}

export interface LoginCookie {
    token: string
    refreshToken: string
}
