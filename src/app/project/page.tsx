import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Project() {
  return (
    <div className="container max-w-7xl mx-auto p-8 ">
      <div className="heading text-center mb-16">
        <h1 className="text-3xl text-teal-700 font-serif font-bold animate-fadeInLeft">My Projects</h1>
      </div>

      {/* Grid with responsive columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeInRight ">
        {/* Project 1 */}
        <div className="projectCard bg-white rounded-xl shadow-lg p-6 text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <h2 className="projectTitle text-2xl text-teal-600 mb-4">ATM Machine</h2>
          <Image src="/project1.png" alt="ATM Machine" className="projectImage rounded-lg border-4 border-teal-700 mx-auto" width={300} height={250} />
          <Link href="https://updated-atm.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white bg-teal-700 py-2 px-4 mt-4 inline-block rounded-lg font-semibold transition-all duration-300 hover:bg-teal-600 hover:translate-y-1">
            Click here
          </Link>
        </div>

        {/* Project 2 */}
        <div className="projectCard bg-white rounded-xl shadow-lg p-6 text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <h2 className="projectTitle text-2xl text-teal-600 mb-4">Simple Calculator</h2>
          <Image src="/project2.png" alt="Simple Calculator" className="projectImage rounded-lg border-4 border-teal-700 mx-auto" width={400} height={300} />
          <Link href="https://calculator-neon-five-60.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white bg-teal-700 py-2 px-4 mt-4 inline-block rounded-lg font-semibold transition-all duration-300 hover:bg-teal-600 hover:translate-y-1">
            Click here
          </Link>
        </div>

        {/* Project 3 */}
        <div className="projectCard bg-white rounded-xl shadow-lg p-6 text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <h2 className="projectTitle text-2xl text-teal-600 mb-4">Number Guessing Game</h2>
          <Image src="/project3.png" alt="Number Guessing Game" className="projectImage rounded-lg border-4 border-teal-700 mx-auto" width={400} height={300} />
          <Link href="https://number-game-bice.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white bg-teal-700 py-2 px-4 mt-4 inline-block rounded-lg font-semibold transition-all duration-300 hover:bg-teal-600 hover:translate-y-1">
            Click here
          </Link>
        </div>

        {/* Project 4 */}
        <div className="projectCard bg-white rounded-xl shadow-lg p-6 text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <h2 className="projectTitle text-2xl text-teal-600 mb-4">Quiz</h2>
          <Image src="/project4.png" alt="Quiz" className="projectImage rounded-lg border-4 border-teal-700 mx-auto" width={400} height={300} />
          <Link href="https://quize-sage.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white bg-teal-700 py-2 px-4 mt-4 inline-block rounded-lg font-semibold transition-all duration-300 hover:bg-teal-600 hover:translate-y-1">
            Click here
          </Link>
        </div>

        {/* Project 5 */}
        <div className="projectCard bg-white rounded-xl shadow-lg p-6 text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <h2 className="projectTitle text-2xl text-teal-600 mb-4">Word Counter</h2>
          <Image src="/project5.png" alt="Word Counter" className="projectImage rounded-lg border-4 border-teal-700 mx-auto" width={400} height={300} />
          <Link href="https://word-counter-eight-chi.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white bg-teal-700 py-2 px-4 mt-4 inline-block rounded-lg font-semibold transition-all duration-300 hover:bg-teal-600 hover:translate-y-1">
            Click here
          </Link>
        </div>

        {/* Project 6 */}
        <div className="projectCard bg-white rounded-xl shadow-lg p-6 text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <h2 className="projectTitle text-2xl text-teal-600 mb-4">To-Do List</h2>
          <Image src="/project6.png" alt="To-Do List" className="projectImage rounded-lg border-4 border-teal-700 mx-auto" width={400} height={300} />
          <Link href="https://todo-list-eta-ecru.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white bg-teal-700 py-2 px-4 mt-4 inline-block rounded-lg font-semibold transition-all duration-300 hover:bg-teal-600 hover:translate-y-1">
            Click here
          </Link>
        </div>

        {/* Project 7 */}
        <div className="projectCard bg-white rounded-xl shadow-lg p-6 text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <h2 className="projectTitle text-2xl text-teal-600 mb-4">My Bank</h2>
          <Image src="/project7.png" alt="My Bank" className="projectImage rounded-lg border-4 border-teal-700 mx-auto" width={400} height={300} />
          <Link href="https://my-bank-nu.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white bg-teal-700 py-2 px-4 mt-4 inline-block rounded-lg font-semibold transition-all duration-300 hover:bg-teal-600 hover:translate-y-1">
            Click here
          </Link>
        </div>

        {/* Project 8 */}
        <div className="projectCard bg-white rounded-xl shadow-lg p-6 text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <h2 className="projectTitle text-2xl text-teal-600 mb-4">Student Management System</h2>
          <Image src="/project8.png" alt="Student Management System" className="projectImage rounded-lg border-4 border-teal-700 mx-auto" width={400} height={300} />
          <Link href="https://student-manegment-system.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white bg-teal-700 py-2 px-4 mt-4 inline-block rounded-lg font-semibold transition-all duration-300 hover:bg-teal-600 hover:translate-y-1">
            Click here
          </Link>
        </div>

        {/* Project 9 */}
        <div className="projectCard bg-white rounded-xl shadow-lg p-6 text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <h2 className="projectTitle text-2xl text-teal-600 mb-4">Currency Converter</h2>
          <Image src="/project9.png" alt="Currency Converter" className="projectImage rounded-lg border-4 border-teal-700 mx-auto" width={400} height={300} />
          <Link href="https://currency-converter-tawny-zeta.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white bg-teal-700 py-2 px-4 mt-4 inline-block rounded-lg font-semibold transition-all duration-300 hover:bg-teal-600 hover:translate-y-1">
            Click here
          </Link>
        </div>

        {/* Project 10 */}
        <div className="projectCard bg-white rounded-xl shadow-lg p-6 text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <h2 className="projectTitle text-2xl text-teal-600 mb-4">Countdown Timer</h2>
          <Image src="/project10.png" alt="Countdown Timer" className="projectImage rounded-lg border-4 border-teal-700 mx-auto" width={400} height={300} />
          <Link href="https://countdown-timer-iota-neon.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white bg-teal-700 py-2 px-4 mt-4 inline-block rounded-lg font-semibold transition-all duration-300 hover:bg-teal-600 hover:translate-y-1">
            Click here
          </Link>
        </div>

        {/* Project 11 */}
        <div className="projectCard bg-white rounded-xl shadow-lg p-6 text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <h2 className="projectTitle text-2xl text-teal-600 mb-4">My Resume</h2>
          <Image src="/project11.png" alt="ShopEase" className="projectImage rounded-lg border-4 border-teal-700 mx-auto" width={400} height={300} />
          <Link href="https://milestone-1-sage.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white bg-teal-700 py-2 px-4 mt-4 inline-block rounded-lg font-semibold transition-all duration-300 hover:bg-teal-600 hover:translate-y-1">
            Click here
          </Link>
        </div>

        {/* Project 12 */}
        <div className="projectCard bg-white rounded-xl shadow-lg p-6 text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <h2 className="projectTitle text-2xl text-teal-600 mb-4">Resume Builder</h2>
          <Image src="/project12.png" alt="Next.js Portfolio" className="projectImage rounded-lg border-4 border-teal-700 mx-auto" width={400} height={300} />
          <Link href="https://milestone-5-eta-two.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white bg-teal-700 py-2 px-4 mt-4 inline-block rounded-lg font-semibold transition-all duration-300 hover:bg-teal-600 hover:translate-y-1">
            Click here
          </Link>
        </div>
      </div>
    </div>
  );
}
