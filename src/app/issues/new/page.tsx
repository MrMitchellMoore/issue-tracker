"use client";

import { Button, TextArea, TextField } from "@radix-ui/themes";
import { Pencil } from "lucide-react";
import React from "react";

type Props = {};

const NewIssuePage = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center z-[100]">
      <div className="border-2 rounded-md border-gray-500 flex flex-col mx-auto p-14 md:py-20 md:px-14 w-screen-xl sm:w-3/4">
        <h1 className="py-5 text-4xl font-semibold justify-center items-center">
          Create New Issue
        </h1>
        <div className="w-full flex flex-col justify-center space-y-8">
          <div className="w-full space-y-3">
            <TextField.Root>
              <TextField.Slot>
                <Pencil size={18} color="black" />
              </TextField.Slot>
              <TextField.Input placeholder="Title" size="3" />
            </TextField.Root>
            <TextArea size="3" placeholder="Description" />
          </div>
          <div>
            <Button radius="medium" size="2" style={{ cursor: "pointer" }}>
              New Issue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewIssuePage;
