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
  tgInviteId?: number;
  photo_url?: string;
  className?: string;
}

export const AddChildForm: React.FC<Props> = ({ tgParentId, tgUserName, photo_url, tgInviteId, className }) => {
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
      title: "Create child",
      description: JSON.stringify(values, null, 2),
    });
    console.log(JSON.stringify(values));
  }

  return (
    <FormProvider {...form}>
      ребенок
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-5 m-5">
          <FormInput name="name" className="text-base" placeholder="Имя" />
          <FormSelect name="gender" label="Пол" />
          <Button type="submit" className={cn("w-full py-3", className)}>
            Зарегистрироваться
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
