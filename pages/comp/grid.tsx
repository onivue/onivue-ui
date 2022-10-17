const GridPage = () => {
    const cols = {
        1: 'grid-cols-1',
        2: 'grid-cols-2',
        3: 'grid-cols-3',
        4: 'grid-cols-4',
        5: 'grid-cols-5',
        6: 'grid-cols-6',
        7: 'grid-cols-7',
        8: 'grid-cols-8',
        9: 'grid-cols-9',
        10: 'grid-cols-10',
        11: 'grid-cols-11',
        12: 'grid-cols-12',
    }
    const rows = {
        1: 'grid-rows-1',
        2: 'grid-rows-2',
        3: 'grid-rows-3',
        4: 'grid-rows-4',
        5: 'grid-rows-5',
        6: 'grid-rows-6',
    }
    return (
        <div className="grid w-full">
            <div className="grid w-full grid-cols-4 lg:grid-cols-10 sm:grid-cols-8 gap-2 sm:gap-4 lg:gap-4 grid-flow-row-dense place-items-center ">
                <div className="bg-primary-600 rounded-lg col-span-4">1</div>
                <div className="bg-primary-300 rounded-lg">2</div>
                <div className="bg-primary-600 rounded-lg col-span-2">3</div>
                <div className="bg-primary-300 rounded-lg">4</div>
                <div className="bg-primary-300 rounded-lg">5</div>
                <div className="bg-primary-300 rounded-lg">6</div>
                <div className="bg-primary-300 rounded-lg">7</div>
                <div className="bg-primary-300 rounded-lg">8</div>
                <div className="bg-primary-300 rounded-lg">9</div>
                <div className="bg-primary-300 rounded-lg">10</div>
                <div className="bg-primary-600 rounded-lg col-span-2">11</div>
                <div className="bg-primary-600 rounded-lg row-span-2 col-span-4">12</div>
                <div className="bg-primary-300 rounded-lg">13</div>
                <div className="bg-primary-600 rounded-lg row-span-5 col-span-2">14</div>
                <div className="bg-primary-300 rounded-lg">15</div>
                <div className="bg-primary-300 rounded-lg">16</div>
                <div className="bg-primary-300 rounded-lg">17</div>
                <div className="bg-primary-300 rounded-lg">18</div>
                <div className="bg-primary-300 rounded-lg">19</div>
                <div className="bg-primary-300 rounded-lg">20</div>
                <div className="bg-primary-300 rounded-lg">21</div>
                <div className="bg-primary-300 rounded-lg">22</div>
                <div className="bg-primary-300 rounded-lg">23</div>
                <div className="bg-primary-300 rounded-lg">24</div>
                <div className="bg-primary-300 rounded-lg">25</div>
                <div className="bg-primary-300 rounded-lg">26</div>
                <div className="bg-primary-300 rounded-lg">27</div>
                <div className="bg-primary-300 rounded-lg">28</div>
                <div className="bg-primary-300 rounded-lg">29</div>
                <div className="bg-primary-300 rounded-lg">30</div>
                <div className="bg-primary-300 rounded-lg">31</div>
                <div className="bg-primary-300 rounded-lg">32</div>
                <div className="bg-primary-300 rounded-lg">33</div>
                <div className="bg-primary-300 rounded-lg">34</div>
            </div>
        </div>
    )
}

export default GridPage
