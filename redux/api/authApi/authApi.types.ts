export interface ILoginProps {
    otp?: string;
    email: string;
    password: string;
}

export interface ISignupProps {
    otp?: string;
    fname: string;
    lname: string;
    phone: string;
    email: string;
    password: string;
    username: string;
    occupation: string;
    city: string;
    address: string;
    ageRange: string;
    gender: string;
}

export interface IUserAuthOtp {
    email?: string;
    phone?: string;
}
