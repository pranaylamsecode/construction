import useLanguage from '@/locale/useLanguage';
import ReadInvoiceModule from '@/modules/InvoiceModule/ReadInvoiceModule';

export default function BlogRead() {
  const entity = 'blog';
  const translate = useLanguage();
  const Labels = {
    PANEL_TITLE: translate('blog'),
    DATATABLE_TITLE: translate('blog_list'),
    ADD_NEW_ENTITY: translate('add_new_blog'),
    ENTITY_NAME: translate('blog'),

    RECORD_ENTITY: translate('record_payment'),
  };

  const configPage = {
    entity,
    ...Labels,
  };
  return <ReadInvoiceModule config={configPage} />;
}
