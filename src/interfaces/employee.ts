export interface Employee {
  department: string;
  designation?: string;
  dateOfJoining?: string;
  salary?: number;
  role?: string;
  gender?: string;
  companyName?: string;
  age?: Number,
}

export interface Register {
  name: string;
  username: string;
  companyEmail: string;
  password: string;
}

export interface Login {
  companyEmail: string;
  password: string;
}
