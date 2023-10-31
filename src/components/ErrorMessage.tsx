import { Callout } from "@radix-ui/themes";
import { Info } from "lucide-react";
import React, { PropsWithChildren } from "react";

const ErrorMessage = ({ children }: PropsWithChildren) => {
  if (!children) return null;
  return (
    <Callout.Root size="3">
      <Callout.Icon>
        <Info color="black" />
      </Callout.Icon>
      <Callout.Text>{children}</Callout.Text>
    </Callout.Root>
  );
};

export default ErrorMessage;
