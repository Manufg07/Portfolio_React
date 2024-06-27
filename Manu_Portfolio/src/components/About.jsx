import React from 'react'
import Image from '../assets/MANUU.jpg'

const About = () => {
  return (
    <>
        <div class="bg-gray-100 flex justify-center w-auto h-auto mt-3 ">
            <img src={Image} alt="" class="w-[18%] h-auto justify-center rounded-lg"/>
        </div>
        <div class="bg-gray-200 mt-2 px-4 py-6">
            <h1 class="text-4xl font-mono ">Hi, I'm Manu Narayanan</h1>
            <h2 class="text-2xl text-sky-600">Blockchain Architect Student</h2>
            <p class="font-semibold mb-2 ">Hello, My name is Manu! I'm a Blockchain Architect student with a passion for Software Development.
                seeking to work in a challenging position in an organization that will allow me to apply my acquired knowledge of the field, provide opportunity for professional growth.
                I worked among various programming languages. I’m interested in learning more about how computers work, and I have been working on my own projects that combine coding and art.
            <br/><span class="text-3xl">Thanks for reading!</span></p>
        </div>
    </>
  )
}

export default About