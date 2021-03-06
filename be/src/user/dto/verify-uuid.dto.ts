import { IsNotEmpty, IsUUID } from "class-validator";
import { ApiModelProperty } from "@nestjs/swagger/dist/decorators/api-model-property.decorator";

export class VerifyUuidDto {
    @ApiModelProperty({
        description: "uuid to verify user",
        format: "uuid",
        uniqueItems: true,
    })
    @IsNotEmpty()
    @IsUUID()
    readonly verification: string;
}