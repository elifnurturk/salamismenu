import useLanguage from '@/locale/useLanguage';
import CreateFoodModule from '@/modules/FoodModule/CreateFoodModule';

export default function FoodCreate() {
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
  return <CreateFoodModule config={configPage} />;
}
