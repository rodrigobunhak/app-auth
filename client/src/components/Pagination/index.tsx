import { PageButton, PaginationContainer } from "./styles";
import { useTranslation } from "react-i18next";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const { t } = useTranslation();

  const renderPageNumbers = () => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    const showEllipsis = totalPages > 5;
    
    if (!showEllipsis) {
      return pages.map((page) => (
        <PageButton
          key={page}
          onClick={() => onPageChange(page)}
          disabled={page === currentPage}
          active={page === currentPage}
        >
          {page}
        </PageButton>
      ));
    }

    return pages.map((page) => {
      if (page === 1 || page === totalPages) {
        return (
          <PageButton
            key={page}
            onClick={() => onPageChange(page)}
            disabled={page === currentPage}
            active={page === currentPage}
          >
            {page}
          </PageButton>
        );
      }
      if (
        page === currentPage ||
        page === currentPage - 1 ||
        page === currentPage + 1
      ) {
        return (
          <PageButton
            key={page}
            onClick={() => onPageChange(page)}
            disabled={page === currentPage}
            active={page === currentPage}
          >
            {page}
          </PageButton>
        );
      }
      if (
        (page === currentPage - 2 && currentPage > 3) ||
        (page === currentPage + 2 && currentPage < totalPages - 2)
      ) {
        return <span key={page}>...</span>;
      }
      return null;
    });
  };

  return (
    <PaginationContainer>
      <PageButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {t('Previous')}
      </PageButton>
      {renderPageNumbers()}
      <PageButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        {t('Next')}
      </PageButton>
    </PaginationContainer>
  );
};