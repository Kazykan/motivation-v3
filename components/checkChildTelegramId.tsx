import { ChildUser } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface ChildCheckResponse {
  exists: boolean;
  child?: ChildUser;
}

const CheckChildComponent = ({ telegramId }: { telegramId: number }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["child", telegramId],
    queryFn: async () => {
      const response = await axios.get<ChildCheckResponse>(`/api/child/${telegramId}`);
      return response.data;
    },
    enabled: !!telegramId,
  });

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <div>{data.exists ? <p>Child exists: {data.child?.name}{data.child?.id}</p> : <p>Child does not exist</p>}</div>}
    </div>
  );
};

export default CheckChildComponent;
