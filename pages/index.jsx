

export default function Home() {
    return (
        <div className='flex text-white text-center justify-center mt-5 grid gap-y-5  md:grid-cols-9'>
            <div className="block md:col-start-3 md:col-span-2 p-10 rounded-lg shadow-lg bg-slate-700 max-w-sm md:hover:scale-110 transition duration-500 cursor-default">
                <h1 className='text-white text-xl leading-tight font-medium mb-2'>Hello, I am Shan</h1>
                <p className='text-white text-base mb-4'>I am a first year apprentice in Software Engineering. I am a full stack
                    developer. For frontend I use NextJS or ReactJS and for the backend I use C# or Java.</p>
            </div>
            <div className="block md:col-start-6 md:col-span-2 p-10 rounded-lg shadow-lg bg-slate-700 max-w-sm md:hover:scale-110 transition duration-500 cursor-default">
                <h1 className='text-white text-xl leading-tight font-medium mb-2'>Current Projects</h1>
                <p className='text-white text-base mb-4'>Currently I am working at a variety of projects. The biggest project I am working at is a SchoolTool, where you can enter your grades and also note your important appointments and way more.</p>
            </div>
        </div>
    )
}
