export interface Employee {
  name: string;
  designation?: string;
  dateOfJoining?: string;
  salary?: number;
  role?: string;
  gender?: string;
  companyName?: string;
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
