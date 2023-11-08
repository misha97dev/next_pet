import { PrismaClient } from "@prisma/client";
declare global {
  namespace NodeS {
    interface Global {}
  }
}
interface CustomNodeJsGlobal extends NodeS.Global {
  prisma: PrismaClient;
}
declare const global: CustomNodeJsGlobal;
const prisma = global.prisma || new PrismaClient();
if (process.env.NODE_ENV === "development") global.prisma = prisma;
export default prisma;
