import React from "react";
import { cn } from "@/lib/utils";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { ParentCreateSchema } from "@/lib/types";
import { FormInput, FormSelect } from "./form-components";
import { toast } from "@/hooks/use-toast";

interface Props {
  tgParentId: number;
  tgUserName: string;
  tgInviteId: number | null;
  photo_url?: string;
  className?: string;
}

export const AddParentForm: React.FC<Props> = ({ tgParentId, tgUserName, photo_url, tgInviteId, className }) => {
  const form = useForm<z.infer<typeof ParentCreateSchema>>({
    resolver: zodResolver(ParentCreateSchema),
    defaultValues: {
      name: tgUserName,
      telegram_id: tgParentId,
      photo_url: photo_url,
      invite_id: tgInviteId,
      gender: undefined,
    },
  });

  function onSubmit(values: z.infer<typeof ParentCreateSchema>) {
    toast({
      title: "Create parent",
      description: JSON.stringify(values, null, 2),
    });
    console.log(JSON.stringify(values));
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormInput name="name" className="text-base" placeholder="Имя" />
        <FormInput name="telegram_id" className="text-base" placeholder="Telegram ID" type="number" />
        <FormSelect name="gender" label="Пол" />
        <Button type="submit" className={cn("w-full py-3", className)}>
          Зарегистрироваться
        </Button>
      </form>
    </FormProvider>
  );
};
