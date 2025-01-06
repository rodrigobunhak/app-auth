import { User } from "@/domain/entities/user.entity";
import { UserRepository } from "@/domain/repositories/user.repository";
import { injectable, inject } from "inversify";
import { UserAlreadyExistsError } from "../errors/user.errors";

interface SignUpUserUseCaseInput {
  name: string;
  email: string;
  password: string;
}

@injectable()
export class SignUpUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: UserRepository
  ) {}

  async execute(input: SignUpUserUseCaseInput): Promise<boolean> {
    const userExist = await this.userRepository.findByEmail(input.email);
    if (userExist) throw new UserAlreadyExistsError()
    const user = User.create({
      name: input.name,
      email: input.email,
      password: input.password,
    })
    return await this.userRepository.save(user);
  }
}