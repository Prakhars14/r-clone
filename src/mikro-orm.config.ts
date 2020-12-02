import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import {MikroORM} from "@mikro-orm/core";
import path from "path";
import { MongoDriver } from '@mikro-orm/mongodb';
export default {
    migrations:{
        path:path.join(__dirname, "./migrations"),
        pattern:/^[\w-]+\d+\.[tj]s$/,
    },
    entities:[Post],
    clientUrl:process.env.MONGO_URI,
    type: 'mongo',
    implicitTransactions: true,
    debug: !__prod__
} as Parameters<typeof MikroORM.MongoDriver>[0];