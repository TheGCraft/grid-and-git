"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

//Validation Schema
const contactSchema = z.object({
    name: z.string().min(2, "Please include your name"),
    email: z.email("Please provide a valid email address"),
    message: z.string().min(10, "Messages should be at least 10 characters long").max(1000, "Message is too long")
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    })


    const onSubmit = async (data: ContactFormData) => {
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/center",

                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error("Network response was not ok");

            }

            alert("Message received, I'll get back to you as soon as possible!");
            reset();

        } catch (error) {
            console.error("Submission error:", error);
            alert("Something went wrong. Please try again later.");
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Input */}
            <div>
                <label className="block text-sm font-bold mb-2 text-zinc-700 dark:text-zinc-300">
                    Name
                </label>
                <input
                    {...register("name")}
                    type="text"
                    className="w-full p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-transparent focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Your Name"
                />
                {errors.name && (
                    <p className="text-red-500 text-xs mt-1 font-medium">{errors.name.message}</p>
                )}
            </div>

            {/* Email Input */}
            <div>
                <label className="block text-sm font-bold mb-2 text-zinc-700 dark:text-zinc-300">
                    Email Address
                </label>
                <input
                    {...register("email")}
                    type="email"
                    className="w-full p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-transparent focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="hello@example.com"
                />
                <input
                    type="text"
                    name="username_hp"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                />
                {errors.email && (
                    <p className="text-red-500 text-xs mt-1 font-medium">{errors.email.message}</p>
                )}
            </div>

            {/* Message Input */}
            <div>
                <label className="block text-sm font-bold mb-2 text-zinc-700 dark:text-zinc-300">
                    Message
                </label>
                <textarea
                    {...register("message")}
                    rows={5}
                    className="w-full p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-transparent focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                />
                {errors.message && (
                    <p className="text-red-500 text-xs mt-1 font-medium">{errors.message.message}</p>
                )}
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 bg-zinc-900 text-white rounded-lg font-semibold hover:bg-blue-600 active:scale-[0.99] transition-all disabled:opacity-50 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-blue-500"
            >
                {isSubmitting ? "Sending..." : "Send Message"}
            </button>
        </form>
    );
}