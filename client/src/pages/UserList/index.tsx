import { useEffect, useState } from "react";
import { userService } from "../../services/Api";
import { Container, HeaderItem, Input, ListHeader, PageButton, PaginationContainer, UserData, UserItem, UserList } from "./styles";
import { Header } from "../../components/Header";
import { useTranslation } from "react-i18next";

type User = {
  id: string;
  name: string;
  email: string;
}

type ApiError = {
  message: string;
  status?: number;
}

type Filters = {
  name: string;
  email: string;
};

export function UsersList(): JSX.Element {
  const { t } = useTranslation();
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [error, setError] = useState<string>('');
  const [filters, setFilters] = useState<Filters>({ name: "", email: "" });

  useEffect(() => {
    const fetchUsers = async (): Promise<void> => {
      try {
        const filtersParam = JSON.stringify(filters);
        const data = await userService.getUsers(currentPage, 3, filtersParam);
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
  }, [currentPage, filters]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
      <PaginationContainer>
        <PageButton
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          {t('Previous')}
        </PageButton>
        {pages.map((page) => (
          <PageButton
            key={page}
            onClick={() => handlePageChange(page)}
            disabled={page === currentPage}
            active={page === currentPage}
          >
            {page}
          </PageButton>
        ))}
        <PageButton
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          {t('Next')}
        </PageButton>
      </PaginationContainer>
    );
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  return (
    <>
      <Header />
      <Container>
        <UserList>
          <ListHeader>
            <HeaderItem>
              <Input
                type="text"
                name="name"
                placeholder={t('Name')}
                value={filters.name}
                onChange={handleFilterChange}
              />
            </HeaderItem>
            <HeaderItem>
              <Input
                type="text"
                name="email"
                placeholder="Email"
                value={filters.email}
                onChange={handleFilterChange}
              />
            </HeaderItem>
          </ListHeader>
          {users.map((user) => (
            <UserItem key={user.id}>
              <UserData>{user.name}</UserData>
              <UserData>{user.email}</UserData>
            </UserItem>
          ))}
        </UserList>
        {renderPagination()}
      </Container>
    </>
  );
}