import React from 'react'
import kanban from '../assets/kanban.png'

const Home = () => {
    return (
        <div>
            <div className=" m-[120px]">
                <div className="flex flex-wrap justify-around ">
                    <div className="flex flex-col items-center">
                        <h1 className="text-center text-3xl mb-4">
                            This is a <strong>Kanban</strong> application
                        </h1>
                        <p className="text-center">
                            You can track tasks easily with an outstanding UI
                        </p>
                        <button className="rounded-md border py-2 px-2 mt-4">Start Your Journey</button>
                    </div>
                    <img src={kanban} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home