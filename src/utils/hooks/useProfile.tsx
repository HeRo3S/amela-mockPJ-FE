import { getProfile } from "api/profile";
import { QUERY_KEY } from "constants/common";
import { useQuery } from "react-query";

export default function useProfile(enabled = false) {
  const { data: profile, refetch: refetchProfile } = useQuery<any>(
    QUERY_KEY.PROFILE,
    getProfile,
    { enabled }
  );
  return { profile, refetchProfile };
}
