import useLanguage from '@/locale/useLanguage';
import UpdateFoodModule from '@/modules/FoodModule/UpdateFoodModule';

export default function FoodUpdate() {
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
  return <UpdateFoodModule config={configPage} />;
}
