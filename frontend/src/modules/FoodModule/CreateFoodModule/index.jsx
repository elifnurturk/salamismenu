import { ErpLayout } from '@/layout';
import CreateItem from '@/modules/ErpPanelModule/CreateItem';
import FoodForm from '@/modules/FoodModule/Forms/FoodForm';

export default function CreateFoodModule({ config }) {
  return (
    <ErpLayout>
      <CreateItem config={config} CreateForm={FoodForm} />
    </ErpLayout>
  );
}
