import { User } from "../@types";
import { Service } from "../Service";

export class UserService extends Service {
    static getAllEditors() {
        return this.Http
            .get<User.EditorSummary[]>('/users/editors')
            .then(this.getData);
    }
}