import { useStoreAuth } from "@/stores/storeAuth";

export const GuestMiddleware = () => {
  const storeAuth = useStoreAuth();
  if (!storeAuth.user || !storeAuth.user.id) return true;
  else return false;
};
