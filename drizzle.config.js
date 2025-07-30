export default{
    dialect:'postgresql',
    scheme:'./utils/schema.jsx',
    out:'.drizzle',
    dbCredentials:{
        url:process.env.NEXT_PUBLIC_DATABSE_URL,
        connectionString:NEXT_PUBLIC_DATABSE_URL
        
    }
}