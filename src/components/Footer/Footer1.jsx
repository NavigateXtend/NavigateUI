import CP from '@/ui/CP';

export const Footer1 = () => {
  const code = `
        <footer className="bg-sky-100 py-5 text-center text-black">
            <p>&copy; 2024 NavigateUI. All Rights Reserved.</p>
        </footer>
   `;

  return (
    <CP code={code}>
      <footer className="bg-sky-100 py-5 text-center text-black">
        <p>&copy; 2024 NavigateUI. All Rights Reserved.</p>
      </footer>
    </CP>
  );
};

export default Footer1;
