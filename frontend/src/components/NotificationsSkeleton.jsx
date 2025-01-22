import React from 'react'

const NotificationsSkeleton = () => {
    const NotificationData =[
       {title:"Liked your post", content:"Hello connections..............."},
       {title:"Commented to your post", content:"Hello connections..............."},
       {title:"Liked your post", content:"Hello connections..............."},
       {title:"Posted a job role", content:"Hello connections..............."},
       {title:"Liked your post", content:"Hello connections..............."},
       {title:"Liked your post", content:"Hello connections..............."},
       {title:"Liked your post", content:"Hello connections..............."},
       {title:"Commented to your post", content:"Hello connections..............."},
       {title:"Liked your post", content:"Hello connections..............."},
       {title:"Posted a job role", content:"Hello connections..............."},
       {title:"Liked your post", content:"Hello connections..............."},
       {title:"Liked your post", content:"Hello connections..............."},
       
       
    ]
return (
    <>
    <div role="status" className="max-w-2xl mx-[30%] p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow dark:divide-gray-700 md:p-6 dark:border-gray-700">
        <span className="text-4xl font-serif ">Notifications</span>
        {NotificationData.map((_, index) => (
            <div key={index} className="flex items-center justify-between pt-4">
                <div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5 animate-pulse"></div>
                    <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700 animate-pulse"></div>
                </div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
            </div>
        ))}
    </div>
    </>
)
}

export default NotificationsSkeleton