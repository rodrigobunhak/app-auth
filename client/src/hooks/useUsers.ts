import { useState, useEffect } from 'react';
import { userService } from '../services/Api';

export type User = {
  id: string;
  name: string;
  email: string;
}

export type ApiError = {
  message: string;
  status?: number;
}

export type Filters = {
  name: string;
  email: string;
};

export const useUsers = (pageSize: number = 3) => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [error, setError] = useState<string>('');
  const [filters, setFilters] = useState<Filters>({ name: "", email: "" });

  useEffect(() => {
    const fetchUsers = async (): Promise<void> => {
      try {
        const filtersParam = JSON.stringify(filters);
        const data = await userService.getUsers(currentPage, pageSize, filtersParam);
        if (Array.isArray(data.users)) {
          setUsers(data.users);
          setTotalPages(data.totalPages);
        } else {
          throw new Error('Invalid response: Expected an array of users');
        }
      } catch (err) {
        const apiError = err as ApiError;
        setError(apiError.message);
      }
    };

    fetchUsers();
  }, [currentPage, filters, pageSize]);

  return { users, currentPage, totalPages, error, filters, setCurrentPage, setFilters };
};