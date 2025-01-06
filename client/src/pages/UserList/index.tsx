import { UserData, UserItem, UserList } from "./styles";
import { Header } from "../../components/Header";
import { useUsers } from "../../hooks/useUsers";
import { UserFilters } from "../../components/UserFilters";
import { Pagination } from "../../components/Pagination";

export function UsersList(): JSX.Element {
  const { 
    users, 
    currentPage, 
    totalPages, 
    error, 
    filters, 
    setCurrentPage, 
    setFilters 
  } = useUsers();

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  return (
    <>
      <Header />
      <UserList>
        <UserFilters filters={filters} onFilterChange={handleFilterChange} />
        {users.map((user) => (
          <UserItem key={user.id}>
            <UserData>{user.name}</UserData>
            <UserData>{user.email}</UserData>
          </UserItem>
        ))}
      </UserList>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
}