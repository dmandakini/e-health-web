import { UserResponse } from "./user-response.model";
import { User } from "./user.model";

export class PatientDetail {
    patientId: string;
    firstName: string;
    lastName: string;
    gender: string;
    email: string;
    address: string;
    mobileNumber: string;
    user: UserResponse;
  }