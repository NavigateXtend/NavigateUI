export default function Heading({ children }) {
  return (
    <h1 className="mt-24 text-lg text-black first-of-type:mt-10 dark:text-white sm:text-xl md:mt-32 lg:mt-44 lg:text-2xl">
      #<span className="underline">{children}</span>
    </h1>
  );
}
