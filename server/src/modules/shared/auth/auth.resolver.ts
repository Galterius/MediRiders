import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { AuthService } from "./auth.service";
import { LoginResponseDTO } from "./dto/login-respons.dto";
import { LoginInput } from "./dto/login.input";

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => LoginResponseDTO)
  async login(@Args("loginData") loginData: LoginInput) {
    return this.authService.login(loginData);
  }
}
