import {IS24PublishController} from "./IS24PublishController";

export class IS24PublishService {

    public readonly publish: IS24PublishController;

    constructor() {
        this.publish = new IS24PublishController();
    }
}

export const IS24PublishServiceInstance = new IS24PublishService();
