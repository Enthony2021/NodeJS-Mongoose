import mongoose from 'mongoose';

export default class conn {
    static async main(): Promise<void> {
        try {
            await mongoose.connect(`${process.env.DB_ADRESS}/${process.env.DB_SCHEMA}`);
            console.log('Database conectado com sucesso!');
        } catch (error) {
            console.log("Conexão com o banco de dados falhou :(")
        }
    }
}   


