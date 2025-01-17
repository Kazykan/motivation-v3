import { useChildCheck } from "@/hooks/useChildCheck";

const CheckTelegramId = ({ telegramId }: { telegramId: number }) => {
  const { data, isLoading, error } = useChildCheck(telegramId);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && data.childUser && (
        <p>
          Пользователь Telegram с ID {telegramId} уже зарегистрирован как ребенок с ID {data.childUser.id} -{" "}
          {data.childUser.name}.
        </p>
      )}
    </div>
  );
};

export default CheckTelegramId;
