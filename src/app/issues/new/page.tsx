"use client";

import { Button, Callout, TextArea, TextField } from "@radix-ui/themes";
import { Info, Pencil } from "lucide-react";
import { createIssueSchema } from "@/../prisma/Schemas";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import ErrorMessage from "@/components/ErrorMessage";

type IssueForm = z.infer<typeof createIssueSchema>;

const NewIssuePage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema),
  });

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center z-[100]">
      <ErrorMessage>
        {errors.title?.message || errors.description?.message}
      </ErrorMessage>
      <form
        className="w-full flex my-2"
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/issues", data);
            reset();
            router.push("/issues");
          } catch (error) {
            console.log("Something went wrong in the process " + error);
          }
        })}
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
    </div>
  );
};

export default NewIssuePage;
