import { useStoreAuth } from "@/stores/storeAuth";

export const AuthMiddleware = () => {
  const storeAuth = useStoreAuth();
  if (storeAuth.user?.id) return true;
  else return { name: "auth" };
};
