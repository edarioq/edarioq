import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-4">
      <p>
        I am building a simple and affordable Gym management software. There are
        no really good Gym CRMs for the LATAM market. So I decided to make one.
        You can check it out at the link below. It's built with NextJS for the
        web app, Expo for the mobile apps, Supabase for the database, and
        several other toys, such as Stripe for payments and Resend for emails.
      </p>

      <div className="flex gap-2">
        <Link className="underline" href="https://gymboss.app" target="_blank">
          Gymboss
        </Link>
      </div>
    </div>
  );
}
