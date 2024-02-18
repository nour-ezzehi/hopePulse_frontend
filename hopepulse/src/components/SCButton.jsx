import React from 'react'
import { HeartIcon } from '@heroicons/react/24/solid';

const SCButton = () => {
  return (
    <div className="flex justify-start mt-48"> {/* Change justify-center to justify-start */}
      <button className="px-2 py-2 text-primary bg-fafafa font-semibold text-xl shadow-md hover:bg-grayish flex rounded-md">
      Start Your Campaign<span className="ml-4"><HeartIcon className="h-8 w-8 text-primary" /></span>
      </button>
    </div>
  )
}

export default SCButton
