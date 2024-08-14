import { CommandPayload, CommandConstructor } from '../types/global';

export class Command {
    public constructor({
        name,
        aliases,
    }: CommandConstructor) {};

    public execute(payload: CommandPayload) {};
}