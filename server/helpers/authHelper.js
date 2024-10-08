import bcrypt from 'bcrypt'

export const hashPassword = async(password) =>{
    try{
        const SaltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, SaltRounds)
        return hashedPassword
    }
    catch (error){
        console.log(error)
    }
};

export const ComparePassword = async (password,hashedPassword) =>{
    return bcrypt.compare(password,hashedPassword);
}