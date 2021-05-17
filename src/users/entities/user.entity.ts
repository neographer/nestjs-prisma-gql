import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int, { description: 'Id' })
  id: number;
  @Field()
    firstname: string
    @Field()
    lastname: string
    @Field()
    email: string
    @Field()
    mobile: string
    @Field()
    gender: string
    @Field()
    location: string
    @Field()
    age: number
    @Field()
    experience: number
}
