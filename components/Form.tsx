import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import { BorderBeam } from "./magicui/border-beam";

interface TemplateParams {
  to_name: string;
  from_name: string;
  reply_to: string;
  message: string;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const sendEmail = (params: TemplateParams) => {
    const toastId = toast.loading("Sending your message,please wait...");
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_TEMPLATE_ID || "",
        params as unknown as Record<string, unknown>,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY || "",
          limitRate: {
            throttle: 5000, //you can not send more than 1 email per 5 seconds
          },
        }
      )
      .then(
        () => {
          toast.success(
            "I have received your message, I will get back to you soon!",
            { id: toastId }
          );
        },
        (error) => {
          toast.error(
            "There was an error sending your message, Please try again later",
            { id: toastId }
          );
        }
      );
  };
  const onSubmit = (data: any) => {
    const templateParams: TemplateParams = {
      to_name: "Jay Parmar",
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
    };
    sendEmail(templateParams);
  };
  console.log(errors);

  return (
    <>
      <Toaster richColors={true} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border-[0.2px] dark:border-custom-dark border-custom-light  dark:text-white text-black shadow-lg flex flex-col gap-6 xl:p-10 p-5 relative rounded-xl overflow-hidden"
      >
        <h3 className="text-4xl text-accent">Get in touch</h3>
        <p>
          I enjoy working with dedicated creatives from businesses that make the
          world beautifull.
        </p>
        <p>We Can do so much together. Let's talk</p>
        <div className="flex flex-col gap-6">
          <Input
            type="text"
            placeholder="Full name"
            {...register("name", {
              required: "This field is required",
              minLength: {
                value: 3,
                message: "Name Should be atleast 3 characters long.",
              },
            })}
          />
          {errors.name && (
            <span className="inline-block self-start text-red-600 ">
              {errors.name.message as string}
            </span>
          )}
          <Input
            type="email"
            placeholder="Email address"
            {...register("email", {
              required: "This field is required",
              pattern: /^\S+@\S+$/i,
            })}
          />
          {errors.email && (
            <span className="inline-block self-start text-red-600 ">
              {errors.email.message as string}
            </span>
          )}
        </div>

        <Textarea
          className="h-[200px]"
          placeholder="Type your message here"
          {...register("message", {
            required: "This field is required",
            maxLength: {
              value: 250,
              message: "Message should be less than 500 characters",
            },
            minLength: {
              value: 10,
              message: "Message should be more than 10 characters",
            },
          })}
        />
        {errors.message && (
          <span className="inline-block self-start text-red-600 ">
            {errors.message.message as string}
          </span>
        )}

        {/* btn */}
        <Button size="md" className="max-w-40" type="submit">
          Send message
        </Button>
        <BorderBeam className="!z-[-20]" size={250} duration={7} delay={9} />
      </form>
    </>
  );
};
export default Form;
