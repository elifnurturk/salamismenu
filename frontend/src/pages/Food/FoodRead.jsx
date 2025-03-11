import useLanguage from '@/locale/useLanguage';
import ReadFoodModule from '@/modules/FoodModule/ReadFoodModule';

export default function FoodRead() {
  const translate = useLanguage();

  const entity = 'food';

  const Labels = {
    PANEL_TITLE: translate('food'),
    DATATABLE_TITLE: translate('food_list'),
    ADD_NEW_ENTITY: translate('add_new_food'),
    ENTITY_NAME: translate('food'),
  };

  const configPage = {
    entity,
    ...Labels,
  };
  return <ReadFoodModule config={configPage} />;
}
