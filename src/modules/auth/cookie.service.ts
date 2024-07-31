import { Response } from 'express';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CookieService {
    static tokenKey = 'access-token';

    setToken(res: Response, token: string) {
        res.cookie(CookieService.tokenKey, token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
    }

    removeToken(res: Response) {
        res.clearCookie(CookieService.tokenKey);
    }
}
