import React from 'react';

export default function SearchBar() {
  //const inputStyles = "relative m-0 block flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary";

  //const iconStyles = "input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200";

  return (
    <div class="relative rounded-2xl bg-white px-2 pt-2 pb-2 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:px-auto">
    <div class="mx-auto max-w-md">


      <form action="" class="relative mx-auto w-max">
        <input type="search" 
              class="peer cursor-pointer relative z-10 h-10 w-10 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-lime-300 focus:pl-16 focus:pr-4" />
        <svg xmlns="http://www.w3.org/2000/svg" class="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-lime-300 peer-focus:stroke-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </form>


    </div>
  </div>

    // <div className="mb-3 xl:w-96">
    //   <div className="relative mb-4 flex w-full flex-wrap items-stretch">
    //     <input
    //       type="search"
    //       className={inputStyles}
    //       placeholder="Search"
    //       aria-label="Search"
    //       aria-describedby="button-addon2"
    //     />

    //     {/* <!--Search icon--> */}
    //     <span className={iconStyles} id="basic-addon2">
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         viewBox="0 0 20 20"
    //         fill="currentColor"
    //         className="h-5 w-5"
    //       >
    //         <path
    //           fillRule="evenodd"
    //           d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
    //           clipRule="evenodd"
    //         />
    //       </svg>
    //     </span>
    //   </div>
    // </div>
  );
}
