import { ApplicationError } from "./application.error";

export class InvalidCredentialsError extends ApplicationError {
  constructor() {
    super("Invalid credential", "INVALID_CREDENTIALS");
  }
}

export class EmailAndPasswordRequiredError extends ApplicationError {
  constructor() {
    super("Email and password are required", "EMAIL_PASSWORD_REQUIRED");
  }
}

export class UserAlreadyExistsError extends ApplicationError {
  constructor() {
    super("User already exists", "USER_ALREADY_EXISTS");
  }
}