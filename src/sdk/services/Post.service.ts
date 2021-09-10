import { Service } from "../Service";

import { Post } from "../@types";
import { generateQueryString } from "../utils/generateQueryString";

export class PostService extends Service {
    static getAllPosts(search: Post.Query) {

        const queryString = generateQueryString(search);

        return this.Http.get<Post.Paginated>('/posts'.concat(queryString))
            .then(this.getData);
    }

    static insertNewPost(post: Post.Input) {
        return this.Http
            .post<Post.Detailed>('/posts', post)
            .then(this.getData);
    }

}