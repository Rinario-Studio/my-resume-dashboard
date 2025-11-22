export interface Highlight {
    title: string;
    text: string;
}

export interface Proposal {
    problem: string;
    insight: string;
    solution: string;
}

export interface Architecture {
    description: string;
    diagram: string;
}

export interface Content {
    proposal?: Proposal;
    architecture?: Architecture;
    features?: string[];
}

export interface GalleryItem {
    title: string;
    desc: string;
    image: string;
}

export interface ProjectData {
    id: number;
    title: string;
    role: string;
    status: string;
    statusColor: string;
    desc: string;
    tech: string[];
    linkText: string;
    tag?: string;
    name?: string;
    subtitle?: string;
    cta?: string;
    highlights?: {
        [key: string]: Highlight;
    } | null;
    content?: Content;
    gallery?: GalleryItem[];
}

export interface Skill {
    name: string;
    value: number;
    fullMark: number;
}

export interface Stat {
    title: string;
    value: string;
    sub: string;
}

export interface Step {
    stage: string;
    title: string;
    desc: string;
}

export interface ResumeContent {
    role: string;
    nav: {
        overview: string;
        projects: string;
        design: string;
    };
    hero: {
        name: string;
        role: string;
        headline: string;
        description: string;
    };
    science: {
        tag: string;
        title: string;
        description: string;
    };
    tech: {
        title: string;
        subtitle: string;
    };
    hire: {
        title: string;
        subtitle: string;
        download: string;
        book: string;
    };
    network: {
        title: string;
        subtitle: string;
    };
    stats: {
        migration: Stat;
        security: Stat;
        design: Stat;
    };
    skills: Skill[];
    projects: ProjectData[];
    learning: {
        title: string;
        steps: Step[];
    };
    designLab: {
        title: string;
        desc: string;
        legacy: Stat; // Reusing Stat structure as it fits title/sub/desc pattern roughly, or define new if strictly different
        soft: Stat;
    };
}
