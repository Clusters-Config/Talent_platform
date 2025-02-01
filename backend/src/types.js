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

const Talentlist = z.object({
    name: z.string(),
    label: z.array(z.string()),
    role: z.string(),
    level: z.string(),
    avail: z.string(),
    location: z.string(),
})

export { Loginlist , Registerlist , Joblist , Networklist , Talentlist }