import Image from 'next/image';

export default function loading() {
    return (
        <div className="item-center relative flex h-96 w-full justify-center">
            <span className="absolute -top-3 h-16 w-16 animate-[spin_1s_linear_infinite] rounded-full border-4 border-sky-400 border-l-transparent border-r-transparent"></span>
            <Image className="absolute" src="/Logo.svg" alt="navigateui logo" width={45} height={45} />
        </div>
    );
}
