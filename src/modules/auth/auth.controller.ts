import { Response } from 'express';
import { Body, Controller, Get, HttpCode, HttpStatus, Post, Res } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { GetSessionInfoDto, SignInBodyDto, SignUpBodyDto } from './dto';
import { AuthService } from './auth.service';
import { CookieService } from './cookie.service';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
        private cookieService: CookieService,
    ) {}

    @Post('sign-up')
    @ApiCreatedResponse()
    async signUp(@Body() body: SignUpBodyDto, @Res() res: Response) {
        const { accessToken } = await this.authService.signUp(body.email, body.password);

        this.cookieService.setToken(res, accessToken);
    }

    @Post('sign-in')
    @ApiOkResponse()

    //TODO: why do we do this?
    @HttpCode(HttpStatus.OK)
    signIn(@Body() body: SignInBodyDto) {
        return this.authService.signIn(body.email, body.password);
    }

    @Post('sign-out')
    @ApiOkResponse()
    @HttpCode(HttpStatus.OK)
    segnOut() {}

    @Get('session')
    @ApiOkResponse({ type: GetSessionInfoDto })
    getSessionInfo() {
        return null;
    }
}
