namespace Express {
    type User = {
        email: string;
        tokenId: string;
        role: string;
    };

    interface Request {
        user?: User | undefined;
    }
}
