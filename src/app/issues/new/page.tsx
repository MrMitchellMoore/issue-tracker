"use client";

import { Button, TextArea, TextField } from "@radix-ui/themes";
import { Pencil } from "lucide-react";
import React from "react";
import { createIssueSchema } from "@/../prisma/Schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import axios from "axios";
import { useRouter } from "next/navigation";

const schema = createIssueSchema;

const NewIssuePage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center z-[100]">
      <div
        className={clsx({
          "w-full bg-pink-700 text-black": errors,
        })}
      >
        {errors.root?.message}
      </div>
      <form
        onSubmit={handleSubmit(async (data) => {
          try {
            const postData = await axios.post("/api/issues", data);
            if (!postData.data) {
              console.log("Something went wrong!");
            }
            router.push("/issues");
          } catch (error) {
            console.log("Something went wrong in the process " + error);
          }
        })}
        className="border-2 rounded-md border-gray-500 flex flex-col mx-auto p-14 md:py-20 md:px-14 w-screen-xl sm:w-3/4"
      >
        <h1 className="py-5 text-4xl font-semibold justify-center items-center">
          Create New Issue
        </h1>
        <div className="w-full flex flex-col justify-center space-y-8">
          <div className="w-full space-y-3">
            <TextField.Root>
              <TextField.Slot>
                <Pencil size={18} color="black" />
              </TextField.Slot>
              <TextField.Input
                placeholder="Title"
                size="3"
                {...register("title")}
              />
            </TextField.Root>
            <TextArea
              size="3"
              placeholder="Description"
              {...register("description")}
            />
          </div>
          <div>
            <Button
              radius="medium"
              size="2"
              style={{ cursor: "pointer" }}
              color="blue"
            >
              New Issue
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewIssuePage;
