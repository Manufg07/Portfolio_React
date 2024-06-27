import React from 'react'

const Header = () => {
  return (
    <> 
        <header class="bg-white shadow">
            <div class="container mx-auto px-4 py-6 flex justify-between items-center">
                <h1 class="text-xl font-semibold animate-pulse">My Portfolio</h1>
                <nav>
                    <ul class="flex space-x-4 shadow-2xl">
                        <li class="shadow-2xl ring-2 ring-ring-cyan-950 w-16 text-center transition ease-in-out delay-150 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 "><a href="#" class="text-gray-600 hover:text-gray-800">Home</a></li>
                        <li class="shadow-2xl ring-2 ring-ring-cyan-950 w-16 text-center transition ease-in-out delay-150 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 "><a href="#p" class="text-gray-600 hover:text-gray-800 ">Projects</a></li>
                        <li class="shadow-2xl ring-2 ring-ring-cyan-950 w-20 text-center transition ease-in-out delay-150 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 "><a href="#e" class="text-gray-600 hover:text-gray-800">Education</a></li>
                        <li class="shadow-2xl ring-2 ring-ring-cyan-950 w-16 text-center transition ease-in-out delay-150 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 "><a href="#c" class="text-gray-600 hover:text-gray-800">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    </>
  )
}

export default Header