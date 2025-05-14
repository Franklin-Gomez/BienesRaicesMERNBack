import bcrypt from 'bcrypt'

export const hasPassword =  async ( password : string) => { 
    const salt = await bcrypt.genSalt( 10 );
    return await bcrypt.hash( password , salt)
}

export const validatePassword  = async ( password : string, hasPassword : string ) => {
    const resultado =  await bcrypt.compare( password , hasPassword);
    return resultado
}