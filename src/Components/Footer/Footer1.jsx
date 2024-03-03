import CodeBox from '@/Shared/CodeBox/CodeBox';

export const Footer1 = () => {
    const codeStr = `
        <footer className="bg-sky-100 py-5 text-center">
            <p>&copy; 2024 NavigateUI. All Rights Reserved.</p>
        </footer>
   `;

    return (
        <CodeBox codeStr={codeStr}>
            <footer className="bg-sky-100 py-5 text-center">
                <p>&copy; 2024 NavigateUI. All Rights Reserved.</p>
            </footer>
        </CodeBox>
    );
};

export default Footer1;
