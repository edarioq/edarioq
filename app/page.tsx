import { BlogPosts } from "app/components/posts";
import { Metadata } from "next";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Greetings human
      </h1>
      <p className="mb-4">
        I'm Edgar. I'm a keyboard-obsessed, vim enthusiast, and spaces advocate
        developer. I code by day, and eat all the food in your fridge at night.
        I find Vim's keystroke commands, combined with a split ergonomic
        keyboard, a sublime experience. I enjoy writing code. More specifically,
        I enjoy crafting beautiful UIs. I'm passionate about websites and web
        apps that are not just functional, but genuinely beautiful. My sweet
        spot? Translating pixel-perfect designs into clean, maintainable,
        scalable code that actually works.
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
