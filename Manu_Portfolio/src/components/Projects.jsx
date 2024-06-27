import React from 'react'

const Projects = () => {
  return (
    <>
    <h1 class="text-4xl font-semibold text-center my-8">Projects</h1>

        <div id="p" class="container mx-auto">
            <div class="flex justify-between gap-6 ml-1">
                <div class="flex-none w-[25%] h-[450px] bg-gray-200 rounded-lg p-6 border-2 border-slate-700 ">
                    <h2 class="text-2xl font-semibold mb-2">Online Grievance Redressal System</h2>
                    <p>An online complaint box developed using HTML & JavaScript. Used PHP & MySQL as the backend with XAMPP.</p>
                </div>

                <div class="flex-none w-[25%] h-[450px] bg-gray-200 rounded-lg p-6 border-2 border-slate-700">
                    <h2 class="text-2xl font-semibold mb-2">A Study of Fast Multi-Scale Structural Patch Decomposition for Multi-Exposure Image Fusion on Noisy Images</h2>
                    <p>Studied the paper Fast Multi-Scale Structural Patch Decomposition for Multi-Exposure Image Fusion. Studied Noisy and Denoised images reflects in the quality of fused images. Used Technologies such as Matlab & Python.</p>
                </div>

                <div class="flex-none w-[25%] h-[450px] bg-gray-200 rounded-lg p-6 border-2 border-slate-700">
                    <h2 class="text-2xl font-semibold mb-2">Development of Games for Cognitive Interventions</h2>
                    <p>Developed as an application for Windows platform using Unity as a game engine, specifically tailored for the Department of Applied Psychology. Proposed the development of intervention tools for psychological evaluation in the form of games. The application contains designs and interactive games where the users will respond by using mouse click or arrow keys as an interface for specific tasks. Technologies: C# & Excel.</p>
                </div>

                <div class="flex-none w-[25%] h-[450px] bg-gray-200 rounded-lg p-6 border-2 border-slate-700">
                    <h2 class="text-2xl font-semibold mb-2">Hospital Booking Management</h2>
                    <p>Python Django project. Patients can book the doctors through the hospital web page. Details of doctors and the departments available. MySQL is used as the backend.</p>
                </div>
            </div>
        </div>

    </>
  )
}

export default Projects