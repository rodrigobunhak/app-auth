import { ListUsersUseCase } from "@/application/usecases/list-users.usecase";
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
      const page = Number(req.query.page) || 1;
      const limit = Number(req.query.limit) || 10;
      const filters = req.query.filters ? JSON.parse(req.query.filters as string) : undefined;
      const success = await this.listUsersUseCase.execute({ page, limit, filters });
      if (success) {
        res.status(200).json(success);
      } else {
        res.status(400).json({ message: "Failed to list users" });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }
}