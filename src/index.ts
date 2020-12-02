import {MikroORM} from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import microConfig from './mikro-orm.config';
import { MongoDriver } from '@mikro-orm/mongodb';

const main=async()=>{
    const orm = await MikroORM.init<MongoDriver>(microConfig);

    const post=orm.em.create(Post, {title: 'my first post'});
    await orm.em.persistAndFlush(post);
}

main();
