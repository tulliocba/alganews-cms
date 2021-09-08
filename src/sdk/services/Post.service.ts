import Service from "../Service";

import { Post } from "../@types";

export class PostService extends Service {
    static getAllPosts() {
        return this.Http.get<Post.Paginated>('/posts')
            .then(this.getData);
    }

    static insertNewPost(post: Post.Input) {
        return this.Http
            .post<Post.Detailed>('/posts', post)
            .then(this.getData);

    }

}