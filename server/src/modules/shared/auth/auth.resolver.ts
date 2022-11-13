import { UseGuards } from "@nestjs/common";
import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { AuthService } from "./auth.service";
import { LoginResponseDTO } from "./dto/login-response.dto";
import { LoginInput } from "./dto/login.input";
import { LocalAuthGuard } from "./guards/local-auth.guard";

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => LoginResponseDTO)
  @UseGuards(LocalAuthGuard)
  async login(@Args("loginData") loginData: LoginInput) {
    return this.authService.login(loginData);
  }
}
