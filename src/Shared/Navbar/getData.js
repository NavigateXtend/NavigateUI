export async function getStar() {
    const res = await fetch('https://api.github.com/repos/mhlehri/navigateui', { next: { revalidate: 3600 } });
    return res.json();
}
