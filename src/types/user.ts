export type User = {
    id?: number;
    name: string;
    email: string;
    password?: string;
    role: UserRole;
};

export const userRole = {
    Staff: 2,
    Admin: 3,
} as const;

export type UserRole = (typeof userRole)[keyof typeof userRole];
