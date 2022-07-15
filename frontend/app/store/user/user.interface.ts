import { IUser } from "shared/types/user.types";

export interface IUserStete {
    email: string
    isAdmin: boolean;
}

export interface ITokens {
    accessToken: string
    refreshToken: string
}

export interface IInitialState {
    user: IUserStete | null
    isLoading: boolean
}

export interface IsEmailPassword {
    email: string
    password: string
}

export interface IAuthResponse extends ITokens {
    user: IUser & {
        isAdmin: boolean
    }
}