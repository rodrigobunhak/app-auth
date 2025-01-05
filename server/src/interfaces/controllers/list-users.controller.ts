import { ListUsersUseCase } from "@/application/usecases/list-users.usecase";
import { SignInUserUseCase } from "@/application/usecases/sign-in-user.usecase";
import { Request, Response } from "express";
import { inject, injectable } from "inversify";

@injectable()
export class ListUsersController {
  constructor(
    @inject("ListUsersUseCase")
    private listUsersUseCase: ListUsersUseCase
  ) {}

  async listUsers(req: Request, res: Response): Promise<void> {
    try {
      console.log(req.query);
      const page = Number(req.query.page) || 1; // Usa 1 se `page` for inválido
      const limit = Number(req.query.limit) || 10; // Usa 10 se `limit` for inválido
      const filters = req.query.filters ? JSON.parse(req.query.filters as string) : undefined;
      console.log(page, limit, filters);
      const success = await this.listUsersUseCase.execute({ page, limit, filters });
      if (success) {
        res.status(200).json(success);
      } else {
        res.status(400).json({ message: "Failed to list users" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}