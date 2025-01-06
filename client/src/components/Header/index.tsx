import { useAuth } from "../../contexts/AuthContext";
import { HeaderWrapper, Title, UserInfo, UserName } from "./styles";
import { DoorOpen } from "@phosphor-icons/react";

export function Header(): JSX.Element {
  const { user, logout, isAuthenticated } = useAuth();
  
  return (
    <HeaderWrapper>
      <Title>Auth.</Title>
      {isAuthenticated && (
        <UserInfo>
          <UserName>
            {user?.name}
          </UserName>
          <DoorOpen size={24} onClick={logout} weight="fill"/>
        </UserInfo>
      )}
    </HeaderWrapper>
  );
}