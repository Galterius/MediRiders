import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { UserInput } from "src/modules/user/dto/user.input";
import { AuthService } from "./auth.service";
import { LoginResponseDTO } from "./dto/login-response.dto";
import { LoginInput } from "./dto/login.input";

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => LoginResponseDTO)
  async login(@Args() loginData: LoginInput) {
    return this.authService.login(loginData);
  }

  @Mutation(() => LoginResponseDTO)
  async signup(@Args() registrationData: UserInput) {
    return this.authService.signup(registrationData);
  }
}
