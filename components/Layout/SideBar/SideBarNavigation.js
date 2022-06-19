const SideBarNavigation = () => {
    return (
        <nav className="flex flex-col gap-8">
            <div className="mb-3">
                <p className="px-2 text-lg font-semibold uppercase tracking-wide text-primary-400">Forms</p>
                <div className="flex flex-col space-y-0">
                    <a
                        className="cursor-base relative flex w-full items-center rounded border-0 bg-transparent px-2 py-1 text-sm hover:text-primary-400"
                        href="/button"
                    >
                        <span>Button</span>
                    </a>
                    <a
                        className="cursor-base relative flex w-full items-center rounded border-0 bg-transparent px-2 py-1 text-sm hover:text-primary-400"
                        href="/checkbox"
                    >
                        <span>Checkbox</span>
                    </a>
                    <a
                        className="cursor-base relative flex w-full items-center rounded border-0 bg-transparent px-2 py-1 text-sm hover:text-primary-400"
                        href="/form-control"
                    >
                        <span>Form Control</span>
                    </a>
                    <a
                        className="cursor-base relative flex w-full items-center rounded border-0 bg-transparent px-2 py-1 text-sm hover:text-primary-400"
                        href="/icon-button"
                    >
                        <span>Icon Button</span>
                    </a>
                    <a
                        className="cursor-base relative flex w-full items-center rounded border-0 bg-transparent px-2 py-1 text-sm hover:text-primary-400"
                        href="/input"
                    >
                        <span>Input</span>
                    </a>
                    <a
                        className="cursor-base relative flex w-full items-center rounded border-0 bg-transparent px-2 py-1 text-sm hover:text-primary-400"
                        href="/radio"
                    >
                        <span>Radio</span>
                    </a>
                    <a
                        className="cursor-base relative flex w-full items-center rounded border-0 bg-transparent px-2 py-1 text-sm hover:text-primary-400"
                        href="/select"
                    >
                        <span>Select</span>
                    </a>
                    <a
                        className="cursor-base relative flex w-full items-center rounded border-0 bg-transparent px-2 py-1 text-sm hover:text-primary-400"
                        href="/switch"
                    >
                        <span>Switch</span>
                    </a>
                    <a
                        className="cursor-base relative flex w-full items-center rounded border-0 bg-transparent px-2 py-1 text-sm hover:text-primary-400"
                        href="/textarea"
                    >
                        <span>Textarea</span>
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default SideBarNavigation
