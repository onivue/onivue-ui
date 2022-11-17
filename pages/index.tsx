export default function Home() {
    return (
        <div className="relative">
            <div className="mx-auto py-20 text-center">
                <h2 className="pb-4 text-xl font-bold">onivue.ch</h2>
                <h1 className="bg-gradient-to-r from-primary-200 via-primary-400 to-primary-500 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                    O-UI
                </h1>
                <p className="pt-4 text-xl text-gray-500 ">React + Tailwind UI Components</p>
            </div>
            <div className="mx-auto max-w-2xl  sm:py-24 lg:max-w-7xl ">
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
                    <div className="h-full w-full rounded-3xl bg-gradient-to-br from-yellow-300 to-pink-500 p-8 text-white">
                        <h3 className="text-3xl font-bold">Alpha</h3>
                        <p className="py-5">
                            Beef chicken pork bacon chuck shortloin sirloin shank ham exercitation dolore,
                            drumstick frankfurter fugiat consectetur capicola bresaola.
                        </p>
                    </div>
                    <div className="h-full w-full rounded-3xl bg-gradient-to-br from-pink-400 to-blue-400 p-8 text-white">
                        <h3 className="text-3xl font-bold">Beta</h3>
                        <p className="py-5">
                            Beef chicken pork bacon chuck shortloin sirloin shank ham exercitation dolore,
                            drumstick frankfurter fugiat consectetur capicola bresaola.
                        </p>
                    </div>
                    <div className="h-full w-full rounded-3xl bg-gradient-to-br from-green-400 to-blue-400 p-8 text-white">
                        <h3 className="text-3xl font-bold">Gamma</h3>
                        <p className="py-5">
                            Beef chicken pork bacon chuck shortloin sirloin shank ham exercitation dolore,
                            drumstick frankfurter fugiat consectetur capicola bresaola.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
