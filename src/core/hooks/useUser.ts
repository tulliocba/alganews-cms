import { User, UserService } from "cms-alganews-sdk";
import { useCallback, useState } from "react";

export const useUser = () => {
  const [user, setUser] = useState<User.Detailed>();

  const fetchDetailedUser = useCallback((userId: number) => {
    UserService.getDetailedUser(7).then(setUser);
  }, []);

  return { user, fetchDetailedUser };
};
