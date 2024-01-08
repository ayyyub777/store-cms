import StoreDeleteAction from "./components/store-delete-action";
import { StoreDetailsForm } from "./components/store-details-form";

const SettingsPage = () => {
  return (
    <>
      <StoreDetailsForm />
      <StoreDeleteAction />
    </>
  );
};

export default SettingsPage;
