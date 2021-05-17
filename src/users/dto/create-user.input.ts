import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
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
