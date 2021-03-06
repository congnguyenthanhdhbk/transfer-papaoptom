import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BrandRes {
  @Field(() => Int, { nullable: true })
  id?: number;
  @Field(() => String, { nullable: true })
  name?: string;
}
