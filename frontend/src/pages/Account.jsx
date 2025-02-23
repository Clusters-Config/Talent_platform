import React, { useState, useEffect } from 'react'
import Loading from '../components/Loading'

const Account = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 via-green-200 to-yellow-200 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900">
        <Loading type="balls" color="green" />
      </div>
    );
  }

  return (
    <>
    <h1 className='text-center font-bold text-4xl mt-40 '>Here comes the account page content</h1>
    </>

  )
}

export default Account
