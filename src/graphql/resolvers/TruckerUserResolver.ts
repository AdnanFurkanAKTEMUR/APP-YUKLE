import {TruckerUser} from "@entities/TruckerUser";
import { DataSource } from "typeorm";
import  argon2  from "argon2";
import generateToken from "@helpers/generateToken";

const TruckerUserResolver ={
Query:{
 getAllTruckerUser: async(_parent: any, _args: any, _context:any, _info: any) => {
 const truckerUsers = await TruckerUser.find();
 return truckerUsers;
 },
 getTruckerUser: async(_parent: any, args: any, _context:any, _info: any) => {
 const trucker = await TruckerUser.findOne({where: {id: args.input.id}});
 return trucker
},

},

Mutation:{
    createTruckerUser:async (_parent: any, args: any, context: any, _info: any) =>{
        const{TruckerName, TruckerSurname, 
            TruckerIdentificationNumer, TruckerMail, TruckerPhone, 
            TruckerPassword, TruckerUserName } = args.input;
            const conn: DataSource = context.SqlConnection;
            const hashedTruckerPassword = await argon2.hash(TruckerPassword);
            const TruckerVerificationToken = generateToken(32);
            const TruckerVerificationTokenExpires = new Date(Date.now() + 30 * 60 * 1000);
            let truckerUser: TruckerUser;
            try {
                const result = await conn
                  .createQueryBuilder()
                  .insert()
                  .into(TruckerUser)
                  .values({
                    TruckerName,
                    TruckerSurname,
                    TruckerIdentificationNumer,
                    TruckerMail,
                    TruckerPhone,
                    TruckerUserName,
                    TruckerPassword: hashedTruckerPassword,
                    TruckerVerificationToken,
                    TruckerVerificationTokenExpires,
                    TruckerVerfied: false,
                  })
                  .returning("*")
                  .execute();
                truckerUser = result.raw[0];
                return truckerUser;
              } catch (x) {
                throw new Error("Database Hatası!" + x);
              }
    },
},
};


export default TruckerUserResolver;