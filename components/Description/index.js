import MobileApp from '../../public/mobile-login.png'
const Description = () => {
  return(
    <div className="flex flex-col justify-center items-center">
      <div className="font-display text-4xl text-purple-700 mb-10">
        <p>Our Services</p>
      </div>
      <div className="container flex lg:flex-row flex-col justify-center lg:items-stretch items-center  gap-4 ">
        <div className="flex flex-col items-start w-80">
          <div className="flex justify-center w-24 h-24 bg-purple-700 rounded-lg text-white items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="font-body font-bold text-lg text-purple-700">Employer giving project briefing</p>
          <p className="font-body text-md text-gray-500">Employer giving project briefing</p>
        </div>

        <div className="flex flex-col items-start w-80">
          <div className="flex justify-center w-24 h-24 bg-purple-700 rounded-lg text-white items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z" />
            </svg>
          </div>
          <p className="font-body font-bold text-lg text-purple-700">Workers looking for references</p>
          <p className="font-body text-md text-gray-500">Workers look for job related references from employers</p>
        </div>

        <div className="flex flex-col items-start w-80">
          <div className="flex justify-center w-24 h-24 bg-purple-700 rounded-lg text-white items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
          <p className="font-body font-bold text-lg text-purple-700">Workers doing design work</p>
          <p className="font-body text-md text-gray-500">Workers carry out design work in accordance with the specified time</p>
        </div>

        <div className="flex flex-col items-start w-80">
          <div className="flex justify-center w-24 h-24 bg-purple-700 rounded-lg text-white items-center mb-4">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="font-body font-bold text-lg text-purple-700">Feedback from client</p>
          <p className="font-body text-md text-gray-500">Workers will get input including revisions and assessments of workers' projects</p>
        </div>
        
      </div>
    </div>
  )
}

export default Description