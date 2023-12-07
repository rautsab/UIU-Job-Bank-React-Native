import {Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Applied} from "../../models/applied.model";
import {AppliedController} from "./applied.controller";
import {AppliedService} from "./applied.service";

@Module({
    imports: [TypeOrmModule.forFeature([Applied])],
    controllers: [AppliedController],
    providers: [AppliedService]
})
export class AppliedModule {
}