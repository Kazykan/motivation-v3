"use client";

import React from "react";
import { AddParentForm } from "@/components/form/add-parent-form";

const CheckTelegramUser: React.FC = () => {
  return (
    <div>
      <AddParentForm tgParentId={15613131} tgUserName={"Леха"} tgInviteId={465498} />
    </div>
  );
};

export default CheckTelegramUser;
