"use client";

import { Button, Callout, TextArea, TextField } from "@radix-ui/themes";
import { Info, Pencil } from "lucide-react";
import React, { useState } from "react";
import { createIssueSchema } from "@/../prisma/Schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import axios from "axios";
import { useRouter } from "next/navigation";

const schema = createIssueSchema;

const NewIssuePage = () => {
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm({
    resolver: zodResolver(schema),
  });
  const [errors, setErrors] = useState("");
  return (
    <>
      {errors && (
        <Callout.Root size="3">
          <Callout.Icon>
            <Info color="black" />
          </Callout.Icon>
          <Callout.Text>{errors}</Callout.Text>
        </Callout.Root>
      )}

      <form
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/issues", data);
            reset();
            router.push("/issues");
          } catch (error) {
            console.log(
              "Something went wrong in the process " + setErrors(errors)
            );
          }
        })}
        className="w-full h-screen flex flex-col justify-center items-center z-[100]"
      >
        <div className="border-2 rounded-md border-gray-500 flex flex-col mx-auto p-14 md:py-20 md:px-14 w-screen-xl sm:w-3/4">
          <h1 className="py-5 text-4xl font-semibold justify-center items-center">
            Create Issue
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
        </div>
      </form>
    </>
  );
};

export default NewIssuePage;
