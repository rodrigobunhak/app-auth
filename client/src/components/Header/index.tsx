import { useAuth } from "../../contexts/AuthContext";
import { Button } from "../../styles/components/Button";
import { HeaderWrapper, Title, UserInfo, UserName } from "./styles";

export function Header(): JSX.Element {
  const { user, logout, isAuthenticated } = useAuth();
  
  return (
    <HeaderWrapper>
      <Title>Auth.</Title>
      {isAuthenticated && (
        <UserInfo>
          <UserName>
            Logged in as: <strong>{user?.name}</strong>
          </UserName>
          <Button size="small" onClick={logout}>Logout</Button>
        </UserInfo>
      )}
    </HeaderWrapper>
  );
}