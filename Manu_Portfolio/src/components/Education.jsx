import React from 'react'

const Education = () => {
  return (
    <>
    <h1 class="text-4xl font-semibold text-center my-8">Education</h1>
    <div id="e" class="container mx-auto">
        <div class="flex justify-between gap-6 ml-1">
            <div class="flex-none w-[25%] bg-gray-200 rounded-lg p-6 border-2 border-slate-700">
                <h2 class="text-2xl font-semibold mb-2">POST GRADUATE</h2>
                <p>Master of Computer Application,<br/>
                Pondicherry University,<br/>
                8.14 CGPA</p>
            </div>

            <div class="flex-none w-[25%] bg-gray-200 rounded-lg p-6 border-2 border-slate-700">
                <h2 class="text-2xl font-semibold mb-2">UNDER GRADUATE</h2>
                <p>Bsc Computer Science<br/>
                Government College Kasaragod<br/>
                Kannur University<br/>
                Graduated with First class in March 2021<br/>
                Percentage - 73.38%</p>
            </div>

            <div class="flex-none w-[25%] bg-gray-200 rounded-lg p-6 border-2 border-slate-700">
                <h2 class="text-2xl font-semibold mb-2">HIGHER SECONDARY</h2>
                <p>Computer Science<br/>
                Government Higher Secondary School Udma<br/>
                2016-2018<br/>
                Percentage - 81.83%</p>
            </div>

            <div class="flex-none w-[25%] bg-gray-200 rounded-lg p-6 border-2 border-slate-700">
                <h2 class="text-2xl font-semibold mb-2">SSLC</h2>
                <p>Government High School Bare<br/>
                March-2016<br/>
                Percentage - 98%</p>
            </div>
      </div>
</div>

    </>
  )
}

export default Education