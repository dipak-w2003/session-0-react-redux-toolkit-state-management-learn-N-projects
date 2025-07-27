export type IProjectRole = 
  | "Fullstack Developer"
  | "Frontend Developer"
  | "Backend Developer"
  | "UI/UX Designer"
  | "Product Designer"
  | "DevOps Engineer"
  | "Database Administrator"
  | "Project Manager"
  | "Scrum Master"
  | "QA Engineer"
  | "Software Architect"
  | "Technical Lead"
  | "Security Engineer"
  | "Mobile Developer"
  | "AI/ML Engineer"
  | "Content Writer"
  | "Business Analyst"
  | "Product Owner"
  | "Intern"
  | "Other";

export interface IProjectDescription {
  projectName: string | null;
  projectDate: {
    projectStartedDate: string;
    projectFinishDate: string;
  };
  projectMembers?: {
    memberName: string;
    memberRole: IProjectRole;
    memberHandles?: {
      Github?: string;
      Phone?: string;
      Facebook?: string;
      X?: string;
      Reddit?: string;
      Telegram?: string;
      WhatsApp?: string;
      LinkedIn?: string;
    };
  }[];
  projectSummary: string;
}
