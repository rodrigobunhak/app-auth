import { useTranslation } from "react-i18next";
import { HeaderItem, Input, ListHeader } from "./styles";

export type Filters = {
  name: string;
  email: string;
};

type UserFiltersProps = {
  filters: Filters;
  onFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const UserFilters = ({ filters, onFilterChange }: UserFiltersProps) => {
  const { t } = useTranslation();

  return (
    <ListHeader>
      <HeaderItem>
        <Input
          type="text"
          name="name"
          placeholder={t('Name')}
          value={filters.name}
          onChange={onFilterChange}
        />
      </HeaderItem>
      <HeaderItem>
        <Input
          type="text"
          name="email"
          placeholder="Email"
          value={filters.email}
          onChange={onFilterChange}
        />
      </HeaderItem>
    </ListHeader>
  );
};