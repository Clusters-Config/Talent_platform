import z from 'zod';


const Loginlist = z.object({ 
    username: z.string(),
    password: z.string(),
})

const Registerlist = z.object({
    firstname: z.string(),
    lastname: z.string(),
    username: z.string(),
    password:z.string(),
})

const Joblist  = z.object({ 
    title: z.string(),
    content: z.string(),
    name: z.string(),
    position: z.string(),
})

const Networklist = z.object({
    title: z.string(),
    employment: z.string(),
})

export { Loginlist , Registerlist , Joblist , Networklist }